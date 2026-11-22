"""Joga os 3 tópicos do começo ao fim (primeiro acesso, sem progresso). Uso: python tests/test_topicos.py (precisa do Playwright)"""
import os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8803", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
errors = []
def answer(p):
    q = p.evaluate("L.cur")
    if q["type"] == "choice": p.click(f'#body .opt[data-i="{q["answer"]}"]'); p.click("#check")
    else:
        for i in range(len(q["pairs"])): p.click(f'.pairs .opt[data-side="L"][data-i="{i}"]'); p.click(f'.pairs .opt[data-side="R"][data-i="{i}"]')
    p.wait_for_selector(".foot.ok, .foot.no"); ok = p.query_selector(".foot.ok") is not None
    p.click("#check")
    if p.query_selector(".pep"): p.click("#go")
    return ok
try:
  with sync_playwright() as pw:
    b = pw.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    p = b.new_page(viewport={"width": 390, "height": 844}); p.on("pageerror", lambda e: errors.append(str(e)))
    p.goto("http://localhost:8803/index.html"); p.wait_for_selector(".block"); p.evaluate("S.last=dayStr(); S.streak=1"); p.screenshot(path="/tmp/logica_mapa.png", full_page=True)
    ids = p.evaluate("MAIN_PHASES.map(x=>x.id)"); print("fases:", len(ids))
    for k, pid in enumerate(ids):
        p.click(f'[data-ph="{pid}"]')
        if k == 0: p.screenshot(path="/tmp/logica_aprenda.png", full_page=True)
        p.click("#go")
        res = [answer(p) for _ in range(p.evaluate("L.total"))]; assert all(res), pid
        if k == 0: pass
        p.wait_for_selector("#map"); p.click("#map"); p.wait_for_selector(".block")
    print("XP:", p.evaluate("S.xp"), "| conquistas:", list(p.evaluate("S.achieved").keys()))
    assert p.evaluate("MAIN_PHASES.every(x=>done(x.id))")
    p.click('[data-tab="me"]'); p.screenshot(path="/tmp/logica_perfil.png", full_page=True)
    p.click('[data-tab="map"]'); p.click('[data-ph="t2p3"]'); p.click("#go"); p.screenshot(path="/tmp/logica_questao.png")
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
