(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-26a79c28":"cc4d277a","chunk-2d0ab43a":"5d2d9b02","chunk-2d0b3289":"f324520e","chunk-2d0bac97":"e503b5e8","chunk-2d0d6d35":"0a13ec04","chunk-2d2086b7":"86ce2ccc","chunk-2d21a3d2":"cbbc0c59","chunk-2d21e328":"c104ea41","chunk-2d22c101":"05c49223"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(t);var s=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4360:function(t,e,n){"use strict";var r,o,c,a,u=n("2b0e"),i=n("2f62"),s=n("bd86"),f=n("5ce5"),l=n("6c33"),d="setArticles",m="setLoading",p="logOut",h="setArticle",g="setAuth",b="setComments",v="setError",O="setProfile",w="setTags",j="addTag",y="removeTag",A="updateArticleInList",k="resetModuleState",P="setUsers",U="setLoadingUsers",S="updateUserInList",x="setUser",C={tags:[],articles:[],isLoading:!0,articlesCount:0},R={articlesCount:function(t){return t.articlesCount},articles:function(t){return t.articles},isLoading:function(t){return t.isLoading},tags:function(t){return t.tags}},T=(r={},Object(s["a"])(r,l["n"],(function(t,e){var n=t.commit;return n(m),f["a"].query(e.type,e.filters).then((function(t){var e=t.data;n(d,e)})).catch((function(t){throw new Error(t)}))})),Object(s["a"])(r,l["s"],(function(t){var e=t.commit;return f["d"].get().then((function(t){var n=t.data;e(w,n.tags)})).catch((function(t){throw new Error(t)}))})),r),E=(o={},Object(s["a"])(o,m,(function(t){t.isLoading=!0})),Object(s["a"])(o,d,(function(t,e){var n=e.articles,r=e.articlesCount;t.articles=n,t.articlesCount=r,t.isLoading=!1})),Object(s["a"])(o,w,(function(t,e){t.tags=e})),Object(s["a"])(o,A,(function(t,e){t.articles=t.articles.map((function(t){return t.slug!==e.slug||(t.favorited=e.favorited,t.favoritesCount=e.favoritesCount),t}))})),o),L={state:C,getters:R,actions:T,mutations:E},q=(n("7f7f"),n("bf48")),_=n.n(q),I=n("a65d"),D=n.n(I);u["a"].use(D.a);var F,J,M={errors:null,user:{},isAuthenticated:!1},H={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated},isSystemAdmin:function(t){return!!t.isAuthenticated&&t.user.roles.some((function(t){return"B4aAdminUser"==t}))},isClassAdmin:function(t){return!!t.isAuthenticated&&t.user.roles.some((function(t){return"ClassAdminUser"==t}))},isTeachingAssistant:function(t){return!!t.isAuthenticated&&t.user.roles.some((function(t){return"TeachingAssistantUser"==t}))},isStudent:function(t){return!!t.isAuthenticated&&t.user.roles.some((function(t){return"StudentUser"==t}))}},V=function(){var t=_.a.User.current(),e=document.getElementById("member-func"),n=document.getElementById("non-member-func");t?(e.setAttribute("style","display: block;"),n.setAttribute("style","display: none;")):(n.setAttribute("style","display: block;"),e.setAttribute("style","display: none;"))},W=(c={},Object(s["a"])(c,l["u"],(function(t,e){console.log(l["u"]);var n=e.email,r=e.password;return new Promise((function(e){_.a.User.logIn(n,r).then((function(t){console.log("user logged in: ".concat(t.id)),e(t)})).catch((function(e){alert("登录失败！"+e.message),t.commit(v,e.errors)}))}))})),Object(s["a"])(c,l["x"],(function(t,e){return t.commit(p),new Promise((function(t){_.a.User.requestPasswordReset(e.email).then((function(){u["a"].toasted.show("重置密码请求成功！请登录您的电邮，根据电邮指示设置好新的密码后，再来登录",{icon:"check",duration:5e3}),t()})).catch((function(t){u["a"].toasted.error("重置密码失败！".concat(t.message),{duration:5e3})}))}))})),Object(s["a"])(c,l["v"],(function(t){t.commit(p)})),Object(s["a"])(c,l["w"],(function(t,e){var n=e.name,r=e.email,o=e.password,c=e.confirmPassword,a=e.phone;return new Promise((function(e,i){return!o||o.length<6?(u["a"].toasted.error("密码不可以少于6位！",{duration:5e3}),void i()):o!=c?(u["a"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void i()):void _.a.Cloud.run("user:signup",{name:n,email:r,password:o,phone:a}).then((function(n){var r=n.data;u["a"].toasted.show("用户注册成功！请确认您的电邮地址，再来登录",{icon:"check",duration:5e3}),t.commit(p),e(r)})).catch((function(e){u["a"].toasted.error("用户注册失败！".concat(e.message),{duration:5e3}),t.commit(v,e.errors),i(e)}))}))})),Object(s["a"])(c,l["h"],(function(t){console.log("".concat(l["h"],": ").concat(M.user.id," roles: ").concat(M.user.roles," ").concat(_.a.User.current()?_.a.User.current().id:"no logged in user"));var e=_.a.User.current();if(e&&(!M.user||M.user.id!=e.id))return new Promise((function(n){console.log("loading user details: ".concat(e.id)),_.a.Cloud.run("user:getRoles",{}).then((function(e){console.log("loaded user details: ".concat(JSON.stringify(e))),t.commit(g,e),n(e)})).catch((function(e){console.log("error loading user details: ".concat(e.message)),t.commit(v,e.errors)}))}));e||M.user||!M.user.id||t.commit(p)})),Object(s["a"])(c,l["y"],(function(t,e){var n=_.a.User.current(),r=e.password,o=e.confirmPassword;return n.set("name",e.name),n.set("phone",e.phone),new Promise((function(c,a){if(r){if(r.length<6)return u["a"].toasted.error("密码不可以少于6位！",{duration:5e3}),void a();if(r!=o)return u["a"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void a();n.set("password",r),n.unset("state")}n.save().then((function(t){u["a"].toasted.show("更新成功！",{icon:"check",duration:5e3}),e.state=void 0,c(t)})).catch((function(e){u["a"].toasted.error("更新失败！".concat(e.message),{duration:5e3}),console.log("error updating user: ".concat(JSON.stringify(e))),t.commit(v,e.errors),a()}))}))})),c),N=(a={},Object(s["a"])(a,v,(function(t,e){t.errors=e})),Object(s["a"])(a,g,(function(t,e){console.log(g),V(),t.isAuthenticated=!0,t.user=e,t.errors={}})),Object(s["a"])(a,p,(function(t){console.log(p),t.isAuthenticated=!1,t.user={},t.errors={},_.a.User.current()&&_.a.User.logOut().then((function(){V(),console.log("user logged out")}))})),a),z={state:M,actions:W,mutations:N,getters:H};n("6762"),n("2fdb");u["a"].use(D.a);var B,Y,$={user:{},users:[],isLoadingUsers:!0,usersCount:0},Z={user:function(t){return t.user},usersCount:function(t){return t.usersCount},users:function(t){return t.users},isLoadingUsers:function(t){return t.isLoadingUsers}},G=(F={},Object(s["a"])(F,l["t"],(function(t,e){var n=t.commit;console.log("".concat(l["t"]," - params: ").concat(JSON.stringify(e))),n(U),_.a.Cloud.run("user:list",{}).then((function(t){console.log("".concat(l["t"]," - user: ").concat(JSON.stringify(t))),n(P,t)})).catch((function(t){throw console.log("error loading user list: ".concat(t.message)),new Error(t)}))})),Object(s["a"])(F,l["a"],(function(t,e){if(console.log("".concat(l["a"]," - userSlug: ").concat(e)),e){var n="user:adminFetchUser";_.a.Cloud.run(n,{userSlug:e}).then((function(e){console.log("".concat(l["a"]," - user: ").concat(JSON.stringify(e))),e.isStudent=0==e.roles.length||e.roles.includes("StudentUser"),e.isTeachingAssistant=e.roles.includes("TeachingAssistantUser"),e.isClassAdmin=e.roles.includes("ClassAdminUser"),e.isSystemAdmin=e.roles.includes("B4aAdminUser"),t.commit(x,e)})).catch((function(t){throw console.log("error loading user: ".concat(t.message)),new Error(t)}))}else t.commit(x,{})})),Object(s["a"])(F,l["z"],(function(t,e){console.log("".concat(l["z"]," - user: ").concat(JSON.stringify(e)));var n="user:adminUpdateUser",r=e.password,o=e.confirmPassword;return new Promise((function(c,a){return r&&r.length<6?(u["a"].toasted.error("密码不可以少于6位！",{duration:5e3}),void a()):r&&r!=o?(u["a"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void a()):void _.a.Cloud.run(n,{user:e}).then((function(e){t.commit(x,e),t.commit(S,e),u["a"].toasted.show("更新成功！",{icon:"check",duration:5e3}),c()})).catch((function(t){u["a"].toasted.error("更新失败！".concat(t.message),{duration:5e3}),console.log("error updating user: ".concat(t.message)),a()}))}))})),F),K=(J={},Object(s["a"])(J,x,(function(t,e){t.user=e})),Object(s["a"])(J,U,(function(t){t.isLoadingUsers=!0})),Object(s["a"])(J,P,(function(t,e){var n=e.users,r=e.usersCount;t.users=n,t.usersCount=r,t.isLoadingUsers=!1})),Object(s["a"])(J,S,(function(t,e){t.users=t.users.map((function(t){return t.slug!==e.slug?t:e}))})),J),Q={state:$,getters:Z,actions:G,mutations:K},X=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d"));function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var nt,rt={article:{author:{},title:"",description:"",body:"",tagList:[]},comments:[]},ot=et({},rt),ct=(B={},Object(s["a"])(B,l["m"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n,r){var o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0===r){t.next=2;break}return t.abrupt("return",e.commit(h,r));case 2:return t.next=4,f["a"].get(n);case 4:return o=t.sent,c=o.data,e.commit(h,c.article),t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["o"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["b"].get(n);case 2:return r=t.sent,o=r.data,e.commit(b,o.comments),t.abrupt("return",o.comments);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["i"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["b"].post(n.slug,n.comment);case 2:e.dispatch(l["o"],n.slug);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["j"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["b"].destroy(n.slug,n.commentId);case 2:e.dispatch(l["o"],n.slug);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["k"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["c"].add(n);case 2:r=t.sent,o=r.data,e.commit(A,o.article,{root:!0}),e.commit(h,o.article);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["l"],function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["c"].remove(n);case 2:r=t.sent,o=r.data,e.commit(A,o.article,{root:!0}),e.commit(h,o.article);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Object(s["a"])(B,l["f"],(function(t){var e=t.state;return f["a"].create(e.article)})),Object(s["a"])(B,l["b"],(function(t,e){return f["a"].destroy(e)})),Object(s["a"])(B,l["c"],(function(t){var e=t.state;return f["a"].update(e.article.slug,e.article)})),Object(s["a"])(B,l["d"],(function(t,e){t.commit(j,e)})),Object(s["a"])(B,l["e"],(function(t,e){t.commit(y,e)})),Object(s["a"])(B,l["g"],(function(t){var e=t.commit;e(k)})),B),at=(Y={},Object(s["a"])(Y,h,(function(t,e){t.article=e})),Object(s["a"])(Y,b,(function(t,e){t.comments=e})),Object(s["a"])(Y,j,(function(t,e){t.article.tagList=t.article.tagList.concat([e])})),Object(s["a"])(Y,y,(function(t,e){t.article.tagList=t.article.tagList.filter((function(t){return t!==e}))})),Object(s["a"])(Y,k,(function(){for(var t in ot)u["a"].set(ot,t,rt[t])})),Y),ut={article:function(t){return t.article},comments:function(t){return t.comments}},it={state:ot,actions:ct,mutations:at,getters:ut},st={errors:{},profile:{}},ft={profile:function(t){return t.profile}},lt=(nt={},Object(s["a"])(nt,l["p"],(function(t,e){var n=e.username;return f["e"].get("profiles",n).then((function(e){var n=e.data;return t.commit(O,n.profile),n})).catch((function(){}))})),Object(s["a"])(nt,l["q"],(function(t,e){var n=e.username;return f["e"].post("profiles/".concat(n,"/follow")).then((function(e){var n=e.data;return t.commit(O,n.profile),n})).catch((function(){}))})),Object(s["a"])(nt,l["r"],(function(t,e){var n=e.username;return f["e"].delete("profiles/".concat(n,"/follow")).then((function(e){var n=e.data;return t.commit(O,n.profile),n})).catch((function(){}))})),nt),dt=Object(s["a"])({},O,(function(t,e){t.profile=e,t.errors={}})),mt={state:st,actions:lt,mutations:dt,getters:ft};u["a"].use(i["a"]);e["a"]=new i["a"].Store({modules:{home:L,user:Q,auth:z,article:it,profile:mt}})},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("5df3"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RwvHeader"),n("router-view"),n("RwvFooter")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},u=[],i=(n("8e6e"),n("456d"),n("bd86")),s=n("2f62");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"RwvHeader",computed:l({},Object(s["b"])(["currentUser","isAuthenticated"]))},m=d,p=n("2877"),h=Object(p["a"])(m,a,u,!1,null,null,null),g=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},v=[],O={name:"RwvFooter"},w=O,j=Object(p["a"])(w,b,v,!1,null,null,null),y=j.exports,A={name:"App",components:{RwvHeader:g,RwvFooter:y}},k=A,P=Object(p["a"])(k,o,c,!1,null,null,null),U=P.exports,S=n("8c4f");r["a"].use(S["a"]);var x=new S["a"]({routes:[{path:"/",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0},children:[{path:"",name:"home",component:function(){return n.e("chunk-2d0bac97").then(n.bind(null,"3961"))}},{path:"user-management",name:"home-user-management",component:function(){return n.e("chunk-2d21e328").then(n.bind(null,"d512"))}},{path:"my-feed",name:"home-my-feed",component:function(){return n.e("chunk-26a79c28").then(n.bind(null,"a39e"))}}]},{name:"login",path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"forgotPassword",path:"/forgotPassword",component:function(){return n.e("chunk-2d22c101").then(n.bind(null,"f243"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"settings",path:"/settings",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{name:"user",path:"/users/:slug",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d0ab43a").then(n.bind(null,"1511"))},props:!0},{name:"createUser",path:"/createUser",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d0ab43a").then(n.bind(null,"1511"))}}]}),C=n("4360"),R=n("bf48"),T=n.n(R),E=n("6c33"),L=n("5ce5"),q=n("70f2"),_=n.n(q),I=function(t){return _()(new Date(t),"MMMM D, YYYY")},D=function(t){return"".concat(t[0])};r["a"].config.productionTip=!1,r["a"].filter("date",I),r["a"].filter("error",D),L["e"].init(),T.a.initialize("ac8UZVIGoUpTW7dIF9no0KsaG8AvEWJV5ykCjJSS","07aVCHnW5psmgZ9fcSM54VAfTgsAwOTHud7HkyZH"),T.a.serverURL="https://parseapi.back4app.com",x.beforeEach((function(t,e,n){Promise.all([C["a"].dispatch(E["h"])]).then((function(){C["a"].state.auth&&"needToChangePassword"==C["a"].state.auth.user.state&&"/settings"!=t.path?n({path:"/settings",query:{redirect:t.fullPath}}):t.matched.some((function(t){return t.meta.requiresAuth}))?T.a.User.current()?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}))})),new r["a"]({router:x,store:C["a"],render:function(t){return t(U)}}).$mount("#app")},"5ce5":function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return v}));var r=n("2b0e"),o=n("bc3a"),c=n.n(o),a=n("a7fe"),u=n.n(a),i="id_token",s=function(){return window.localStorage.getItem(i)},f=function(t){window.localStorage.setItem(i,t)},l=function(){window.localStorage.removeItem(i)},d={getToken:s,saveToken:f,destroyToken:l},m="https://conduit.productionready.io/api",p={init:function(){r["a"].use(u.a,c.a),r["a"].axios.defaults.baseURL=m},setHeader:function(){r["a"].axios.defaults.headers.common["Authorization"]="Token ".concat(d.getToken())},query:function(t,e){return r["a"].axios.get(t,e).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["a"].axios.get("".concat(t,"/").concat(e)).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},post:function(t,e){return r["a"].axios.post("".concat(t),e)},update:function(t,e,n){return r["a"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return r["a"].axios.put("".concat(t),e)},delete:function(t){return r["a"].axios.delete(t).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))}},h=(e["e"]=p,{get:function(){return p.get("tags")}}),g={query:function(t,e){return p.query("articles"+("feed"===t?"/feed":""),{params:e})},get:function(t){return p.get("articles",t)},create:function(t){return p.post("articles",{article:t})},update:function(t,e){return p.update("articles",t,{article:e})},destroy:function(t){return p.delete("articles/".concat(t))}},b={get:function(t){if("string"!==typeof t)throw new Error("[RWV] CommentsService.get() article slug required to fetch comments");return p.get("articles","".concat(t,"/comments"))},post:function(t,e){return p.post("articles/".concat(t,"/comments"),{comment:{body:e}})},destroy:function(t,e){return p.delete("articles/".concat(t,"/comments/").concat(e))}},v={add:function(t){return p.post("articles/".concat(t,"/favorite"))},remove:function(t){return p.delete("articles/".concat(t,"/favorite"))}}},6:function(t,e){},"6c33":function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return h})),n.d(e,"t",(function(){return g})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return v})),n.d(e,"q",(function(){return O})),n.d(e,"r",(function(){return w})),n.d(e,"s",(function(){return j})),n.d(e,"u",(function(){return y})),n.d(e,"x",(function(){return A})),n.d(e,"v",(function(){return k})),n.d(e,"w",(function(){return P})),n.d(e,"y",(function(){return U})),n.d(e,"z",(function(){return S})),n.d(e,"a",(function(){return x}));var r="publishArticle",o="deleteArticle",c="editArticle",a="addTagToArticle",u="removeTagFromArticle",i="resetArticleState",s="checkAuth",f="createComment",l="destroyComment",d="addFavorite",m="removeFavorite",p="fetchArticle",h="fetchArticles",g="fetchUsers",b="fetchComments",v="fetchProfile",O="fetchProfileFollow",w="fetchProfileUnfollow",j="fetchTags",y="login",A="resetPassword",k="logout",P="register",U="updateUser",S="adminUpdateUser",x="adminFetchUser"},7:function(t,e){},8:function(t,e){},9:function(t,e){}});
//# sourceMappingURL=app.2bf6efd9.js.map