/* Lógica — funciona como app e abre mesmo sem internet.
   Arquivos do próprio site: busca na rede primeiro (assim todo mundo recebe as atualizações)
   e usa a cópia salva quando estiver sem internet. Fontes: cópia salva primeiro. */
const CACHE = "logica-v1";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
const save = (req, res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin)
    e.respondWith(fetch(req).then(r => save(req, r)).catch(() => caches.match(req).then(m => m || caches.match("./index.html"))));
  else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname))
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => save(req, r))));
});
