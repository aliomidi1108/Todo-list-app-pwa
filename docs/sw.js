if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let l={};const o=e=>s(e,t),f={module:{uri:t},exports:l,require:o};i[t]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Cgr9ZkUd.js",revision:null},{url:"assets/index-CsC_Q1b7.css",revision:null},{url:"index.html",revision:"db972d09dee70a71b886c287f37c157b"},{url:"registerSW.js",revision:"5fa67143a90403292754d6a5fdb12068"},{url:"list128.png",revision:"c260e183e35f472ca10178885b4a9fb3"},{url:"list144.png",revision:"874ce7f3884ae699df9a18612485e6b9"},{url:"list192.png",revision:"b103025eaf6b58ef4fafe16aa86f4cf5"},{url:"list512.png",revision:"4ba9fd9011b3036206d76687b5115ce3"},{url:"list72.png",revision:"2237ae7abf32810bab035db017f08804"},{url:"manifest.webmanifest",revision:"ebc1780007c11a6bb666b8dde95d5403"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
