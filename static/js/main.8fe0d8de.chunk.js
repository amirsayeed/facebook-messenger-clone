(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{53:function(e,n,t){},54:function(e,n,t){},55:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t.n(o),s=t(17),c=t.n(s),r=(t(53),t(35)),i=(t(54),t(88)),l=t(90),d=t(91),u=t(86),f=t(87),m=(t(55),t(11)),p=Object(o.forwardRef)((function(e,n){var t=e.message,o=e.username===t.username;return Object(m.jsx)("div",{ref:n,className:"message ".concat(o&&"message__user"),children:Object(m.jsx)(d.a,{className:o?"message__userCard":"message__guestCard",children:Object(m.jsx)(u.a,{children:Object(m.jsxs)(f.a,{color:"white",variants:"h5",components:"h2",children:[!o&&"".concat(t.username||"Unknown User",": ")," ",t.message]})})})})})),g=t(34),h=g.a.initializeApp({apiKey:"AIzaSyCl2CZArlv5rV4JvsY9NRPbqbOd8HJxT8s",authDomain:"facebook-messenger-clone-7289d.firebaseapp.com",projectId:"facebook-messenger-clone-7289d",storageBucket:"facebook-messenger-clone-7289d.appspot.com",messagingSenderId:"136899198047",appId:"1:136899198047:web:e45646e2d7d2990f44efea",measurementId:"G-CXQWJ676EB"}).firestore(),b=t(46),j=t(45),v=t.n(j),w=t(89);var O=function(){var e=Object(o.useState)(""),n=Object(r.a)(e,2),t=n[0],a=n[1],s=Object(o.useState)([]),c=Object(r.a)(s,2),d=c[0],u=c[1],f=Object(o.useState)(""),j=Object(r.a)(f,2),O=j[0],k=j[1];return Object(o.useEffect)((function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(o.useEffect)((function(){k(prompt("Please enter your name"))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100",alt:""}),Object(m.jsx)("h1",{children:"Hello Sayeed\ud83d\ude80!"}),Object(m.jsxs)("h2",{children:["Welcome ",O]}),Object(m.jsx)("form",{className:"app__form",children:Object(m.jsxs)(i.a,{className:"app__formControl",children:[Object(m.jsx)(l.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return a(e.target.value)}}),Object(m.jsx)(w.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),h.collection("messages").add({message:t,username:O,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),a("")},children:Object(m.jsx)(v.a,{})})]})}),Object(m.jsx)(b.a,{children:d.map((function(e){var n=e.id,t=e.message;return Object(m.jsx)(p,{username:O,message:t},n)}))})]})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,92)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/facebook-messenger-clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/facebook-messenger-clone","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(n,e)}))}}(),_()}},[[69,1,2]]]);
//# sourceMappingURL=main.8fe0d8de.chunk.js.map