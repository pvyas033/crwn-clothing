(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{69:function(e,n,t){},71:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var r,c,a,i,s,o,l,u,d,b,p,j,O,m,h,f,x,g,v,S=t(1),y=t.n(S),w=t(38),I=t.n(w),_=t(12),C=t(40),E=t(41),N=t(46),T=t(44),k=t(16),U=t(13),R=t.p+"static/media/Door_store.6505ff07.PNG",A=function(e){return e.cart},L=Object(U.a)([A],(function(e){return e.cartItems})),G=Object(U.a)([A],(function(e){return e.hidden})),F=Object(U.a)([L],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),M=Object(U.a)([L],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)})),P={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},H=function(e){return{type:P.SIGN_IN_SUCCESS,payload:e}},D=function(e){return{type:P.SIGN_IN_FAILURE,payload:e}},z=function(e){return{type:P.SIGN_UP_SUCCESS,payload:e}},q=Object(U.a)([function(e){return e.user}],(function(e){return e.currentUser})),V=t.p+"static/media/empty-cart.0bc2b32b.png",K={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},B=function(){return{type:K.TOGGLE_CART_HIDDEN}},W=function(e){return{type:K.ADD_ITEM,payload:e}},Y=function(){return{type:K.CLEAR_CART}},J=(t(69),t(2)),Q=function(e){var n=e.item,t=n.imageUrl,r=n.price,c=n.name,a=n.quantity;return Object(J.jsxs)("div",{className:"cart-item",children:[Object(J.jsx)("img",{src:t,alt:"item"}),Object(J.jsxs)("div",{className:"item-details",children:[Object(J.jsx)("span",{className:"name",children:c}),Object(J.jsxs)("span",{className:"price",children:[a," X ",r,"\u20b9"]})]})]})},X=t(6),Z=t(27),$=t(9),ee=t(10),ne=Object(ee.b)(r||(r=Object($.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),te=Object(ee.b)(c||(c=Object($.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),re=Object(ee.b)(a||(a=Object($.a)(["\n  background-color: #4285f4;\n  color: white;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),ce=ee.c.button(i||(i=Object($.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ',"\n"])),(function(e){return e.isGoogleSignIn?re:e.inverted?te:ne})),ae=["children"],ie=function(e){var n=e.children,t=Object(Z.a)(e,ae);return Object(J.jsx)(ce,Object(X.a)(Object(X.a)({},t),{},{children:n}))},se=(t(71),Object(U.b)({cartItems:L})),oe=Object(k.g)(Object(_.b)(se)((function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return Object(J.jsxs)("div",{className:"cart-dropdown",children:[Object(J.jsx)("div",{className:"cart-items",children:n.length?n.map((function(e){return Object(J.jsx)(Q,{item:e},e.id)})):Object(J.jsx)("img",{src:V,alt:"Your cart is empty"})}),Object(J.jsx)(ie,{onClick:function(){t.push("/checkout"),r(B())},children:"GO TO CHECKOUT"})]})}))),le=["title","titleId"];function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function de(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function be(e,n){var t=e.title,r=e.titleId,c=de(e,le);return S.createElement("svg",ue({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?S.createElement("title",{id:r},t):null,S.createElement("g",null,S.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),S.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),S.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),S.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),S.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),s||(s=S.createElement("g",null)),o||(o=S.createElement("g",null)),l||(l=S.createElement("g",null)),u||(u=S.createElement("g",null)),d||(d=S.createElement("g",null)),b||(b=S.createElement("g",null)),p||(p=S.createElement("g",null)),j||(j=S.createElement("g",null)),O||(O=S.createElement("g",null)),m||(m=S.createElement("g",null)),h||(h=S.createElement("g",null)),f||(f=S.createElement("g",null)),x||(x=S.createElement("g",null)),g||(g=S.createElement("g",null)),v||(v=S.createElement("g",null)))}var pe,je,Oe,me,he,fe,xe,ge,ve,Se,ye,we,Ie,_e,Ce,Ee,Ne,Te,ke,Ue,Re,Ae,Le,Ge,Fe,Me=S.forwardRef(be),Pe=(t.p,t(73),Object(U.b)({itemCount:F})),He=Object(_.b)(Pe,(function(e){return{toggleCartHidden:function(){return e(B())}}}))((function(e){var n=e.itemCount,t=e.toggleCartHidden;return Object(J.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(J.jsx)(Me,{className:"shopping-icon"}),Object(J.jsx)("span",{className:"item-count",children:n})]})})),De=t(26),ze=Object(ee.b)(pe||(pe=Object($.a)(["\n  cursor: pointer;\n"]))),qe=ee.c.div(je||(je=Object($.a)(["\n  height: 70px;\n  width: 100%;\n  display: grid;\n  place-items: center;\n  justify-content: space-between;\n  grid-template-columns: auto 170px;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]))),Ve=Object(ee.c)(De.b)(Oe||(Oe=Object($.a)(["\n  min-width: 180px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]))),Ke=ee.c.div(me||(me=Object($.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  column-gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n"]))),Be=Object(ee.c)(De.b)(he||(he=Object($.a)(["\n  ","\n"])),ze),We=Object(U.b)({currentUser:q,hidden:G}),Ye=Object(_.b)(We,(function(e){return{signOutStart:function(){return e({type:P.SIGN_OUT_START})}}}))((function(e){var n=e.currentUser,t=e.hidden,r=e.signOutStart;return Object(J.jsxs)(qe,{children:[Object(J.jsx)(Ve,{to:"/",children:Object(J.jsx)("img",{className:"logo-img",src:R,alt:"logo"})}),Object(J.jsxs)(Ke,{children:[Object(J.jsx)(Be,{to:"/shop",children:"SHOP"}),n?Object(J.jsx)(Be,{as:"div",onClick:r,children:"SIGN OUT"}):Object(J.jsx)(Be,{to:"/signin",children:"SIGN IN"}),Object(J.jsx)(He,{})]}),t?null:Object(J.jsx)(oe,{})]})})),Je=Object(ee.a)(fe||(fe=Object($.a)(["\nbody {\n    font-family: 'Open Sans Condensed';\n    padding: 20px 40px;\n\n    @media screen and (max-width: 800px){\n        padding: 10px\n    }\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n"]))),Qe=(t(74),Object(_.b)(null,(function(e){return{clearItem:function(n){return e(function(e){return{type:K.CLEAR_ITEM_FROM_CART,payload:e}}(n))},addItem:function(n){return e(W(n))},removeItem:function(n){return e(function(e){return{type:K.REMOVE_ITEM,payload:e}}(n))}}}))((function(e){var n=e.cartItem,t=e.clearItem,r=e.addItem,c=e.removeItem,a=n.name,i=n.imageUrl,s=n.price,o=n.quantity;return Object(J.jsxs)("div",{className:"checkout-item",children:[Object(J.jsx)("div",{className:"image-container",children:Object(J.jsx)("img",{src:i,alt:"item"})}),Object(J.jsx)("div",{className:"name",children:Object(J.jsx)("span",{children:a})}),Object(J.jsxs)("div",{className:"quantity",children:[Object(J.jsx)("div",{className:"arrow",onClick:function(){return c(n)},children:"\u276e"}),Object(J.jsx)("span",{className:"value",children:o}),Object(J.jsx)("div",{className:"arrow",onClick:function(){return r(n)},children:"\u276f"})]}),Object(J.jsx)("div",{className:"price",children:Object(J.jsx)("span",{children:s})}),Object(J.jsx)("div",{className:"remove-button",onClick:function(){return t(n)},children:Object(J.jsx)("span",{children:"\u2715"})})]})}))),Xe=t(56),Ze=t.n(Xe),$e=Object(_.b)(null,(function(e){return{clearCart:function(){return e(Y())}}}))((function(e){var n=e.price,t=e.clearCart,r=100*n;return Object(J.jsx)(Ze.a,{label:"Pay Now",name:"Door Store Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is ".concat(n,"\u20b9"),amount:r,token:function(e){alert("Payement Successful"),t()},allowRememberMe:!0,stripeKey:"pk_test_51J1PIxSFNiIxtGbM6GAncK9M3OyMKyYQt7iSs2My1oZ2qD1qWrToJDNgYZOoGVs88L0EGzMmxrfzyMMitJnHFSxx00OyBdSIIk"})})),en=(t(75),Object(U.b)({cartItems:L,total:M})),nn=Object(_.b)(en)((function(e){var n=e.cartItems,t=e.total;return n.length?Object(J.jsxs)("div",{className:"checkout-page",children:[Object(J.jsxs)("div",{className:"checkout-header",children:[Object(J.jsx)("div",{className:"header-block",children:Object(J.jsx)("span",{children:"Product"})}),Object(J.jsx)("div",{className:"header-block",children:Object(J.jsx)("span",{children:"Description"})}),Object(J.jsx)("div",{className:"header-block",children:Object(J.jsx)("span",{children:"Quantity"})}),Object(J.jsx)("div",{className:"header-block",children:Object(J.jsx)("span",{children:"Price"})}),Object(J.jsx)("div",{className:"last-child",children:Object(J.jsx)("span",{children:"Remove"})})]}),n.map((function(e){return Object(J.jsx)(Qe,{cartItem:e},e.id)})),Object(J.jsx)("div",{className:"total",children:Object(J.jsxs)("span",{children:[t,"\u20b9"]})}),Object(J.jsx)($e,{price:t}),Object(J.jsxs)("div",{className:"test-warning",children:["*Please user the following test credit card for payments*",Object(J.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/22 CVV: 123"]})]}):Object(J.jsx)("div",{className:"empty-cart",children:Object(J.jsx)("img",{src:V,alt:"Your cart is empty"})})})),tn=Object(U.a)([function(e){return e.directory}],(function(e){return e.sections})),rn=ee.c.div(xe||(xe=Object($.a)(["\n  height: ",";\n  min-width: 30%;\n  overflow: hidden;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n  &:hover {\n    cursor: pointer;\n    & .background-image {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n    & .content {\n      opacity: 0.9;\n    }\n  }\n  &:first-child {\n    margin-right: 7.5px;\n  }\n  &:last-child {\n    margin-left: 7.5px;\n  }\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"])),(function(e){return e.size?"380px":"240px"})),cn=ee.c.div(ge||(ge=Object($.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),an=ee.c.div(ve||(ve=Object($.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]))),sn=ee.c.span(Se||(Se=Object($.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]))),on=ee.c.span(ye||(ye=Object($.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]))),ln=Object(k.g)((function(e){var n=e.title,t=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(J.jsxs)(rn,{size:r,onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(J.jsx)(cn,{className:"background-image",imageUrl:t}),Object(J.jsxs)(an,{className:"content",children:[Object(J.jsx)(sn,{children:n.toUpperCase()}),Object(J.jsx)(on,{children:"SHOP NOW"})]})]})})),un=ee.c.div(we||(we=Object($.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),dn=["id"],bn=Object(U.b)({sections:tn}),pn=Object(_.b)(bn)((function(e){var n=e.sections;return Object(J.jsx)(un,{children:n.map((function(e){var n=e.id,t=Object(Z.a)(e,dn);return Object(J.jsx)(ln,Object(X.a)({},t),n)}))})})),jn=ee.c.div(Ie||(Ie=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),On=function(){return Object(J.jsx)(jn,{children:Object(J.jsx)(pn,{})})},mn=t(21),hn=ee.c.div(_e||(_e=Object($.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),fn=ee.c.div(Ce||(Ce=Object($.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),xn=["isLoading"],gn=function(e){return function(n){var t=n.isLoading,r=Object(Z.a)(n,xn);return t?Object(J.jsx)(hn,{children:Object(J.jsx)(fn,{})}):Object(J.jsx)(e,Object(X.a)({},r))}},vn=t(57),Sn=t.n(vn),yn=function(e){return e.shop},wn=Object(U.a)([yn],(function(e){return e.collections})),In=Object(U.a)([wn],(function(e){return e?Object.keys(e).map((function(n){return e[n]})):[]})),_n=Sn()((function(e){return Object(U.a)([wn],(function(n){return n?n[e]:null}))})),Cn=Object(U.a)([yn],(function(e){return e.fetching})),En=Object(U.a)([yn],(function(e){return!!e.collections})),Nn=ee.c.div(Ee||(Ee=Object($.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),Tn=Object(ee.c)(ie)(Ne||(Ne=Object($.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]))),kn=ee.c.div(Te||(Te=Object($.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),Un=ee.c.div(ke||(ke=Object($.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),Rn=ee.c.span(Ue||(Ue=Object($.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),An=ee.c.span(Re||(Re=Object($.a)(["\n  width: 10%;\n  text-align: right;\n"]))),Ln=Object(_.b)(null,(function(e){return{addItem:function(n){return e(W(n))}}}))((function(e){var n=e.item,t=e.addItem,r=n.name,c=n.price,a=n.imageUrl;return Object(J.jsxs)(Nn,{children:[Object(J.jsx)(kn,{style:{backgroundImage:"url(".concat(a,")")}}),Object(J.jsxs)(Un,{children:[Object(J.jsx)(Rn,{className:"name",children:r}),Object(J.jsx)(An,{className:"price",children:c})]}),Object(J.jsx)(Tn,{onClick:function(){return t(n)},inverted:!0,children:"Add to cart"})]})})),Gn=ee.c.div(Ae||(Ae=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),Fn=ee.c.h1(Le||(Le=Object($.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]))),Mn=ee.c.div(Ge||(Ge=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),Pn=function(e){var n=e.title,t=e.items;return Object(J.jsxs)(Gn,{children:[Object(J.jsx)(Fn,{children:n.toUpperCase()}),Object(J.jsx)(Mn,{children:t.slice(0,4).map((function(e){return Object(J.jsx)(Ln,{item:e},e.id)}))})]})},Hn=ee.c.div(Fe||(Fe=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Dn=Object(U.b)({collections:In}),zn=Object(_.b)(Dn)((function(e){var n=e.collections;return Object(J.jsx)(Hn,{children:n.map((function(e){var n=e.id,t=e.title,r=e.items;return Object(J.jsx)(Pn,{title:t,items:r},n)}))})})),qn=Object(U.b)({isLoading:Cn}),Vn=Object(mn.c)(Object(_.b)(qn),gn)(zn),Kn=t(4),Bn=t.n(Kn),Wn=t(34),Yn=t(36),Jn=(t(77),t(87),function(e,n){if(e){var t=Zn.doc("users/".concat(e.uid));if(!t.get().exists){var r=e.displayName,c=e.email,a=new Date;try{t.set(Object(X.a)({displayName:r,email:c,createdAt:a},n))}catch(i){alert(i.message)}}return t}});Yn.a.initializeApp({apiKey:"AIzaSyBR3Fsr-rFSedF9ppP_3LcDkFwCKAY771I",authDomain:"crwn-db-aadcf.firebaseapp.com",projectId:"crwn-db-aadcf",storageBucket:"crwn-db-aadcf.appspot.com",messagingSenderId:"469794204820",appId:"1:469794204820:web:757f15cb0c375beea81881",measurementId:"G-YBP7R189SL"});var Qn=function(e){return e.docs.map((function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{})},Xn=Yn.a.auth(),Zn=Yn.a.firestore(),$n=new Yn.a.auth.GoogleAuthProvider;$n.setCustomParameters({promt:"select_account"});Yn.a;var et,nt,tt,rt,ct={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},at=function(){return{type:ct.FETCH_COLLECTIONS_START}},it=function(e){return{type:ct.FETCH_COLLECTIONS_SUCCESS,payload:e}},st=function(e){return{type:ct.FETCH_COLLECTIONS_FAILURE,payload:e}},ot=ee.c.div(et||(et=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),lt=ee.c.h2(nt||(nt=Object($.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]))),ut=ee.c.div(tt||(tt=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),dt=Object(_.b)((function(e,n){return{collection:_n(n.match.params.collectionId)(e)}}))((function(e){var n=e.collection,t=n.title,r=n.items;return Object(J.jsxs)(ot,{children:[Object(J.jsx)(lt,{children:t}),Object(J.jsx)(ut,{children:r.map((function(e){return Object(J.jsx)(Ln,{item:e},e.id)}))})]})})),bt=Object(U.b)({isLoading:function(e){return!En(e)}}),pt=Object(mn.c)(Object(_.b)(bt),gn)(dt),jt=function(e){Object(N.a)(t,e);var n=Object(T.a)(t);function t(){return Object(C.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return Object(J.jsxs)("div",{className:"shop-page",children:[Object(J.jsx)(k.b,{exact:!0,path:"".concat(e.path),component:Vn}),Object(J.jsx)(k.b,{exact:!0,path:"".concat(e.path,"/:collectionId"),component:pt})]})}}]),t}(y.a.Component),Ot=Object(_.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(at())}}}))(jt),mt=t(33),ht=t(45),ft=(t(79),["handleChange","label"]),xt=function(e){var n=e.handleChange,t=e.label,r=Object(Z.a)(e,ft);return Object(J.jsxs)("div",{className:"group",children:[Object(J.jsx)("input",Object(X.a)({className:"form-input",onChange:n},r)),t?Object(J.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:t}):null]})},gt=(t(80),Object(_.b)(null,(function(e){return{googleSignInStart:function(){return e({type:P.GOOGLE_SIGN_IN_START})},emailSignInStart:function(n,t){return e({type:P.EMAIL_SIGN_IN_START,payload:{email:n,password:t}})}}}))((function(e){var n=e.googleSignInStart,t=e.emailSignInStart,r=Object(S.useState)({email:"",password:""}),c=Object(ht.a)(r,2),a=c[0],i=c[1],s=a.email,o=a.password,l=function(){var e=Object(Wn.a)(Bn.a.mark((function e(n){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(s,o);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(e){var n=e.target,t=n.value,r=n.name;i(Object(X.a)(Object(X.a)({},a),{},Object(mt.a)({},r,t)))};return Object(J.jsxs)("div",{className:"sign-in",children:[Object(J.jsx)("h2",{children:"I already have an account"}),Object(J.jsx)("span",{children:"Sign in with your email and password"}),Object(J.jsxs)("form",{onSubmit:l,children:[Object(J.jsx)(xt,{label:"Email",name:"email",type:"email",value:s,handleChange:u,required:!0}),Object(J.jsx)(xt,{label:"Password",name:"password",type:"password",value:o,handleChange:u,required:!0}),Object(J.jsxs)("div",{className:"buttons",children:[Object(J.jsx)(ie,{type:"submit",children:"Sign In"}),Object(J.jsx)(ie,{type:"button",onClick:n,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}))),vt=(t(81),Object(_.b)(null,(function(e){return{signUpStart:function(n){return e(function(e){return{type:P.SIGN_UP_START,payload:e}}(n))}}}))((function(e){var n=e.signUpStart,t=Object(S.useState)({email:"",password:"",displayName:"",confirmPassword:""}),r=Object(ht.a)(t,2),c=r[0],a=r[1],i=c.displayName,s=c.email,o=c.password,l=c.confirmPassword,u=function(){var e=Object(Wn.a)(Bn.a.mark((function e(t){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o===l){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:n({displayName:i,email:s,password:o});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e){e.preventDefault();var n=e.target,t=n.name,r=n.value;a(Object(X.a)(Object(X.a)({},c),{},Object(mt.a)({},t,r)))};return Object(J.jsxs)("div",{className:"sign-up",children:[Object(J.jsx)("h2",{children:"I do not have a account"}),Object(J.jsx)("span",{children:"Sign up with your email and password"}),Object(J.jsxs)("form",{className:"sign-up-form",onSubmit:u,children:[Object(J.jsx)(xt,{type:"name",name:"displayName",value:i,onChange:d,label:"Name",required:!0}),Object(J.jsx)(xt,{type:"email",name:"email",value:s,onChange:d,label:"Email",required:!0}),Object(J.jsx)(xt,{type:"password",name:"password",value:o,onChange:d,label:"Password",required:!0}),Object(J.jsx)(xt,{type:"password",name:"confirmPassword",value:l,onChange:d,label:"Confirm Password",required:!0}),Object(J.jsx)(ie,{type:"submit",children:"SIGN UP"})]})]})}))),St=ee.c.div(rt||(rt=Object($.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    place-items: center;\n    margin: 0;\n    width: auto;\n  }\n"]))),yt=function(){return Object(J.jsxs)(St,{children:[Object(J.jsx)(gt,{}),Object(J.jsx)(vt,{})]})},wt=function(e){Object(N.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object(C.a)(this,t);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=n.call.apply(n,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(E.a)(t,[{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"render",value:function(){var e=this;return Object(J.jsxs)("div",{children:[Object(J.jsx)(Je,{}),Object(J.jsx)(Ye,{}),Object(J.jsxs)(k.d,{children:[Object(J.jsx)(k.b,{exact:!0,path:"/",component:On}),Object(J.jsx)(k.b,{path:"/shop",component:Ot}),Object(J.jsx)(k.b,{exact:!0,path:"/checkout",component:nn}),Object(J.jsx)(k.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(J.jsx)(k.a,{to:"/"}):Object(J.jsx)(yt,{})}})]})]})}}]),t}(S.Component),It=Object(U.b)({currentUser:q,collectionsArray:In}),_t=Object(_.b)(It,(function(e){return{checkUserSession:function(){return e({type:P.CHECK_USER_SESSION})}}}))(wt),Ct=(t(82),t(58)),Et=(t(83),t(43)),Nt=t(60),Tt={currentUser:null,error:null},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P.SIGN_IN_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{currentUser:n.payload,error:null});case P.SIGN_IN_FAILURE:case P.SIGN_OUT_FAILURE:case P.SIGN_UP_FAILURE:return Object(X.a)(Object(X.a)({},e),{},{error:n.payload});case P.SIGN_OUT_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{currentUser:null,error:null});default:return e}},Ut=t(61),Rt=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(X.a)(Object(X.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ut.a)(e),[Object(X.a)(Object(X.a)({},n),{},{quantity:1})])},At=function(e,n){var t=e.find((function(e){return e.id===n.id}));return t&&1===t.quantity?e.filter((function(e){return e.id!==n.id})):e.map((function(e){return e.id===n.id?Object(X.a)(Object(X.a)({},e),{},{quantity:e.quantity-1}):e}))},Lt={hidden:!0,cartItems:[]},Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K.TOGGLE_CART_HIDDEN:return Object(X.a)(Object(X.a)({},e),{},{hidden:!e.hidden});case K.ADD_ITEM:return Object(X.a)(Object(X.a)({},e),{},{cartItems:Rt(e.cartItems,n.payload)});case K.REMOVE_ITEM:return Object(X.a)(Object(X.a)({},e),{},{cartItems:At(e.cartItems,n.payload)});case K.CLEAR_ITEM_FROM_CART:return Object(X.a)(Object(X.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==n.payload.id}))});case K.CLEAR_CART:return Object(X.a)(Object(X.a)({},e),{},{cartItems:[]});default:return e}},Ft=t(59),Mt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,n=arguments.length>1?arguments[1]:void 0;return n.type,e},Ht={collections:null,isFetching:!1,erroMessage:void 0},Dt={key:"root",storage:t.n(Ft).a,whitelist:["cart"]},zt=Object(mn.b)({user:kt,cart:Gt,directory:Pt,shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ct.FETCH_COLLECTIONS_START:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!0});case ct.FETCH_COLLECTIONS_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!1,collections:n.payload});case ct.FETCH_COLLECTIONS_FAILURE:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!1,erroMessage:n.payload});default:return e}}}),qt=Object(Et.a)(Dt,zt),Vt=t(15),Kt=Bn.a.mark(Yt),Bt=Bn.a.mark(Jt),Wt=Bn.a.mark(Qt);function Yt(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.c)(Y());case 2:case"end":return e.stop()}}),Kt)}function Jt(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(P.SIGN_OUT_SUCCESS,Yt);case 2:case"end":return e.stop()}}),Bt)}function Qt(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(Jt)]);case 2:case"end":return e.stop()}}),Wt)}var Xt=Bn.a.mark(er),Zt=Bn.a.mark(nr),$t=Bn.a.mark(tr);function er(){var e,n,t;return Bn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=Zn.collection("collections"),r.next=4,e.get();case 4:return n=r.sent,r.next=7,Object(Vt.b)(Qn,n);case 7:return t=r.sent,r.next=10,Object(Vt.c)(it(t));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(Vt.c)(st(r.t0));case 16:case"end":return r.stop()}}),Xt,null,[[0,12]])}function nr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(ct.FETCH_COLLECTIONS_START,er);case 2:case"end":return e.stop()}}),Zt)}function tr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(nr)]);case 2:case"end":return e.stop()}}),$t)}var rr=t(18),cr=Bn.a.mark(fr),ar=Bn.a.mark(xr),ir=Bn.a.mark(gr),sr=Bn.a.mark(vr),or=Bn.a.mark(Sr),lr=Bn.a.mark(yr),ur=Bn.a.mark(wr),dr=Bn.a.mark(Ir),br=Bn.a.mark(_r),pr=Bn.a.mark(Cr),jr=Bn.a.mark(Er),Or=Bn.a.mark(Nr),mr=Bn.a.mark(Tr),hr=Bn.a.mark(kr);function fr(e,n){var t,r;return Bn.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(rr.b)(Jn,e,n);case 3:return t=c.sent,c.next=6,t.get();case 6:return r=c.sent,c.next=9,Object(Vt.c)(H(Object(X.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(Vt.c)(D(c.t0));case 15:case"end":return c.stop()}}),cr,null,[[0,11]])}function xr(){var e,n;return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Xn.signInWithPopup($n);case 3:return e=t.sent,n=e.user,t.next=7,fr(n);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(Vt.c)(D(t.t0));case 13:case"end":return t.stop()}}),ar,null,[[0,9]])}function gr(e){var n,t,r,c,a;return Bn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,t=n.email,r=n.password,i.prev=1,i.next=4,Xn.signInWithEmailAndPassword(t,r);case 4:return c=i.sent,a=c.user,i.next=8,fr(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Vt.c)(D(i.t0));case 14:case"end":return i.stop()}}),ir,null,[[1,10]])}function vr(e){var n,t,r,c,a,i;return Bn.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=e.payload,t=n.email,r=n.password,c=n.displayName,s.prev=1,s.next=4,Xn.createUserWithEmailAndPassword(t,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(Vt.c)(z({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Vt.c)((o=s.t0,{type:P.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),sr,null,[[1,10]])}function Sr(e){var n,t,r;return Bn.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,t=n.user,r=n.additionalData,c.next=3,fr(t,r);case 3:case"end":return c.stop()}}),or)}function yr(){var e;return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e,n){var t=Xn.onAuthStateChanged((function(n){t(),e(n)}),n)}));case 3:if(e=n.sent){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,fr(e);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(Vt.c)(D(n.t0));case 14:case"end":return n.stop()}}),lr,null,[[0,10]])}function wr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Xn.signOut();case 3:return e.next=5,Object(Vt.c)({type:P.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Vt.c)((n=e.t0,{type:P.SIGN_OUT_FAILURE,payload:n}));case 11:case"end":return e.stop()}var n}),ur,null,[[0,7]])}function Ir(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.GOOGLE_SIGN_IN_START,xr);case 2:case"end":return e.stop()}}),dr)}function _r(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.EMAIL_SIGN_IN_START,gr);case 2:case"end":return e.stop()}}),br)}function Cr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.CHECK_USER_SESSION,yr);case 2:case"end":return e.stop()}}),pr)}function Er(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.SIGN_OUT_START,wr);case 2:case"end":return e.stop()}}),jr)}function Nr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.SIGN_UP_START,vr);case 2:case"end":return e.stop()}}),Or)}function Tr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.d)(P.SIGN_UP_SUCCESS,Sr);case 2:case"end":return e.stop()}}),mr)}function kr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.a)([Object(rr.b)(Ir),Object(rr.b)(_r),Object(rr.b)(Cr),Object(rr.b)(Er),Object(rr.b)(Nr),Object(rr.b)(Tr)]);case 2:case"end":return e.stop()}}),hr)}var Ur=Bn.a.mark(Rr);function Rr(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(tr),Object(Vt.b)(kr),Object(Vt.b)(Qt)]);case 2:case"end":return e.stop()}}),Ur)}var Ar=Object(Nt.a)(),Lr=[Ar];var Gr=Object(mn.d)(qt,mn.a.apply(void 0,Lr));Ar.run(Rr);var Fr=Object(Et.b)(Gr);I.a.render(Object(J.jsx)(y.a.StrictMode,{children:Object(J.jsx)(_.a,{store:Gr,children:Object(J.jsx)(De.a,{children:Object(J.jsx)(Ct.a,{persistor:Fr,children:Object(J.jsx)(_t,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.42ff505b.chunk.js.map