if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return t[e]||(r=new Promise((async r=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},r=(r,t)=>{Promise.all(r.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(r)};self.define=(r,n,i)=>{t[r]||(t[r]=Promise.resolve().then((()=>{let t={};const s={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return t;case"module":return s;default:return e(r)}}))).then((e=>{const r=i(...e);return t.default||(t.default=r),t}))})))}}define("./service-worker.js",["./workbox-176fe0b1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.dc8ce36ba546db1d10cd.js",revision:null},{url:"index.dc8ce36ba546db1d10cd.js.LICENSE.txt",revision:"a3caf67be2426993478c86ca158a8ee0"},{url:"index.html",revision:"ac83fbfd1b1706e25f28590b0a258aac"}],{})}));