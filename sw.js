self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();const k=e.notification.data&&e.notification.data.k;e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c){if(k)try{c.postMessage({xsjOpen:k})}catch(_){}return c.focus()}}if(self.clients.openWindow)return self.clients.openWindow('./')}))});
