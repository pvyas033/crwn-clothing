(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{65:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(34),i=t.n(a),s=t(9),o=t(19),l=t.n(o),d=t(7),u=t(22),b=t(23),j=t(24),p=t(25),m=t(27),h=t(11),O=t(8),f=t.p+"static/media/Door_store.6505ff07.PNG",x=t(33),g=(t(63),t(79),function(e,n){if(e){var t=w.doc("users/".concat(e.uid));if(!t.get().exists){var c=e.displayName,r=e.email,a=new Date;try{t.set(Object(d.a)({displayName:c,email:r,createdAt:a},n))}catch(i){alert(i.message)}}return t}});x.a.initializeApp({apiKey:"AIzaSyBR3Fsr-rFSedF9ppP_3LcDkFwCKAY771I",authDomain:"crwn-db-aadcf.firebaseapp.com",projectId:"crwn-db-aadcf",storageBucket:"crwn-db-aadcf.appspot.com",messagingSenderId:"469794204820",appId:"1:469794204820:web:757f15cb0c375beea81881",measurementId:"G-YBP7R189SL"});var v=function(){var e=Object(u.a)(l.a.mark((function e(n,t){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=w.collection(n),r=w.batch(),t.forEach((function(e){var n=c.doc();r.set(n,e)})),e.next=5,r.commit();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),y=x.a.auth(),w=x.a.firestore(),C=new x.a.auth.GoogleAuthProvider;C.setCustomParameters({promt:"select_account"});var E,k,I,N,S,T,_,A,L,R,U,M,F,D,H,P,z,G,q,V=function(){return y.signInWithPopup(C)},B=(x.a,function(e){return e.cart}),W=Object(O.a)([B],(function(e){return e.cartItems})),Y=Object(O.a)([B],(function(e){return e.hidden})),K=Object(O.a)([W],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),J=Object(O.a)([W],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)})),Q=Object(O.a)([function(e){return e.user}],(function(e){return e.currentUser})),X=t.p+"static/media/empty-cart.0bc2b32b.png",Z={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},$=function(){return{type:Z.TOGGLE_CART_HIDDEN}},ee=function(e){return{type:Z.ADD_ITEM,payload:e}},ne=(t(65),t(2)),te=function(e){var n=e.item,t=n.imageUrl,c=n.price,r=n.name,a=n.quantity;return Object(ne.jsxs)("div",{className:"cart-item",children:[Object(ne.jsx)("img",{src:t,alt:"item"}),Object(ne.jsxs)("div",{className:"item-details",children:[Object(ne.jsx)("span",{className:"name",children:r}),Object(ne.jsxs)("span",{className:"price",children:[a," X ",c,"\u20b9"]})]})]})},ce=t(26),re=t(5),ae=t(6),ie=Object(ae.b)(E||(E=Object(re.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),se=Object(ae.b)(k||(k=Object(re.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),oe=Object(ae.b)(I||(I=Object(re.a)(["\n  background-color: #4285f4;\n  color: white;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),le=ae.c.button(N||(N=Object(re.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ',"\n"])),(function(e){return e.isGoogleSignIn?oe:e.inverted?se:ie})),de=["children"],ue=function(e){var n=e.children,t=Object(ce.a)(e,de);return Object(ne.jsx)(le,Object(d.a)(Object(d.a)({},t),{},{children:n}))},be=(t(67),Object(O.b)({cartItems:W})),je=Object(h.g)(Object(s.b)(be)((function(e){var n=e.cartItems,t=e.history,c=e.dispatch;return Object(ne.jsxs)("div",{className:"cart-dropdown",children:[Object(ne.jsx)("div",{className:"cart-items",children:n.length?n.map((function(e){return Object(ne.jsx)(te,{item:e},e.id)})):Object(ne.jsx)("img",{src:X,alt:"Your cart is empty"})}),Object(ne.jsx)(ue,{onClick:function(){t.push("/checkout"),c($())},children:"GO TO CHECKOUT"})]})}))),pe=["title","titleId"];function me(){return(me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}function he(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function Oe(e,n){var t=e.title,r=e.titleId,a=he(e,pe);return c.createElement("svg",me({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},a),t?c.createElement("title",{id:r},t):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),S||(S=c.createElement("g",null)),T||(T=c.createElement("g",null)),_||(_=c.createElement("g",null)),A||(A=c.createElement("g",null)),L||(L=c.createElement("g",null)),R||(R=c.createElement("g",null)),U||(U=c.createElement("g",null)),M||(M=c.createElement("g",null)),F||(F=c.createElement("g",null)),D||(D=c.createElement("g",null)),H||(H=c.createElement("g",null)),P||(P=c.createElement("g",null)),z||(z=c.createElement("g",null)),G||(G=c.createElement("g",null)),q||(q=c.createElement("g",null)))}var fe,xe,ge,ve,ye,we,Ce,Ee,ke,Ie,Ne,Se,Te,_e,Ae,Le,Re,Ue,Me,Fe,De,He,Pe,ze,Ge,qe,Ve,Be,We,Ye=c.forwardRef(Oe),Ke=(t.p,t(68),Object(O.b)({itemCount:K})),Je=Object(s.b)(Ke,(function(e){return{toggleCartHidden:function(){return e($())}}}))((function(e){var n=e.itemCount,t=e.toggleCartHidden;return Object(ne.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(ne.jsx)(Ye,{className:"shopping-icon"}),Object(ne.jsx)("span",{className:"item-count",children:n})]})})),Qe=t(21),Xe=Object(ae.b)(fe||(fe=Object(re.a)(["\n  cursor: pointer;\n"]))),Ze=ae.c.div(xe||(xe=Object(re.a)(["\n  height: 70px;\n  width: 100%;\n  display: grid;\n  place-items: center;\n  justify-content: space-between;\n  grid-template-columns: auto 170px;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]))),$e=Object(ae.c)(Qe.b)(ge||(ge=Object(re.a)(["\n  min-width: 180px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]))),en=ae.c.div(ve||(ve=Object(re.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  column-gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n"]))),nn=Object(ae.c)(Qe.b)(ye||(ye=Object(re.a)(["\n  ","\n"])),Xe),tn=Object(O.b)({currentUser:Q,hidden:Y}),cn=Object(s.b)(tn)((function(e){var n=e.currentUser,t=e.hidden;return Object(ne.jsxs)(Ze,{children:[Object(ne.jsx)($e,{to:"/",children:Object(ne.jsx)("img",{className:"logo-img",src:f,alt:"logo"})}),Object(ne.jsxs)(en,{children:[Object(ne.jsx)(nn,{to:"/shop",children:"SHOP"}),n?Object(ne.jsx)(nn,{as:"div",onClick:function(){return y.signOut()},children:"SIGN OUT"}):Object(ne.jsx)(nn,{to:"/signin",children:"SIGN IN"}),Object(ne.jsx)(Je,{})]}),t?null:Object(ne.jsx)(je,{})]})})),rn=Object(ae.a)(we||(we=Object(re.a)(["\nbody {\n    font-family: 'Open Sans Condensed';\n    padding: 20px 40px;\n\n    @media screen and (max-width: 800px){\n        padding: 10px\n    }\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n"]))),an=(t(69),Object(s.b)(null,(function(e){return{clearItem:function(n){return e(function(e){return{type:Z.CLEAR_ITEM_FROM_CART,payload:e}}(n))},addItem:function(n){return e(ee(n))},removeItem:function(n){return e(function(e){return{type:Z.REMOVE_ITEM,payload:e}}(n))}}}))((function(e){var n=e.cartItem,t=e.clearItem,c=e.addItem,r=e.removeItem,a=n.name,i=n.imageUrl,s=n.price,o=n.quantity;return Object(ne.jsxs)("div",{className:"checkout-item",children:[Object(ne.jsx)("div",{className:"image-container",children:Object(ne.jsx)("img",{src:i,alt:"item"})}),Object(ne.jsx)("div",{className:"name",children:Object(ne.jsx)("span",{children:a})}),Object(ne.jsxs)("div",{className:"quantity",children:[Object(ne.jsx)("div",{className:"arrow",onClick:function(){return r(n)},children:"\u276e"}),Object(ne.jsx)("span",{className:"value",children:o}),Object(ne.jsx)("div",{className:"arrow",onClick:function(){return c(n)},children:"\u276f"})]}),Object(ne.jsx)("div",{className:"price",children:Object(ne.jsx)("span",{children:s})}),Object(ne.jsx)("div",{className:"remove-button",onClick:function(){return t(n)},children:Object(ne.jsx)("span",{children:"\u2715"})})]})}))),sn=t(49),on=t.n(sn),ln=Object(s.b)(null,(function(e){return{clearCart:function(){return e({type:Z.CLEAR_CART})}}}))((function(e){var n=e.price,t=e.clearCart,c=100*n;return Object(ne.jsx)(on.a,{label:"Pay Now",name:"Door Store Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is ".concat(n,"\u20b9"),amount:c,token:function(e){alert("Payement Successful"),t()},allowRememberMe:!0,stripeKey:"pk_test_51J1PIxSFNiIxtGbM6GAncK9M3OyMKyYQt7iSs2My1oZ2qD1qWrToJDNgYZOoGVs88L0EGzMmxrfzyMMitJnHFSxx00OyBdSIIk"})})),dn=(t(70),Object(O.b)({cartItems:W,total:J})),un=Object(s.b)(dn)((function(e){var n=e.cartItems,t=e.total;return n.length?Object(ne.jsxs)("div",{className:"checkout-page",children:[Object(ne.jsxs)("div",{className:"checkout-header",children:[Object(ne.jsx)("div",{className:"header-block",children:Object(ne.jsx)("span",{children:"Product"})}),Object(ne.jsx)("div",{className:"header-block",children:Object(ne.jsx)("span",{children:"Description"})}),Object(ne.jsx)("div",{className:"header-block",children:Object(ne.jsx)("span",{children:"Quantity"})}),Object(ne.jsx)("div",{className:"header-block",children:Object(ne.jsx)("span",{children:"Price"})}),Object(ne.jsx)("div",{className:"last-child",children:Object(ne.jsx)("span",{children:"Remove"})})]}),n.map((function(e){return Object(ne.jsx)(an,{cartItem:e},e.id)})),Object(ne.jsx)("div",{className:"total",children:Object(ne.jsxs)("span",{children:[t,"\u20b9"]})}),Object(ne.jsx)(ln,{price:t}),Object(ne.jsxs)("div",{className:"test-warning",children:["*Please user the following test credit card for payments*",Object(ne.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/22 CVV: 123"]})]}):Object(ne.jsx)("div",{className:"empty-cart",children:Object(ne.jsx)("img",{src:X,alt:"Your cart is empty"})})})),bn=Object(O.a)([function(e){return e.directory}],(function(e){return e.sections})),jn=ae.c.div(Ce||(Ce=Object(re.a)(["\n  height: ",";\n  min-width: 30%;\n  overflow: hidden;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n  &:hover {\n    cursor: pointer;\n    & .background-image {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n    & .content {\n      opacity: 0.9;\n    }\n  }\n  &:first-child {\n    margin-right: 7.5px;\n  }\n  &:last-child {\n    margin-left: 7.5px;\n  }\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"])),(function(e){return e.size?"380px":"240px"})),pn=ae.c.div(Ee||(Ee=Object(re.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),mn=ae.c.div(ke||(ke=Object(re.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]))),hn=ae.c.span(Ie||(Ie=Object(re.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]))),On=ae.c.span(Ne||(Ne=Object(re.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]))),fn=Object(h.g)((function(e){var n=e.title,t=e.imageUrl,c=e.size,r=e.history,a=e.linkUrl,i=e.match;return Object(ne.jsxs)(jn,{size:c,onClick:function(){return r.push("".concat(i.url).concat(a))},children:[Object(ne.jsx)(pn,{className:"background-image",imageUrl:t}),Object(ne.jsxs)(mn,{className:"content",children:[Object(ne.jsx)(hn,{children:n.toUpperCase()}),Object(ne.jsx)(On,{children:"SHOP NOW"})]})]})})),xn=ae.c.div(Se||(Se=Object(re.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),gn=["id"],vn=Object(O.b)({sections:bn}),yn=Object(s.b)(vn)((function(e){var n=e.sections;return Object(ne.jsx)(xn,{children:n.map((function(e){var n=e.id,t=Object(ce.a)(e,gn);return Object(ne.jsx)(fn,Object(d.a)({},t),n)}))})})),wn=ae.c.div(Te||(Te=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Cn=function(){return Object(ne.jsx)(wn,{children:Object(ne.jsx)(yn,{})})},En=t(15),kn=ae.c.div(_e||(_e=Object(re.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),In=ae.c.div(Ae||(Ae=Object(re.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),Nn=["isLoading"],Sn=function(e){return function(n){var t=n.isLoading,c=Object(ce.a)(n,Nn);return t?Object(ne.jsx)(kn,{children:Object(ne.jsx)(In,{})}):Object(ne.jsx)(e,Object(d.a)({},c))}},Tn=t(50),_n=t.n(Tn),An=function(e){return e.shop},Ln=Object(O.a)([An],(function(e){return e.collections})),Rn=Object(O.a)([Ln],(function(e){return e?Object.keys(e).map((function(n){return e[n]})):[]})),Un=_n()((function(e){return Object(O.a)([Ln],(function(n){return n?n[e]:null}))})),Mn=Object(O.a)([An],(function(e){return e.fetching})),Fn=Object(O.a)([An],(function(e){return!!e.collections})),Dn=ae.c.div(Le||(Le=Object(re.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),Hn=Object(ae.c)(ue)(Re||(Re=Object(re.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]))),Pn=ae.c.div(Ue||(Ue=Object(re.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),zn=ae.c.div(Me||(Me=Object(re.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),Gn=ae.c.span(Fe||(Fe=Object(re.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),qn=ae.c.span(De||(De=Object(re.a)(["\n  width: 10%;\n  text-align: right;\n"]))),Vn=Object(s.b)(null,(function(e){return{addItem:function(n){return e(ee(n))}}}))((function(e){var n=e.item,t=e.addItem,c=n.name,r=n.price,a=n.imageUrl;return Object(ne.jsxs)(Dn,{children:[Object(ne.jsx)(Pn,{style:{backgroundImage:"url(".concat(a,")")}}),Object(ne.jsxs)(zn,{children:[Object(ne.jsx)(Gn,{className:"name",children:c}),Object(ne.jsx)(qn,{className:"price",children:r})]}),Object(ne.jsx)(Hn,{onClick:function(){return t(n)},inverted:!0,children:"Add to cart"})]})})),Bn=ae.c.div(He||(He=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),Wn=ae.c.h1(Pe||(Pe=Object(re.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]))),Yn=ae.c.div(ze||(ze=Object(re.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),Kn=function(e){var n=e.title,t=e.items;return Object(ne.jsxs)(Bn,{children:[Object(ne.jsx)(Wn,{children:n.toUpperCase()}),Object(ne.jsx)(Yn,{children:t.slice(0,4).map((function(e){return Object(ne.jsx)(Vn,{item:e},e.id)}))})]})},Jn=ae.c.div(Ge||(Ge=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Qn=Object(O.b)({collections:Rn}),Xn=Object(s.b)(Qn)((function(e){var n=e.collections;return Object(ne.jsx)(Jn,{children:n.map((function(e){var n=e.id,t=e.title,c=e.items;return Object(ne.jsx)(Kn,{title:t,items:c},n)}))})})),Zn=Object(O.b)({isLoading:Mn}),$n=Object(En.c)(Object(s.b)(Zn),Sn)(Xn),et={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},nt=function(){return function(e){var n=w.collection("collections");e({type:et.FETCH_COLLECTIONS_START}),n.get().then((function(n){var t=n.docs.map((function(e){var n=e.data(),t=n.title,c=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:c}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{});e(function(e){return{type:et.FETCH_COLLECTIONS_SUCCESS,payload:e}}(t))})).catch((function(n){return e((t=n.message,{type:et.FETCH_COLLECTIONS_FAILURE,payload:t}));var t}))}},tt=ae.c.div(qe||(qe=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),ct=ae.c.h2(Ve||(Ve=Object(re.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]))),rt=ae.c.div(Be||(Be=Object(re.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),at=Object(s.b)((function(e,n){return{collection:Un(n.match.params.collectionId)(e)}}))((function(e){var n=e.collection,t=n.title,c=n.items;return Object(ne.jsxs)(tt,{children:[Object(ne.jsx)(ct,{children:t}),Object(ne.jsx)(rt,{children:c.map((function(e){return Object(ne.jsx)(Vn,{item:e},e.id)}))})]})})),it=Object(O.b)({isLoading:function(e){return!Fn(e)}}),st=Object(En.c)(Object(s.b)(it),Sn)(at),ot=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStartAsync)()}},{key:"render",value:function(){var e=this.props.match;return Object(ne.jsxs)("div",{className:"shop-page",children:[Object(ne.jsx)(h.b,{exact:!0,path:"".concat(e.path),component:$n}),Object(ne.jsx)(h.b,{exact:!0,path:"".concat(e.path,"/:collectionId"),component:st})]})}}]),t}(r.a.Component),lt=Object(s.b)(null,(function(e){return{fetchCollectionsStartAsync:function(){return e(nt())}}}))(ot),dt=t(37),ut=(t(71),["handleChange","label"]),bt=function(e){var n=e.handleChange,t=e.label,c=Object(ce.a)(e,ut);return Object(ne.jsxs)("div",{className:"group",children:[Object(ne.jsx)("input",Object(d.a)({className:"form-input",onChange:n},c)),t?Object(ne.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})},jt=(t(72),function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(e){var c;return Object(b.a)(this,t),(c=n.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(n){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=c.state,r=t.email,a=t.password,e.prev=2,e.next=5,y.signInWithEmailAndPassword(r,a);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),c.handleChange=function(e){var n=e.target,t=n.value,r=n.name;c.setState(Object(dt.a)({},r,t))},c.state={email:"",password:""},c}return Object(j.a)(t,[{key:"render",value:function(){return Object(ne.jsxs)("div",{className:"sign-in",children:[Object(ne.jsx)("h2",{children:"I already have an account"}),Object(ne.jsx)("span",{children:"Sign in with your email and password"}),Object(ne.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(ne.jsx)(bt,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(ne.jsx)(bt,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(ne.jsxs)("div",{className:"buttons",children:[Object(ne.jsx)(ue,{type:"submit",children:"Sign In"}),Object(ne.jsx)(ue,{type:"button",onClick:V,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),t}(c.Component)),pt=(t(73),function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(b.a)(this,t),(e=n.call(this)).handleSubmit=function(){var n=Object(u.a)(l.a.mark((function n(t){var c,r,a,i,s,o,d;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),c=e.state,r=c.displayName,a=c.email,i=c.password,s=c.confirmPassword,i===s){n.next=5;break}return alert("passwords don't match"),n.abrupt("return");case 5:return n.prev=5,n.next=8,y.createUserWithEmailAndPassword(a,i);case 8:return o=n.sent,d=o.user,n.next=12,g(d,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),alert(n.t0.message);case 18:case"end":return n.stop()}}),n,null,[[5,15]])})));return function(e){return n.apply(this,arguments)}}(),e.handleChange=function(n){n.preventDefault();var t=n.target,c=t.name,r=t.value;e.setState(Object(dt.a)({},c,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,n=e.displayName,t=e.email,c=e.password,r=e.confirmPassword;return Object(ne.jsxs)("div",{className:"sign-up",children:[Object(ne.jsx)("h2",{children:"I do not have a account"}),Object(ne.jsx)("span",{children:"Sign up with your email and password"}),Object(ne.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(ne.jsx)(bt,{type:"name",name:"displayName",value:n,onChange:this.handleChange,label:"Name",required:!0}),Object(ne.jsx)(bt,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),Object(ne.jsx)(bt,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(ne.jsx)(bt,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(ne.jsx)(ue,{type:"submit",children:"SIGN UP"})]})]})}}]),t}(c.Component)),mt=ae.c.div(We||(We=Object(re.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: 0;\n    width: auto;\n  }\n"]))),ht=function(){return Object(ne.jsxs)(mt,{children:[Object(ne.jsx)(jt,{}),Object(ne.jsx)(pt,{})]})},Ot="SET_CURRENT_USER",ft=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(b.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.setCurrentUser,t=e.collectionsArray;this.unsubscribeFromAuth=y.onAuthStateChanged(function(){var e=Object(u.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,g(c);case 3:e.sent.onSnapshot((function(e){n(Object(d.a)({id:e.id},e.data()))})),e.next=9;break;case 7:n(c),v("collections",t.map((function(e){return{title:e.title,items:e.items}})));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(ne.jsxs)("div",{children:[Object(ne.jsx)(rn,{}),Object(ne.jsx)(cn,{}),Object(ne.jsxs)(h.d,{children:[Object(ne.jsx)(h.b,{exact:!0,path:"/",component:Cn}),Object(ne.jsx)(h.b,{path:"/shop",component:lt}),Object(ne.jsx)(h.b,{exact:!0,path:"/checkout",component:un}),Object(ne.jsx)(h.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(ne.jsx)(h.a,{to:"/"}):Object(ne.jsx)(ht,{})}})]})]})}}]),t}(c.Component),xt=Object(O.b)({currentUser:Q,collectionsArray:Rn}),gt=Object(s.b)(xt,(function(e){return{setCurrentUser:function(n){return e(function(e){return{type:Ot,payload:e}}(n))}}}))(ft),vt=(t(74),t(51)),yt=(t(75),t(38)),wt=t(52),Ct={currentUser:null},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ot:return Object(d.a)(Object(d.a)({},e),{},{currentUser:n.payload});default:return e}},kt=t(54),It=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(kt.a)(e),[Object(d.a)(Object(d.a)({},n),{},{quantity:1})])},Nt=function(e,n){var t=e.find((function(e){return e.id===n.id}));return t&&1===t.quantity?e.filter((function(e){return e.id!==n.id})):e.map((function(e){return e.id===n.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity-1}):e}))},St={hidden:!0,cartItems:[]},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Z.TOGGLE_CART_HIDDEN:return Object(d.a)(Object(d.a)({},e),{},{hidden:!e.hidden});case Z.ADD_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:It(e.cartItems,n.payload)});case Z.REMOVE_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Nt(e.cartItems,n.payload)});case Z.CLEAR_ITEM_FROM_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==n.payload.id}))});case Z.CLEAR_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:[]});default:return e}},_t=t(53),At={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,n=arguments.length>1?arguments[1]:void 0;return n.type,e},Rt={collections:null,isFetching:!1,erroMessage:void 0},Ut={key:"root",storage:t.n(_t).a,whitelist:["cart"]},Mt=Object(En.b)({user:Et,cart:Tt,directory:Lt,shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case et.FETCH_COLLECTIONS_START:return Object(d.a)(Object(d.a)({},e),{},{isFetching:!0});case et.FETCH_COLLECTIONS_SUCCESS:return Object(d.a)(Object(d.a)({},e),{},{isFetching:!1,collections:n.payload});case et.FETCH_COLLECTIONS_FAILURE:return Object(d.a)(Object(d.a)({},e),{},{isFetching:!1,erroMessage:n.payload});default:return e}}}),Ft=Object(yt.a)(Ut,Mt),Dt=[wt.a];var Ht=Object(En.d)(Ft,En.a.apply(void 0,Dt)),Pt=Object(yt.b)(Ht);i.a.render(Object(ne.jsx)(r.a.StrictMode,{children:Object(ne.jsx)(s.a,{store:Ht,children:Object(ne.jsx)(Qe.a,{children:Object(ne.jsx)(vt.a,{persistor:Pt,children:Object(ne.jsx)(gt,{})})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b997430c.chunk.js.map