(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{50:function(e,n,t){e.exports=t(61)},55:function(e,n,t){},57:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),c=t.n(l),o=t(101),i=(t(55),t(33)),u=t.n(i),m=t(37),s=t(27),f=t(23),h=(t(57),t(94)),E=t(24),p=t(103),d=t(93),g=t(102),v=t(95),b=t(96),w=t(97),y=t(98),j=t(99),O=t(100);function k(){var e=Object(f.a)(["\n  width: 100%;\n  font-size: x-large;\n  padding: 0.2rem;\n"]);return k=function(){return e},e}function x(){var e=Object(f.a)(["\n  margin: auto;\n  width: 800px;\n"]);return x=function(){return e},e}function S(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-column-gap: 1re;\n  margin-top: 2vh;\n"]);return S=function(){return e},e}function C(){var e=Object(f.a)(["\n  text-align: center;\n  color: lightgreen\n"]);return C=function(){return e},e}function L(){var e=Object(f.a)(["\n  text-align: center;\n"]);return L=function(){return e},e}var W=function(e){var n=e.name,t=e.base;return r.a.createElement("div",{style:{marginLeft:"2vw"}},r.a.createElement("h1",null,n.english),r.a.createElement(d.a,{elevation:3},r.a.createElement("table",null,r.a.createElement("tbody",null,Object.keys(t).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,t[e]))}))))))},B=E.a.h1(L()),I=E.a.h3(C()),J=E.a.div(S()),N=E.a.div(x()),z=(E.a.input(k()),Object(h.a)({table:{minWidth:350}}));var A=function(){var e=r.a.useState(""),n=Object(s.a)(e,2),t=n[0],a=n[1],l=r.a.useState(null),c=Object(s.a)(l,2),o=c[0],i=c[1],f=r.a.useState([]),h=Object(s.a)(f,2),E=h[0],k=h[1],x=r.a.useState(!1),S=Object(s.a)(x,2),C=S[0],L=S[1],A=z();return r.a.useEffect((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(!0),fetch("http://localhost:3000/r-web/pokemon.json").then((function(e){return e.json()})).then((function(e){k(e),console.log(e,"testset"),L(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(N,null,r.a.createElement(B,null,"Hi! I'm Rogelio"),r.a.createElement(I,null,"You can search your favorite anime character here"),r.a.createElement(g.a,{style:{width:"100%"},variant:"outlined",onChange:function(e){return a(e.target.value)},value:t,label:"Enter you anime character here"}),r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement(v.a,{component:d.a},r.a.createElement(b.a,{className:A.table,"aria-label":"simple table"},r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Name"),r.a.createElement(j.a,{align:"center"},"Type"),r.a.createElement(j.a,{align:"center"},"Actions"))),r.a.createElement(O.a,null,C?r.a.createElement(y.a,null,r.a.createElement(j.a,{component:"th",scope:"row"},"Please wait loading...")):r.a.createElement(r.a.Fragment,null,E.filter((function(e){return e.name.english.toLowerCase().includes(t.toLowerCase())})).slice(0,20).map((function(e){return r.a.createElement(y.a,{key:e.id},r.a.createElement(j.a,{component:"th",scope:"row"},e.name.english),r.a.createElement(j.a,{align:"center"},e.type.join(", ")),r.a.createElement(j.a,{align:"center"},r.a.createElement(p.a,{variant:"contained",onClick:function(){return i(e)}}," Select")))})))))),o&&r.a.createElement(W,o))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null),r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.ce84ea18.chunk.js.map