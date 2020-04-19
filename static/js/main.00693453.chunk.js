(this["webpackJsonpbruno.rm.ferreira"]=this["webpackJsonpbruno.rm.ferreira"]||[]).push([[0],{18:function(n,t,e){n.exports=e(39)},25:function(n,t,e){var r={"./angular.svg":26,"./css.svg":27,"./git.svg":28,"./github.svg":29,"./gitlab.svg":30,"./html.svg":31,"./javascript.svg":32,"./profile.jpg":33,"./react.svg":34,"./vue.svg":35,"./webpack.svg":36};function i(n){var t=a(n);return e(t)}function a(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=a,n.exports=i,i.id=25},26:function(n,t,e){n.exports=e.p+"static/media/angular.ddac8f75.svg"},27:function(n,t,e){n.exports=e.p+"static/media/css.c8d54e21.svg"},28:function(n,t,e){n.exports=e.p+"static/media/git.a5e61872.svg"},29:function(n,t,e){n.exports=e.p+"static/media/github.8136d6ce.svg"},30:function(n,t,e){n.exports=e.p+"static/media/gitlab.eef1b72c.svg"},31:function(n,t,e){n.exports=e.p+"static/media/html.0a14a528.svg"},32:function(n,t,e){n.exports=e.p+"static/media/javascript.a745037d.svg"},33:function(n,t,e){n.exports=e.p+"static/media/profile.27c9cccb.jpg"},34:function(n,t,e){n.exports=e.p+"static/media/react.7daf3d1e.svg"},35:function(n,t,e){n.exports=e.p+"static/media/vue.e33f3b82.svg"},36:function(n,t,e){n.exports=e.p+"static/media/webpack.f5d2d690.svg"},39:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(13),o=e.n(a),c=e(4),l=e(3),s={content:{currentIndex:0}},u=Object(r.createContext)(s),f=u.Provider,d="scroll_to_about",m="scroll_to_skills",v=function(n){var t=n.children,e=Object(r.useReducer)((function(n,t){switch(t.type){case d:return Object(c.a)({},n,{content:{currentIndex:0}});case m:return Object(c.a)({},n,{content:{currentIndex:1}});default:throw new Error("Invalid Dispatch Action")}}),s),a=Object(l.a)(e,2),o=a[0],u=a[1];return i.a.createElement(f,{value:{state:o,dispatch:u}},t)},h=e(1),p=e(2);function g(){var n=Object(h.a)(["\n  user-select: none;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  cursor: pointer;\n"]);return g=function(){return n},n}function b(){var n=Object(h.a)(["\n  color: var(--color-normal);\n  font-size: var(--font-small);\n  &.colored {\n    color: var(--color-primary);\n  }\n"]);return b=function(){return n},n}var x,y,j,w=p.b.p(b()),O=p.b.div(g()),E={photo:"profile.jpg",name:"Bruno Ramires",bio:"I am currently studying and honing my knowledge of front end technologies. Specifically with HTML, CSS and JavaScript! And some frameworks like React, Vue and Angular.",logotipo:"bruno.rm.ferreira",social:{github:{url:"https://github.com/brunormferreira",stats:"+80 Followers",icon:"FiGithub",statsIcon:"FiUserCheck"},linkedin:{url:"https://www.linkedin.com/in/bruno-ramires-80395517b",stats:"+200 Connections",icon:"FiLinkedin",statsIcon:"FiStar"},mail:{url:"mailto:brunormferreira@hotmail.com",icon:"FiSend"}},__content:"\r\n"},k=E.logotipo,C=k.match(/\./g);if(C){var I=k.split("."),S=Math.floor(I.length/2),F=I.filter((function(n,t){return t===S})),z=Object(l.a)(F,1);x=z[0],y=I.filter((function(n,t){return t<S})),j=I.filter((function(n,t){return t>S}))}var A=function(){var n=Object(r.useContext)(u),t=n.state,e=n.dispatch;return i.a.createElement(O,{onClick:function(){0!==t.content.currentIndex&&e({type:d})}},C?i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null,y.join("."),"."),i.a.createElement(w,{className:"colored"},x),i.a.createElement(w,null,".",j.join("."))):i.a.createElement(w,null,E.logotipo))},N=e(10);function H(){var n=Object(h.a)(["\n  font-size: ",";\n  padding: ",";\n  color: ",";\n\n  display: flex;\n  align-items: center;\n\n  transition: var(--transition);\n\n  svg {\n    margin-right: 12px;\n  }\n  * {\n    transition: var(--transition);\n  }\n\n  &:not(.primary) {\n    &:hover {\n      color: var(--color-hovered);\n      * {\n        color: var(--color-hovered);\n      }\n    }\n  }\n  &.primary {\n    color: var(--color-primary);\n  }\n"]);return H=function(){return n},n}var W=p.b.div(H(),(function(n){return n.config.fontSize}),(function(n){return n.config.padding}),(function(n){return n.config.color})),_={color:"var(--color-normal)",icon:null,fontSize:"var(--font-small)",padding:"1rem"},L=function(n){var t=n.config,e=(t=void 0===t?{}:t).icon,r=t.variant,a=Object(N.a)(t,["icon","variant"]),o=n.children,c=Object(N.a)(n,["config","children"]);return i.a.createElement(W,Object.assign({className:r,config:Object.assign({},_,a)},c),e&&i.a.createElement(e,null),o)};function M(){var n=Object(h.a)(["\n  padding: 1rem;\n\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  flex: 1;\n\n  max-width: 200px;\n"]);return M=function(){return n},n}function R(){var n=Object(h.a)(["\n  padding: 0.5rem;\n\n  width: 100%;\n\n  max-width: 1150px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return R=function(){return n},n}function D(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  z-index: 5;\n"]);return D=function(){return n},n}var T=p.b.nav(D()),J=p.b.div(R()),U=p.b.div(M()),B=function(){var n=Object(r.useContext)(u),t=n.state,e=n.dispatch;return console.log(t),i.a.createElement(T,null,i.a.createElement(J,null,i.a.createElement(A,null),i.a.createElement(U,null,i.a.createElement(L,{config:{variant:0===t.content.currentIndex&&"primary"},as:"button",type:"button",onClick:function(){return 0!==t.content.currentIndex&&e({type:d})}},"about"),i.a.createElement(L,{config:{variant:1===t.content.currentIndex&&"primary"},as:"button",type:"button",onClick:function(){return 1!==t.content.currentIndex&&e({type:m})}},"skills"))))};function P(){var n=Object(h.a)(["\n  color: var(--color);\n\n  max-width: 400px;\n  padding: 1rem;\n  padding-top: 0;\n\n  text-align: center;\n  line-height: 2;\n"]);return P=function(){return n},n}function q(){var n=Object(h.a)(["\n  display: flex;\n  user-select: none;\n"]);return q=function(){return n},n}function G(){var n=Object(h.a)(["\n  display: flex;\n  user-select: none;\n  margin: 2rem 0;\n"]);return G=function(){return n},n}function V(){var n=Object(h.a)(["\n  color: var(--color-normal);\n  font-size: var(--font-big);\n\n  margin: 2rem 0;\n  font-weight: 400;\n"]);return V=function(){return n},n}function K(){var n=Object(h.a)(["\n  user-select: none;\n\n  object-fit: cover;\n  object-position: center;\n  border: 3px solid var(--color-normal);\n\n  width: 120px;\n  height: 120px;\n\n  border-radius: 50%;\n"]);return K=function(){return n},n}function Q(){var n=Object(h.a)(["\n  color: var(--color);\n  font-weight: 400;\n  font-size: 1.4em;\n"]);return Q=function(){return n},n}function X(){var n=Object(h.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n\n  border: 2px solid var(--color-normal);\n\n  margin-right: 16px;\n\n  font-family: Arial, Helvetica, sans-serif, sans-serif;\n\n  padding: 3px 5px;\n  border-radius: 8px;\n\n  width: 45px;\n  height: 45px;\n\n  font-weight: 500;\n  font-size: var(--font-normal);\n\n  transition: var(--transition);\n  &:hover {\n    color: #111;\n    background: #f7df1e;\n    border-color: #f7df1e;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  user-select: none;\n"]);return Y=function(){return n},n}function Z(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-direction: column;\n\n  padding: 1rem;\n\n  height: 100%;\n"]);return Z=function(){return n},n}var $=p.b.div(Z()),nn=p.b.div(Y()),tn=p.b.div(X()),en=p.b.p(Q()),rn=p.b.img(K()),an=p.b.h1(V()),on=p.b.div(G()),cn=p.b.div(q()),ln=p.b.p(P()),sn=function(){return i.a.createElement($,null,i.a.createElement(nn,null,i.a.createElement(tn,null,"JS"),i.a.createElement(en,null,"Developer")),i.a.createElement(rn,{src:e(25)("./"+E.photo),alt:E.name}),i.a.createElement(an,null,E.name),i.a.createElement(cn,null,Object.keys(E.social).map((function(n){return i.a.createElement(L,{key:n,as:"a",href:E.social[n].url,config:{padding:"0 1rem",icon:e(12)[E.social[n].icon]},target:"_blank",rel:"noopener noreferrer external"},n.toUpperCase())}))),i.a.createElement(on,null,Object.keys(E.social).map((function(n){return E.social[n].stats&&i.a.createElement(L,{key:n,as:"label",config:{icon:e(12)[E.social[n].statsIcon],padding:"0 1rem"}},E.social[n].stats)}))),i.a.createElement(ln,null,E.bio))},un=e(17),fn=e.n(un);function dn(){var n=Object(h.a)(["\n  flex: 0 0 100%;\n"]);return dn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  display: flex;\n  height: 100%;\n"]);return mn=function(){return n},n}function vn(){var n=Object(h.a)(["\n  z-index: 5;\n  flex: 1;\n"]);return vn=function(){return n},n}var hn=Object(p.b)(fn.a)(vn()),pn=p.b.div(mn()),gn=p.b.div(dn()),bn=function(){var n=Object(r.useContext)(u),t=n.state,e=(n.dispatch,Object(r.useState)(null)),a=Object(l.a)(e,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){o&&t.content.currentIndex!==o.selectedScrollSnap()&&o.scrollTo(t.content.currentIndex)}),[t.content.currentIndex]),i.a.createElement(hn,{options:{draggable:!1},emblaRef:c},i.a.createElement(pn,null,i.a.createElement(gn,null,i.a.createElement(sn,null)),i.a.createElement(gn,null,"Slide 2")))},xn=e(5),yn=e.n(xn),jn=e(8),wn=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)};var On=function(n){var t={canvasNode:n,canvas:null,colors:["#9da5b4","#F1F1F1","#85cff9"],constants:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},removeRain:function(){window.removeEventListener("resize",e)},getWindowSize:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight}},updateConstants:function(){this.constants=this.getWindowSize()},setSize:function(n,t){this.canvasNode.width=n,this.canvasNode.height=t},init:function(){window.addEventListener("resize",e),e(),this.initCanvas(),this.initAnimation()},initCanvas:function(){this.canvas=this.canvasNode.getContext("2d")},initAnimation:function(){var n=Object(jn.a)(yn.a.mark((function n(){return yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.runAnimation();case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),runAnimation:function(){var n=Object(jn.a)(yn.a.mark((function n(){var t;return yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(t={length:1,items:[],context:null,init:function(n){var t=this;this.context=n,Array.from({length:this.length}).map((function(){t.items.push(t.generateItem.call(t))}))},generateItem:function(){var n=wn(10,20),t=this.context.constants,e=t.innerWidth,r=t.innerHeight,i=["",""].map((function(t,i){var a=0===i,o=[0-n,0],c=wn(0,a?r:e),l=[c-n,c];return{x:a?o:l,y:a?l:o}}));return Object(c.a)({velocity:wn(20,25)},i[wn(0,1)],{color:this.context.colors[wn(0,4)]})},animate:function(){(function n(){this.nextFrame(),this.renderFrame(),requestAnimationFrame(n.bind(this))}).call(this)},nextFrame:function(){var n=this;this.items=this.items.map((function(t){var e=n.context.constants,r={x:e.innerWidth,y:e.innerHeight},i=r.x,a=r.y,o=Object(c.a)({},t,{x:[t.x[0]+t.velocity,t.x[1]+t.velocity],y:[t.y[0]+t.velocity,t.y[1]+t.velocity]});return(o.x[0]>=i||o.y[0]>=a)&&(o=n.generateItem()),o}))},renderFrame:function(){var n=this;this.context.clearCanvas(),this.items.forEach((function(t){var e=t.x,r=t.y;n.context.drawLine(e[0],r[0],e[1],r[1],{color:t.color})}))}}).init(this),requestAnimationFrame(t.animate.bind(t));case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),clearCanvas:function(){this.canvas.clearRect(0,0,this.canvasNode.width,this.canvasNode.height)},drawLine:function(n,t,e,r,i){var a=i.color,o=new Path2D;o.moveTo(n,t),o.lineTo(e,r),this.canvas.beginPath(),this.canvas.shadowBlur=20,this.canvas.shadowColor="rgba(0,0,0,0.12)",this.canvas.strokeStyle=a,this.canvas.stroke(o)}},e=function(){this.updateConstants();var n=this.constants,t=n.innerWidth,e=n.innerHeight;this.setSize(t,e)}.bind(t);return t.init(),t};function En(){var n=Object(h.a)(["\n  position: fixed;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return En=function(){return n},n}var kn=p.b.canvas(En()),Cn=function(){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n&&n.current&&On(n.current)}),[]),i.a.createElement(kn,{ref:n})};function In(){var n=Object(h.a)(['\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        border: none;\n        outline: none;\n        list-style: none;\n        font-family: "Montserrat", sans-serif;\n        text-decoration: none;\n        -webkit-tap-highlight-color: transparent;\n        color: var(--color-normal);\n        background: transparent;\n    }\n\n    html {\n        width: 100%;\n        height: 100%;\n    }\n\n    body {\n        --dark: #1a1c22;\n        --light: #31363f;\n\n        --color-normal: #9da5b4;\n        --color-hovered: #f5f5f5;\n        --color-primary: #85cff9;\n\n        --font-normal: 1.1em;\n        --font-small: 0.8em;\n        --font-big: 1.5em;\n\n        --transition: all 0.2s ease-in-out;\n\n        height: 100%;\n    }\n\n    #root {\n        background: var(--dark);\n        height: 100%;\n        min-height: 580px;\n\n        display: flex;\n        flex-direction: column;\n    }\n\n    a, button{\n        cursor: pointer;\n    }\n']);return In=function(){return n},n}var Sn=Object(p.a)(In()),Fn=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Sn,null),i.a.createElement(Cn,null),i.a.createElement(v,null,i.a.createElement(B,null),i.a.createElement(bn,null)))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Fn,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.00693453.chunk.js.map