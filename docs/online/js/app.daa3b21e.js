(function(e){function n(n){for(var s,r,c=n[0],i=n[1],u=n[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],s=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(s=!1)}s&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var s={},r={app:0},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"ab3b016c","chunk-2d0d6d35":"87be6d54","chunk-2d2086b7":"572f4de3","chunk-2d217357":"548f4651","chunk-2d22c101":"d6321e67","chunk-2f3dad30":"b08ed3cd","chunk-6e5169e8":"9de5d127","chunk-8a0e6010":"a3db4257","chunk-2d0b6eb6":"9dfa8043","chunk-9a8d2fe4":"28b97d1f","chunk-c7c39b2a":"08d33852"}[e]+".js"}function i(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6e5169e8":1,"chunk-9a8d2fe4":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var s="css/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-2d22c101":"31d6cfe0","chunk-2f3dad30":"31d6cfe0","chunk-6e5169e8":"327eeb89","chunk-8a0e6010":"31d6cfe0","chunk-2d0b6eb6":"31d6cfe0","chunk-9a8d2fe4":"8ef05e9b","chunk-c7c39b2a":"31d6cfe0"}[e]+".css",o=i.p+s,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===s||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var s=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=s,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var s=o[e];if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(n,t){s=o[e]=[n,t]}));n.push(s[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=s,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)i.d(t,s,function(n){return e[n]}.bind(null,s));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},4360:function(e,n,t){"use strict";var s,r=t("2b0e"),o=t("2f62"),a=t("bd86"),c=t("bf48"),i=t.n(c),u=t("a65d"),l=t.n(u),d=t("6c33"),f="logOut",m="setAuth",h="setError",g="setUsers",p="setLoadingUsers",b="filterUsersInList",v="updateUserInList",y="setUser",O="setDashboards",S="setLoadingDashboards",w="setLoadingSessions",U="setSessions",A="filterSessionsInList",k="setLoadingPracticeCounts",j="setPracticeCounts";r["default"].use(l.a);var C,P,L={home:{},isLoadingDashboards:!0},I={home:function(e){return e.home},isLoadingDashboards:function(e){return e.isLoadingDashboards}},N=Object(a["a"])({},d["c"],(function(e){var n=e.commit,t=ee.state.auth.user;return console.log("".concat(d["c"]," - auth.user: ").concat(JSON.stringify(t))),n(S),new Promise((function(e,s){i.a.Cloud.run("home:loadDashboardsV2",{user:t}).then((function(t){console.log("".concat(d["c"]," - result: ").concat(t)),n(O,t),e()})).catch((function(e){console.log("error loading dashboards: ".concat(e.message)),r["default"].toasted.error("error loading dashboards: ".concat(e.message),{duration:5e3}),s()}))}))})),D=(s={},Object(a["a"])(s,S,(function(e){e.isLoadingDashboards=!0})),Object(a["a"])(s,O,(function(e,n){e.home=n,e.isLoadingDashboards=!1})),s),T={state:L,getters:I,actions:N,mutations:D};t("7f7f");r["default"].use(l.a);var E,_,J={errors:null,user:{},isAuthenticated:!1},x={currentUser:function(e){return e.user},isAuthenticated:function(e){return e.isAuthenticated},isSystemAdmin:function(e){return!!e.isAuthenticated&&e.user.roles.some((function(e){return"B4aAdminUser"==e}))},isClassAdmin:function(e){return!!e.isAuthenticated&&e.user.roles.some((function(e){return"ClassAdminUser"==e}))},isTeachingAssistant:function(e){return!!e.isAuthenticated&&e.user.roles.some((function(e){return"TeachingAssistantUser"==e}))},isStudent:function(e){return!!e.isAuthenticated&&e.user.roles.some((function(e){return"StudentUser"==e}))}},q=function(){var e=i.a.User.current(),n=document.getElementById("member-func"),t=document.getElementById("non-member-func");e?(n.setAttribute("style","display: block;"),t.setAttribute("style","display: none;")):(t.setAttribute("style","display: block;"),n.setAttribute("style","display: none;"))},M=(C={},Object(a["a"])(C,d["i"],(function(e,n){console.log(d["i"]);var t=n.email,s=n.password;return new Promise((function(n){i.a.User.logIn(t,s).then((function(e){console.log("user logged in: ".concat(e.id)),n(e)})).catch((function(n){r["default"].toasted.error("登录失败！".concat(n.message),{duration:5e3}),e.commit(h,n.errors)}))}))})),Object(a["a"])(C,d["l"],(function(e,n){return e.commit(f),new Promise((function(e){i.a.User.requestPasswordReset(n.email).then((function(){r["default"].toasted.show("重置密码请求成功！请登录您的电邮，根据电邮指示设置好新的密码后，再来登录",{icon:"check",duration:5e3}),e()})).catch((function(e){r["default"].toasted.error("重置密码失败！".concat(e.message),{duration:5e3})}))}))})),Object(a["a"])(C,d["j"],(function(e){e.commit(f)})),Object(a["a"])(C,d["k"],(function(e,n){var t=n.name,s=n.email,o=n.password,a=n.confirmPassword,c=n.phone;return new Promise((function(n,u){return!o||o.length<6?(r["default"].toasted.error("密码不可以少于6位！",{duration:5e3}),void u()):o!=a?(r["default"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void u()):void i.a.Cloud.run("user:signup",{name:t,email:s,password:o,phone:c}).then((function(t){var s=t.data;r["default"].toasted.show("用户注册成功！请确认您的电邮地址，再来登录",{icon:"check",duration:5e3}),e.commit(f),n(s)})).catch((function(n){r["default"].toasted.error("用户注册失败！".concat(n.message),{duration:5e3}),e.commit(h,n.errors),u(n)}))}))})),Object(a["a"])(C,d["b"],(function(e){console.log("".concat(d["b"],": ").concat(J.user.id," roles: ").concat(J.user.roles," ").concat(i.a.User.current()?i.a.User.current().id:"no logged in user"));var n=i.a.User.current();if(n&&(!J.user||J.user.id!=n.id))return new Promise((function(t){console.log("loading user details: ".concat(n.id)),i.a.Cloud.run("user:getRoles",{}).then((function(n){console.log("loaded user details: ".concat(JSON.stringify(n))),e.commit(m,n),t(n)})).catch((function(n){console.log("error loading user details: ".concat(n.message)),e.commit(h,n.errors)}))}));n||J.user||!J.user.id||e.commit(f)})),Object(a["a"])(C,d["n"],(function(e,n){var t=i.a.User.current(),s=n.password,o=n.confirmPassword;return t.set("name",n.name),t.set("phone",n.phone),new Promise((function(a,c){if(s){if(s.length<6)return r["default"].toasted.error("密码不可以少于6位！",{duration:5e3}),void c();if(s!=o)return r["default"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void c();t.set("password",s),t.unset("state")}t.save().then((function(e){r["default"].toasted.show("更新成功！",{icon:"check",duration:5e3}),n.state=void 0,n.password=void 0,n.confirmPassword=void 0,a(e)})).catch((function(n){r["default"].toasted.error("更新失败！".concat(n.message),{duration:5e3}),console.log("error updating user: ".concat(JSON.stringify(n))),e.commit(h,n.errors),c()}))}))})),C),Y=(P={},Object(a["a"])(P,h,(function(e,n){e.errors=n})),Object(a["a"])(P,m,(function(e,n){console.log(m),q(),e.isAuthenticated=!0,e.user=n,e.errors={}})),Object(a["a"])(P,f,(function(e){console.log(f),e.isAuthenticated=!1,e.user={},e.errors={},i.a.User.current()&&i.a.User.logOut().then((function(){q(),console.log("user logged out")}))})),P),F={state:J,actions:M,mutations:Y,getters:x};t("20d6"),t("6762"),t("2fdb");r["default"].use(l.a);var R,B,H={user:{},users:[],allUsers:[],isLoadingUsers:!0,usersCount:0},V={user:function(e){return e.user},usersCount:function(e){return e.usersCount},users:function(e){return e.users},isLoadingUsers:function(e){return e.isLoadingUsers}},W=(E={},Object(a["a"])(E,d["f"],(function(e){var n=e.commit,t=ee.state.auth.user;console.log("".concat(d["f"]," - auth.user: ").concat(JSON.stringify(t))),n(p);var s="user:adminFetchUsers";i.a.Cloud.run(s,{user:t}).then((function(e){console.log("".concat(d["f"]," - users: ").concat(JSON.stringify(e))),n(g,e)})).catch((function(e){throw console.log("error loading user list: ".concat(e.message)),new Error(e)}))})),Object(a["a"])(E,d["h"],(function(e,n){console.log("".concat(d["h"]," - filterText: ").concat(JSON.stringify(n))),e.commit(b,n)})),Object(a["a"])(E,d["a"],(function(e,n){if(console.log("".concat(d["a"]," - userSlug: ").concat(n)),n){var t=ee.state.auth.user;console.log("".concat(d["a"]," - auth.user: ").concat(JSON.stringify(t)));var s="user:adminFetchUser";return new Promise((function(o,a){i.a.Cloud.run(s,{user:t,userSlug:n}).then((function(n){console.log("".concat(d["a"]," - user: ").concat(JSON.stringify(n))),n.isStudent=0==n.roles.length||n.roles.includes("StudentUser"),n.isTeachingAssistant=n.roles.includes("TeachingAssistantUser"),n.isClassAdmin=n.roles.includes("ClassAdminUser"),n.isSystemAdmin=n.roles.includes("B4aAdminUser"),n.isTeacher=n.roles.includes("TeacherUser"),e.commit(y,n),o()})).catch((function(e){console.log("error loading user: ".concat(e.message)),r["default"].toasted.error("Error loading user: ".concat(e.message),{duration:5e3}),a()}))}))}e.commit(y,{})})),Object(a["a"])(E,d["o"],(function(e,n){var t=ee.state.auth.user;console.log("".concat(d["o"]," - auth.user: ").concat(JSON.stringify(t))),console.log("".concat(d["o"]," - userToUpdate: ").concat(JSON.stringify(n)));var s="user:adminUpdateUser",o=n.password,a=n.confirmPassword,c=ee.state.user.allUsers.findIndex((function(e){return e.id===n.id}));return c>=0&&ee.state.user.allUsers[c].email===n.email&&(n.email=void 0),console.log("".concat(c," - userToUpdate: ").concat(JSON.stringify(n))),new Promise((function(c,u){return o&&o.length<6?(r["default"].toasted.error("密码不可以少于6位！",{duration:5e3}),void u()):o&&o!=a?(r["default"].toasted.error("密码和确认密码不匹配！",{duration:5e3}),void u()):void i.a.Cloud.run(s,{user:t,userToUpdate:n}).then((function(n){e.commit(v,n),r["default"].toasted.show("更新成功！",{icon:"check",duration:5e3}),c()})).catch((function(e){r["default"].toasted.error("更新失败！".concat(e.message),{duration:5e3}),console.log("error updating user: ".concat(e.message)),u()}))}))})),E),$=(_={},Object(a["a"])(_,y,(function(e,n){e.user=n})),Object(a["a"])(_,p,(function(e){e.isLoadingUsers=!0})),Object(a["a"])(_,g,(function(e,n){var t=n.users,s=n.usersCount;e.users=t,e.allUsers=t,e.usersCount=s,e.isLoadingUsers=!1})),Object(a["a"])(_,v,(function(e,n){for(var t=!1,s=0,r=0;r<e.allUsers.length;r++){if(e.allUsers[r].id==n.id){t=!0,n.email||(n.email=e.allUsers[r].email),e.allUsers[r]=n;break}n.name>e.allUsers[r].name&&(s=r+1)}t||e.allUsers.splice(s,0,n),e.users=e.allUsers})),Object(a["a"])(_,b,(function(e,n){e.users=n&&""!=n?e.allUsers.filter((function(e){for(var t=[{name:"B4aAdminUser",displayName:"系统管理员"},{name:"ClassAdminUser",displayName:"学修管理员"},{name:"TeacherUser",displayName:"辅导员"},{name:"TeachingAssistantUser",displayName:"学修助理"},{name:"StudentUser",displayName:"学员"}],s="",r=0;r<t.length;r++)e.roles.some((function(e){return e==t[r].name}))&&(s.length>0&&(s+="，"),s+=t[r].displayName);var o="".concat(e.name,"\t").concat(e.username,"\t").concat(e.email,"\t").concat(e.phone,"\t").concat(s);return o.toLowerCase().includes(n.toLowerCase())})):e.allUsers})),_),Z={state:H,getters:V,actions:W,mutations:$};r["default"].use(l.a);var z={classSession:{},classSessions:[],sessionDetails:[],classInfo:{},practiceInfo:{},isLoadingSessions:!1,isLoadingPracticeCounts:!1},G={classInfo:function(e){return e.classInfo},classSession:function(e){return e.classSession},classSessions:function(e){return e.classSessions},sessionDetails:function(e){return e.sessionDetails},isLoadingSessions:function(e){return e.isLoadingSessions},isLoadingPracticeCounts:function(e){return e.isLoadingPracticeCounts},practiceInfo:function(e){return e.practiceInfo}},K=(R={},Object(a["a"])(R,d["e"],(function(e,n){var t=n["classId"],s=n["forApplication"];"string"===typeof s&&(s="true"===s);var r=n["forAdmin"];"string"===typeof r&&(r="true"===r);var o=n["loadingNewSessions"];"string"===typeof o&&(o="true"===o),console.log("".concat(d["e"]," - classId: ").concat(t," forApplication: ").concat(s," forAdmin: ").concat(r," loadingNewSessions: ").concat(o)),e.commit(w);var a="class:fetchSessionsV2";i.a.Cloud.run(a,{classId:t,forApplication:s,forAdmin:r,loadingNewSessions:o}).then((function(n){console.log("".concat(a," - classInfo: ").concat(JSON.stringify(n))),e.commit(U,n)})).catch((function(e){throw console.log("error loading classSession list: ".concat(JSON.stringify(e))),new Error(e)}))})),Object(a["a"])(R,d["d"],(function(e,n){var t=n["practiceId"],s=n["forAdmin"];"string"===typeof s&&(s="true"===s),console.log("".concat(d["d"]," - practiceId: ").concat(t," forAdmin: ").concat(s)),e.commit(k);var r="class:fetchPracticeCountsV2";i.a.Cloud.run(r,{practiceId:t,forAdmin:s}).then((function(n){console.log("".concat(d["d"]," - #practiceCount: ").concat(n.counts.length)),e.commit(j,n)})).catch((function(e){throw console.log("error loading practice counts: ".concat(JSON.stringify(e))),new Error(e)}))})),Object(a["a"])(R,d["g"],(function(e,n){console.log("".concat(d["g"]," - filterText: ").concat(JSON.stringify(n))),e.commit(A,n)})),Object(a["a"])(R,d["m"],(function(e){console.log("".concat(d["m"]," - classSessionToUpdate: ").concat(JSON.stringify(e)))})),R),Q=(B={},Object(a["a"])(B,k,(function(e){e.isLoadingPracticeCounts=!0})),Object(a["a"])(B,j,(function(e,n){e.practiceInfo=n,e.isLoadingPracticeCounts=!1})),Object(a["a"])(B,w,(function(e){e.isLoadingSessions=!0})),Object(a["a"])(B,U,(function(e,n){e.classInfo=n,e.classSessions=n.classSessions,e.sessionDetails=n.sessionDetails,e.isLoadingSessions=!1})),Object(a["a"])(B,A,(function(e,n){if(n&&""!=n){e.classSessions=[],e.sessionDetails=[];for(var t=0;t<e.classInfo.classSessions.length;t++){var s=e.classInfo.classSessions[t];s.get("name").toLowerCase().includes(n.toLowerCase())&&(e.classSessions.push(s),e.sessionDetails.push(e.classInfo.sessionDetails[t]))}}else e.classSessions=e.classInfo.classSessions,e.sessionDetails=e.classInfo.sessionDetails})),B),X={state:z,getters:G,actions:K,mutations:Q};r["default"].use(o["a"]);var ee=n["a"]=new o["a"].Store({modules:{home:T,buddhaclass:X,user:Z,auth:F}})},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("5df3"),t("cadf"),t("551c"),t("f751"),t("097d");var s=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("RwvHeader"),t("router-view"),t("RwvFooter")],1)},o=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isAuthenticated?t("nav",{staticClass:"navbar navbar-light"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("主页")]),e.isSystemAdmin?t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"user-management"}}},[e._v("用户管理")]):e._e(),t("ul",{staticClass:"nav navbar-nav pull-xs-right",staticStyle:{"list-style-type":"none"}},[t("li",{staticClass:"nav-item float-xs-right"},[t("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"profile"}}},[t("i",{staticClass:"ion-gear-a"}),e._v("\n           "+e._s(e.currentUser.name)+"\n        ")])],1)])],1)]):e._e()},c=[],i=(t("8e6e"),t("456d"),t("bd86")),u=t("2f62");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(i["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={name:"RwvHeader",computed:d({},Object(u["b"])(["currentUser","isAuthenticated","isSystemAdmin","isClassAdmin","isTeachingAssistant","isStudent"]))},m=f,h=t("2877"),g=Object(h["a"])(m,a,c,!1,null,null,null),p=g.exports,b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div")},v=[],y={name:"RwvFooter"},O=y,S=Object(h["a"])(O,b,v,!1,null,null,null),w=S.exports,U={name:"App",components:{RwvHeader:p,RwvFooter:w}},A=U,k=Object(h["a"])(A,r,o,!1,null,null,null),j=k.exports,C=t("8c4f");s["default"].use(C["a"]);var P=new C["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-8a0e6010"),t.e("chunk-9a8d2fe4")]).then(t.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/user-management",name:"user-management",component:function(){return t.e("chunk-2f3dad30").then(t.bind(null,"1d56"))},meta:{requiresAuth:!0}},{path:"/sessions/:classId/:forApplication/:forAdmin/:loadingNewSessions",name:"session-management",component:function(){return t.e("chunk-c7c39b2a").then(t.bind(null,"662a"))},props:!0,meta:{requiresAuth:!0}},{path:"/counts/:practiceId/:forAdmin",name:"count-list",component:function(){return Promise.all([t.e("chunk-8a0e6010"),t.e("chunk-2d0b6eb6")]).then(t.bind(null,"1ee1"))},props:!0,meta:{requiresAuth:!0}},{name:"login",path:"/login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{name:"forgotPassword",path:"/forgotPassword",component:function(){return t.e("chunk-2d22c101").then(t.bind(null,"f243"))}},{name:"register",path:"/register",component:function(){return t.e("chunk-2d0d6d35").then(t.bind(null,"73cf"))}},{name:"profile",path:"/profile",meta:{requiresAuth:!0},component:function(){return t.e("chunk-2d217357").then(t.bind(null,"c66d"))}},{name:"user",path:"/users/:slug",meta:{requiresAuth:!0},component:function(){return t.e("chunk-2d0ab43a").then(t.bind(null,"1511"))},props:!0},{name:"userCreate",path:"/userCreate",meta:{requiresAuth:!0},component:function(){return t.e("chunk-2d0ab43a").then(t.bind(null,"1511"))}},{name:"adminFunctions",path:"/adminFunctions",meta:{requiresAuth:!0},component:function(){return t.e("chunk-6e5169e8").then(t.bind(null,"1041"))}}]}),L=t("4360"),I=t("bf48"),N=t.n(I),D=t("5f5b"),T=t("b1e0"),E=t("03a5"),_=t.n(E),J=(t("c5c5"),t("5887")),x=t.n(J),q=t("6c33"),M=t("70f2"),Y=t.n(M),F=function(e){return Y()(new Date(e),"MMMM D, YYYY")},R=function(e){return"".concat(e[0])};s["default"].config.productionTip=!1,s["default"].filter("date",F),s["default"].filter("error",R),N.a.initialize("ac8UZVIGoUpTW7dIF9no0KsaG8AvEWJV5ykCjJSS","07aVCHnW5psmgZ9fcSM54VAfTgsAwOTHud7HkyZH"),N.a.serverURL="https://parseapi.back4app.com",P.beforeEach((function(e,n,t){Promise.all([L["a"].dispatch(q["b"])]).then((function(){L["a"].state.auth&&"needToChangePassword"==L["a"].state.auth.user.state&&"/profile"!=e.path?t({path:"/profile",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresAuth}))?N.a.User.current()?t():t({path:"/login",query:{redirect:e.fullPath}}):t()}))})),s["default"].use(D["a"]),s["default"].use(T["a"]),s["default"].use(x.a,{locales:{"zh-CN":{firstDayOfWeek:1,masks:{L:"YYYY年MM月DD日",title:"YYYY年MMM"}}}}),s["default"].use(_.a),new s["default"]({router:P,store:L["a"],render:function(e){return e(j)}}).$mount("#app")},6:function(e,n){},"6c33":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"f",(function(){return r})),t.d(n,"h",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"i",(function(){return c})),t.d(n,"l",(function(){return i})),t.d(n,"j",(function(){return u})),t.d(n,"k",(function(){return l})),t.d(n,"n",(function(){return d})),t.d(n,"o",(function(){return f})),t.d(n,"a",(function(){return m})),t.d(n,"e",(function(){return h})),t.d(n,"g",(function(){return g})),t.d(n,"m",(function(){return p})),t.d(n,"d",(function(){return b}));var s="checkAuth",r="fetchUsers",o="filterUsers",a="fetchDashboards",c="login",i="resetPassword",u="logout",l="register",d="updateUser",f="adminUpdateUser",m="adminFetchUser",h="fetchSessions",g="filterSessions",p="updateSession",b="fetchPracticeCounts"},7:function(e,n){},8:function(e,n){},9:function(e,n){}});
//# sourceMappingURL=app.daa3b21e.js.map