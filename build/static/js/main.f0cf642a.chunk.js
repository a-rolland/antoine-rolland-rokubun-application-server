(this["webpackJsonpantoine-rolland-rokubun-application"]=this["webpackJsonpantoine-rolland-rokubun-application"]||[]).push([[0],{54:function(n,e,t){},82:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(0),i=t.n(r),c=t(13),o=t.n(c),s=(t(54),t(5)),l=t(11),d=t(14),u=t(22),p=t.n(u),x=p.a.create({baseURL:"".concat("https://my-favorite-places.herokuapp.com","/api"),withCredentials:!0}),h=function(n){throw n},f=function(n){return x.post("/newPlace",n).then((function(n){return n.data})).catch(h)},b=function(){return x.get("/favoritePlaces").then((function(n){return n.data})).catch(h)},g=function(n){return x.delete("/favoritePlaces/".concat(n)).then((function(n){return n.data})).catch(h)},j=t(21),m=t(3),O=t(4);function v(){var n=Object(m.a)(['\n  padding: 14px 20px 12px;\n  margin: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-family: "Comfortaa", cursive;\n\n  &:hover {\n    cursor: pointer;\n    background-color: lightsteelblue;\n  }\n\n  ',"\n"]);return v=function(){return n},n}var w=O.a.button(v(),(function(n){return n.descriptionButton&&"\n    margin: 30px 0;\n\n    @media (max-width: 667px) {\n    margin: 20px 0 10px;\n  }\n  "})),I=function(n){return Object(a.jsx)(w,{descriptionButton:n.descriptionButton,onClick:function(){n.handleClick&&n.handleClick()},children:n.text})},y=t(23),S=t(24),U=t(47),k=t(46),F=t(27),C=t.n(F);function E(){var n=Object(m.a)(["\n  width: 100%;\n  padding: 8px 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return E=function(){return n},n}function L(){var n=Object(m.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n\n  &.btn {\n    &:hover {\n      cursor: pointer;\n      background-color: lightsteelblue;\n    }\n  }\n"]);return L=function(){return n},n}var P=O.a.input(L()),z=O.a.div(E()),N=t(25),R=t(26),M=function(n){Object(U.a)(t,n);var e=Object(k.a)(t);function t(n){var a;return Object(y.a)(this,t),(a=e.call(this,n)).handleChange=function(n){a.setState({address:n})},a.handleSelect=function(n){Object(F.geocodeByAddress)(n).then((function(n){return Object(F.getLatLng)(n[0])})).then((function(e){a.setState(Object(s.a)({address:n},e)),a.props.setPlace(a.state)})).catch((function(n){return console.error("Error",n)}))},a.state={address:""},a}return Object(S.a)(t,[{key:"render",value:function(){return Object(a.jsx)(C.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,children:function(n){var e=n.getInputProps,t=n.suggestions,c=n.getSuggestionItemProps,o=n.loading;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(P,Object(s.a)({},e({placeholder:"Search Places ...",className:"location-search-input"}))),Object(a.jsxs)("div",{className:"autocomplete-dropdown-container",children:[o&&Object(a.jsx)(N.a,{icon:R.b,size:"2x"}),t.map((function(n){var e=n.active?"suggestion-item--active":"suggestion-item",t=n.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(r.createElement)(z,Object(s.a)(Object(s.a)({},c(n,{className:e,style:t})),{},{key:n.index}),Object(a.jsx)("span",{children:n.description}))}))]})]})}})}}]),t}(i.a.Component),A=t(48);function T(){var n=Object(m.a)(["\n  width: 500px;\n  height: 334px;\n\n  ",";\n\n  @media (max-width: 667px) {\n    width: 100%;\n    height: 300px;\n\n    ",";\n  }\n\n  @media (min-width: 667px) and (max-width: 768px) {\n    width: 350px;\n    height: 234px;\n\n    ",";\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    width: 400px;\n    height: 267px;\n\n    ",";\n  }\n"]);return T=function(){return n},n}var D=O.a.div(T(),(function(n){return n.formMap&&"width: 100%; height: 300px;"}),(function(n){return n.formMap&&"width: 100%; height: 300px;"}),(function(n){return n.formMap&&"width: 100%; height: 300px;"}),(function(n){return n.formMap&&"width: 100%; height: 300px;"})),B=function(n){var e={name:n.address,lat:parseFloat(n.lat),lng:parseFloat(n.lng),zoom:n.zoom},t=Object(r.useState)(e),i=Object(l.a)(t,2),c=i[0],o=(i[1],{lat:c.lat,lng:c.lng}),s=parseInt(c.zoom),d=function(n,e,t){var a=function(n,e,t){var a=new e.LatLngBounds;return t.forEach((function(n){a.extend(new e.LatLng(n.lat,n.lng))})),a}(0,e,t);n.fitBounds(a),function(n,e,t){e.event.addDomListenerOnce(n,"idle",(function(){e.event.addDomListener(window,"resize",(function(){n.fitBounds(t)}))}))}(n,e,a)};return Object(a.jsx)(D,{formMap:n.formMap,children:Object(a.jsx)(A.a,{bootstrapURLKeys:"AIzaSyC5R2OYlhvGRMmpofdkJ0jL60Tsa7dtZUY",defaultCenter:o,defaultZoom:s,options:function(n){return{disableDefaultUI:!1,mapTypeControl:!0,streetViewControl:!0,mapTypeId:"satellite",styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"on"}]}]}},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map,a=e.maps;n.tripMap&&!n.hasOnlyOneLocalisation&&d(t,a,n.allExperiencesCoords),function(e,t){if("tripPresentation"===n.mapType)n.allExperiencesCoords.forEach((function(n){new t.Marker({position:n,map:e})}));else{var a={lat:c.lat,lng:c.lng};new t.Marker({position:a,map:e})}}(t,a)}},c.name)})},G=p.a.create({baseURL:"".concat("https://my-favorite-places.herokuapp.com","/api"),withCredentials:!0}),J=function(n){throw n},W=function(n){return G.post("/signup",n).then((function(n){return n.data})).catch(J)},_=function(){return G.get("/loggedIn").then((function(n){return n.data})).catch(J)},V=function(n){return G.post("/login",n).then((function(n){return n.data})).catch(J)},H=function(){return localStorage.removeItem("loggedInUser"),G.post("/logout",{}).then((function(n){return n.data})).catch(J)};function Y(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: none;\n"]);return Y=function(){return n},n}function Z(){var n=Object(m.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return Z=function(){return n},n}function K(){var n=Object(m.a)(["\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 10px 20px;\n  margin: 20px auto;\n  max-width: 350px;\n\n  a {\n    text-decoration: none;\n    color: blue;\n  }\n"]);return K=function(){return n},n}function q(){var n=Object(m.a)(["\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n  margin: 20px auto;\n  max-width: 350px;\n"]);return q=function(){return n},n}function Q(){var n=Object(m.a)(["\n  color: black;\n  border: solid red 1px;\n  border-radius: 4px;\n  max-width: 350px;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background-color: rgba(241, 169, 160, 0.15);\n\n  @media (min-width: 768px) {\n    width: 350px;\n    margin: 10px auto 0;\n  }\n"]);return Q=function(){return n},n}function X(){var n=Object(m.a)(["\n  text-align: center;\n  color: black;\n  animation: "," 0.5s;\n"]);return X=function(){return n},n}function $(){var n=Object(m.a)(["\n  0%   {opacity: 0;}\n  100% {opacity: 1;}\n"]);return $=function(){return n},n}var nn=Object(O.b)($()),en=O.a.div(X(),nn),tn=O.a.p(Q()),an=O.a.form(q()),rn=O.a.p(K()),cn=O.a.input(Z()),on=O.a.textarea(Y()),sn=function(n){var e=n.authForm?{username:"",password:""}:{name:"",description:"",place:null},t=Object(r.useState)(null),c=Object(l.a)(t,2),o=c[0],u=c[1],p=Object(r.useState)(e),x=Object(l.a)(p,2),h=x[0],b=x[1],g=function(n){var e=n.target,t=e.name,a=e.value;b((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(j.a)({},t,a))}))},m=n.fields.map((function(n){return"input"===n.input?Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("label",{children:n.label}),Object(a.jsx)(cn,{type:n.type,name:n.name,value:h[n.name],placeholder:n.placeholder,onChange:g})]},n.name):Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("label",{children:n.label}),Object(a.jsx)(on,{type:n.type,name:n.name,value:h[n.name],placeholder:n.placeholder,onChange:g})]},n.name)}));return Object(a.jsxs)(en,{children:[Object(a.jsxs)(an,{onSubmit:function(e){return function(e,t){e.preventDefault(),(n.login?V(t):n.signup?W(t):f(t)).then((function(e){n.createPlaceForm?(console.log("New favorite place created :",e),n.handleCloseForm(),n.handleRefreshFavoritePlaces()):(localStorage.setItem("loggedInUser",JSON.stringify(e)),n.getUser(e),n.history.push("/"))})).catch((function(e){console.log(n.createPlaceForm?"Error while login/signup":"Error creating a new favorite place"),u(e.response.data.message)}))}(e,h)},children:[Object(a.jsx)("h3",{children:n.login?"LOGIN":n.signup?"SIGNUP":"NEW FAVORITE PLACE"}),m,n.createPlaceForm&&Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("label",{children:"Find the place"}),Object(a.jsx)(M,{setPlace:function(n){b((function(e){return Object(s.a)(Object(s.a)({},e),{},{place:{address:n.address,lat:parseFloat(n.lat),lng:parseFloat(n.lng)}})}))}}),h.place&&Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("p",{children:"Is this the correct place ?"}),Object(a.jsx)(B,{formMap:!0,address:h.place.address,lat:h.place.lat,lng:h.place.lng,zoom:"14"},h.place.address)]})]}),Object(a.jsx)(I,{type:"submit",text:n.login?"LOGIN":n.signup?"SIGN UP":"ADD"}),o&&Object(a.jsx)(tn,{children:o})]}),(n.login||n.signup)&&Object(a.jsxs)(rn,{style:{textAlign:"center"},children:[n.authMessage,Object(a.jsx)(d.b,{to:"".concat(n.formRedirectLink),children:n.formRedirectText})]})]})},ln=function(n){return Object(a.jsx)(sn,Object(s.a)(Object(s.a)({createPlaceForm:!0},n),{},{fields:[{name:"name",label:"Name",type:"text",placeholder:"Ex: 'Parc de la Ciutadella'",input:"input"},{name:"description",label:"Description",type:"text",placeholder:"Ex: 'A nice park in the center of Barcelona.",input:"textarea"}]}))};function dn(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin-left: 100px;\n  width: 250px;\n  text-align: left;\n\n  @media (max-width: 667px) {\n    align-items: center;\n    margin-left: 0;\n  }\n\n  @media (min-width: 667px) and (max-width: 768px) {\n    width: 200px;\n    margin-left: 50px;\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    width: 225px;\n    margin-left: 80px;\n  }\n"]);return dn=function(){return n},n}function un(){var n=Object(m.a)(["\n  margin: 0 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  padding: 10px;\n\n  @media (max-width: 667px) {\n    flex-direction: column;\n    margin: 0 auto;\n  }\n"]);return un=function(){return n},n}function pn(){var n=Object(m.a)(["\n  list-style: none;\n  margin: 30px auto;\n\n  h2 {\n    @media (min-width: 667px) and (max-width: 768px) {\n      font-size: 18px;\n    }\n  }\n"]);return pn=function(){return n},n}var xn=O.a.li(pn()),hn=O.a.div(un()),fn=O.a.div(dn()),bn=function(n){return Object(a.jsx)(xn,{children:Object(a.jsxs)(hn,{children:[Object(a.jsx)(B,{address:n.place.place.address,lat:parseFloat(n.place.place.lat),lng:parseFloat(n.place.place.lng),zoom:"14"},n.place.place.address),Object(a.jsxs)(fn,{children:[Object(a.jsx)("h2",{children:n.place.name}),Object(a.jsx)("p",{children:n.place.description&&n.place.description}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"coords",children:["Lat: ",parseFloat(n.place.place.lat).toFixed(4)]}),Object(a.jsxs)("p",{children:["Lon: ",parseFloat(n.place.place.lng).toFixed(4)]})]}),Object(a.jsx)(I,{placeId:n.place._id,handleClick:function(){return e=n.place._id,void g(e).then((function(e){console.log("Place deleted:",e),n.handleRefreshFavoritePlaces()})).catch((function(n){console.log("Error while deleting favorite place")}));var e},text:"DELETE"})]})]})})};function gn(){var n=Object(m.a)(["\n  margin: 0 20px;\n  padding: 0;\n"]);return gn=function(){return n},n}function jn(){var n=Object(m.a)(["\n  text-align: center;\n  padding-bottom: 20px;\n"]);return jn=function(){return n},n}function mn(){var n=Object(m.a)(["\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: "," 1s;\n"]);return mn=function(){return n},n}function On(){var n=Object(m.a)(["\n  0%   {opacity: 0; top: 50%;}\n  100% {opacity: 1; top: 40%;}\n"]);return On=function(){return n},n}var vn=Object(O.b)(On()),wn=O.a.div(mn(),vn),In=O.a.div(jn()),yn=O.a.ul(gn()),Sn=function(n){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(r.useState)([]),s=Object(l.a)(o,2),u=s[0],p=s[1];Object(r.useEffect)((function(){n.userInSession&&b({author:n.userInSession.username}).then((function(n){p(n)})).catch((function(n){console.log("Error while getting favorite places")}))}),[n.userInSession]);var x=function(){b({author:n.userInSession.username}).then((function(n){p(n)})).catch((function(n){console.log("Error while getting favorite places")}))},h=u.map((function(n){return Object(a.jsx)(bn,{place:n,handleRefreshFavoritePlaces:x},n._id)}));return Object(a.jsx)(In,{children:n.userInSession?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Hi ",n.userInSession.username," !"]}),Object(a.jsx)(I,{handleClick:function(){c(!i)},text:i?"CLOSE":"ADD A NEW FAVORITE PLACE"}),u.length>2&&Object(a.jsx)("h2",{children:"Here is a list of your favorite places :"}),i&&Object(a.jsx)(ln,{userInSession:n.userInSession,handleCloseForm:function(){c(!1)},handleRefreshFavoritePlaces:x}),u&&Object(a.jsx)(yn,{children:h})]}):Object(a.jsxs)(wn,{children:[Object(a.jsx)("h1",{children:"Welcome to myFavoritePlaces!"}),Object(a.jsx)(d.b,{to:"login",children:Object(a.jsx)(I,{text:"LOGIN"})}),Object(a.jsx)(d.b,{to:"signup",children:Object(a.jsx)(I,{text:"SIGN UP"})})]})})};function Un(){var n=Object(m.a)(["\n  position: absolute;\n  right: 20px;\n  top: 40px;\n  font-size: 34px;\n  cursor: pointer;\n\n  @media (max-width: 400px) {\n    font-size: 20px;\n  }\n\n  @media (min-width: 400px) and (max-width: 500px) {\n    font-size: 24px;\n  }\n\n  @media (min-width: 500px) and (max-width: 768px) {\n    font-size: 28px;\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    font-size: 32px;\n  }\n"]);return Un=function(){return n},n}function kn(){var n=Object(m.a)(["\n  margin-top: 40px;\n  width: 350px;\n\n  @media (max-width: 400px) {\n    width: 175px;\n  }\n\n  @media (min-width: 400px) and (max-width: 500px) {\n    width: 225px;\n  }\n\n  @media (min-width: 500px) and (max-width: 768px) {\n    width: 275px;\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    margin-top: 40px;\n    width: 325px;\n  }\n"]);return kn=function(){return n},n}function Fn(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 0;\n  height: 50px;\n  margin-bottom: 100px;\n\n  a {\n    text-decoration: none;\n  }\n"]);return Fn=function(){return n},n}var Cn=O.a.div(Fn()),En=O.a.img(kn()),Ln=O.a.div(Un()),Pn=function(n){var e=Object(r.useState)({loggedInUser:null}),t=Object(l.a)(e,2),i=t[0],c=t[1];Object(r.useEffect)((function(){c({loggedInUser:n.userInSession})}),[n.userInSession]);return Object(a.jsxs)(Cn,{children:[Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)(En,{src:"".concat("","/logo_white.png"),alt:"Brand"})}),i.loggedInUser&&Object(a.jsx)(Ln,{children:Object(a.jsx)(N.a,{icon:R.a,onClick:function(){H().then((function(){c({loggedInUser:null}),n.getUser(null)}))}})})]})},zn=function(n){return Object(a.jsx)(sn,Object(s.a)(Object(s.a)({authForm:!0},n),{},{fields:[{name:"username",label:"Username",type:"text",placeholder:"Enter your username",input:"input"},{name:"password",label:"Password",type:"password",placeholder:"******",input:"input"}]}))},Nn=t(6),Rn=function(){var n={loggedInUser:JSON.parse(localStorage.getItem("loggedInUser"))||null},e=Object(r.useState)(n),t=Object(l.a)(e,2),i=t[0],c=t[1],o=function(n){c({loggedInUser:n})};Object(r.useEffect)((function(){null===i.loggedInUser&&_().then((function(n){localStorage.setItem("loggedInUser",JSON.stringify(n)),c({loggedInUser:n})})).catch((function(n){c({loggedInUser:!1})}))}),[i.loggedInUser]);var d=function(){_().then((function(n){c({loggedInUser:n})})).catch((function(n){c({loggedInUser:!1})}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)(Pn,{userInSession:i.loggedInUser,getUser:o,updateUser:d}),Object(a.jsxs)(Nn.c,{children:[Object(a.jsx)(Nn.a,{exact:!0,path:"/",render:function(n){return Object(a.jsx)(Sn,Object(s.a)(Object(s.a)({},n),{},{userInSession:i.loggedInUser,getUser:o,updateUser:d}))}}),Object(a.jsx)(Nn.a,{exact:!0,path:"/login",render:function(n){return Object(a.jsx)(zn,Object(s.a)(Object(s.a)({},n),{},{login:!0,userInSession:i.loggedInUser,getUser:o,updateUser:d,authMessage:"Don't have any account yet ?",formRedirectLink:"/signup",formRedirectText:" Sign up"}))}}),Object(a.jsx)(Nn.a,{exact:!0,path:"/signup",render:function(n){return Object(a.jsx)(zn,Object(s.a)(Object(s.a)({},n),{},{signup:!0,userInSession:i.loggedInUser,getUser:o,updateUser:d,authMessage:"Already have an account ?",formRedirectLink:"/login",formRedirectText:" Login"}))}})]})]})};o.a.render(Object(a.jsx)(d.a,{children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Rn,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.f0cf642a.chunk.js.map