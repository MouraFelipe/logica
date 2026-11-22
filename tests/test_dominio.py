"""Teste de domínio do Tópico 1: reprova abaixo de 80% e aprova com 80% (tópico dominado, nível sobe). Uso: python tests/test_dominio.py"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8805", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
save = {"phases": {f"t1p{i}": {"stars": 3, "best": 100, "plays": 1} for i in range(1, 5)}, "xp": 200, "streak": 1, "best": 1, "last": time.strftime("%Y-%m-%d")}
errors = []
def answer(p, right=True):
    q = p.evaluate("L.cur")
    if q["type"] == "choice":
        i = q["answer"] if right else (q["answer"] + 1) % len(q["options"]); p.click(f'#body .opt[data-i="{i}"]'); p.click("#check")
    else:
        for i in range(len(q["pairs"])): p.click(f'.pairs .opt[data-side="L"][data-i="{i}"]'); p.click(f'.pairs .opt[data-side="R"][data-i="{i}"]')
    p.wait_for_selector(".foot.ok, .foot.no"); p.click("#check")
    if p.query_selector(".pep"): p.click("#go")
try:
  with sync_playwright() as pw:
    b = pw.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    ctx = b.new_context(viewport={"width": 390, "height": 844})
    ctx.add_init_script("try{ if(!localStorage.getItem('logica-v1')) localStorage.setItem('logica-v1', %s); }catch(e){}" % json.dumps(json.dumps(save)))
    p = ctx.new_page(); p.on("pageerror", lambda e: errors.append(str(e))); p.goto("http://localhost:8805/index.html"); p.wait_for_selector(".block")
    assert "CONJUNÇÃO" in p.inner_text("#next").upper() and p.query_selector('[data-ms="t1"]:not(.locked)')
    p.click('[data-ms="t1"]'); p.click("#go")
    for _ in range(p.evaluate("L.total")): answer(p, right=False)
    p.wait_for_selector("#again"); assert p.evaluate("level()") == 1; print("reprovou:", p.inner_text(".cards3").replace("\n", " "))
    p.click("#again"); p.click("#go")
    for _ in range(p.evaluate("L.total")): answer(p)
    p.wait_for_selector(".newach"); print("aprovou:", p.inner_text(".newach").replace("\n", " "))
    assert p.evaluate("level()") == 2 and p.evaluate("!!S.achieved.master")
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
