/* FreshJobs service worker — offline support */
const C='freshjobs-v19';const CORE=['./','./index.html','./assets/css/style.css','./assets/js/app.js','./data/config.js','./data/jobs.js','./assets/img/logo.jpg','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.origin!==location.origin){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok&&/fonts|cdnjs|jsdelivr/.test(u.host)){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res})).catch(()=>caches.match(r)));return}
 e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))))});
