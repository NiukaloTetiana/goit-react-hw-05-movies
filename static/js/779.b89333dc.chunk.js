"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{1123:function(n,t,e){e.d(t,{a:function(){return i},Z:function(){return s}});var r,a=e(4137),u=e(168),o=e(7924).ZP.div(r||(r=(0,u.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.backgNav})),c=e(184),i=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.Z1,{visible:!0,height:"100",width:"100",color:"#ffc700",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""})})},s=i},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,u,o,c=e(9439),i=e(2791),s=e(7689),f=e(5735),p=e(168),l=e(7924),h=l.ZP.li(r||(r=(0,p.Z)(["\n  padding: 10px;\n  gap: 30px;\n  background-color: ",";\n  border-radius: ",";\n  transition: ",",\n    ",";\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.backgNav}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.transition.trnz}),(function(n){return n.theme.transition.delay}),(function(n){return n.theme.colors.gray})),d=l.ZP.h3(a||(a=(0,p.Z)(["\n  font-size: 20px;\n\n  text-shadow: ",";\n  padding-left: 6px;\n"])),(function(n){return n.theme.shadows.text})),g=l.ZP.p(u||(u=(0,p.Z)(["\n  font-size: 15px;\n  font-weight: 600;\n  color: ",";\n  text-shadow: ",";\n\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.text})),v=l.ZP.span(o||(o=(0,p.Z)(["\n  font-size: 15px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),m=e(2094),x=e(1123),w=e(184),b=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],u=(0,i.useState)(!1),o=(0,c.Z)(u,2),p=o[0],l=o[1];return(0,i.useEffect)((function(){l(!0),(0,f.Hu)(n).then(a).catch((function(n){return m.Am.error("Oops...Something went wrong: ".concat(n))})).finally((function(){return l(!1)}))}),[n]),(0,w.jsxs)(w.Fragment,{children:[p&&(0,w.jsx)(x.Z,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,w.jsx)("ul",{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,w.jsxs)(h,{children:[(0,w.jsxs)(g,{children:["Author: ",(0,w.jsxs)(v,{children:[e,"."]})]}),(0,w.jsx)(g,{children:r})]},t)}))}),!r.length&&(0,w.jsx)(d,{children:"No Reviews."})]})}},5735:function(n,t,e){e.d(t,{Df:function(){return c},Eb:function(){return f},Hu:function(){return p},Ph:function(){return i},TP:function(){return s}});var r=e(5861),a=e(7757),u=e.n(a),o=e(5294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"8aba4e3419a44727b7eb66f35fce4fa2",language:"en-US"}}),c=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("trending/movie/day?language=en-US");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.b89333dc.chunk.js.map