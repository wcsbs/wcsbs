(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-828b241c"],{"2c634":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.editing?s("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("h4",[t._v(t._s(t.session.name?t.session.name:"创建新课"))]),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"选择课程："}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.session.id,expression:"session.id"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.session,"id",e.target.multiple?s:s[0])}}},t._l(t.sessionDropdownOptions,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)]),s("b-form-textarea",{attrs:{placeholder:"输入上课通知",rows:"8","max-rows":"20"},model:{value:t.session.description,callback:function(e){t.$set(t.session,"description",e)},expression:"session.description"}}),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"选择日期："}},[s("v-date-picker",{attrs:{"input-props":{readonly:!0}},model:{value:t.session.scheduledAt,callback:function(e){t.$set(t.session,"scheduledAt",e)},expression:"session.scheduledAt"}}),s("b-input-group-append",[s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("提交")]),t.session.creating?t._e():s("b-button",{attrs:{type:"reset",variant:"primary"}},[t._v("取消")])],1)],1)],1):s("b-card",{staticClass:"text-center",attrs:{header:t.session.name}},[s("b-card-text",[s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"上课时间："}},[s("b-form-input",{attrs:{readonly:""},model:{value:t.session.scheduledAtLocalDateTimeString,callback:function(e){t.$set(t.session,"scheduledAtLocalDateTimeString",e)},expression:"session.scheduledAtLocalDateTimeString"}}),s("b-input-group-append",[t.newSessions&&(t.isClassAdmin||t.isTeachingAssistant)?s("b-button",{attrs:{variant:"warning"},on:{click:t.editSession}},[t._v("修改")]):t._e(),s("b-button",{attrs:{variant:"info",href:t.addToGoogleCalendarUrl(),target:"_blank"}},[s("b-icon",{attrs:{icon:"calendar-plus"}})],1)],1)],1),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"课前学习："}},[s("b-form-input",{attrs:{readonly:""},model:{value:t.session.materialState,callback:function(e){t.$set(t.session,"materialState",e)},expression:"session.materialState"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"info",href:t.session.url,target:"_blank"}},[s("b-icon",{attrs:{icon:"book"}})],1)],1)],1),t.session.forApplication?t._e():s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"上课出勤："}},[s("b-form-input",{attrs:{readonly:""},model:{value:t.session.attendanceState,callback:function(e){t.$set(t.session,"attendanceState",e)},expression:"session.attendanceState"}}),s("b-input-group-append",[t.session.showAttendanceButton?s("b-button",{attrs:{variant:"warning"},on:{click:function(e){return t.updateAttendance()}}},[t._v(t._s(t.attendanceButtonName()))]):t._e(),s("b-button",{attrs:{variant:"info"},on:{click:function(e){t.session.showDescription=!t.session.showDescription}}},[t.session.showDescription?s("b-icon",{attrs:{icon:"chevron-double-up"}}):s("b-icon",{attrs:{icon:"chevron-double-down"}})],1)],1)],1),t.session.showDescription?s("b-form-textarea",{attrs:{placeholder:"Auto height textarea",rows:"3","max-rows":"8"},model:{value:t.session.description,callback:function(e){t.$set(t.session,"description",e)},expression:"session.description"}}):t._e()],1)],1)],1)},a=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("a481"),s("7f7f"),s("4917"),s("bd86")),o=s("bf48"),r=s.n(o),c=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"ClassSession",props:{classSession:{type:Object,required:!0},attendance:{type:Object,required:!1},classInfo:{type:Object,required:!1},newSessions:{type:Array,required:!1},forApplication:Boolean},data:function(){return{session:this.classSession.dummy?{creating:!0,editing:!0}:this.initSession(),sessionDropdownOptions:[],editing:this.classSession.dummy}},computed:d({},Object(c["b"])(["isClassAdmin","isTeachingAssistant","isStudent"])),mounted:function(){this.buildSessionDropdownOptions()},methods:{initSession:function(){return{id:this.classSession.id,forApplication:this.classInfo?this.classInfo.forApplication:this.forApplication,name:this.classSession.get("name"),url:this.classSession.get("url"),description:this.classSession.get("description"),scheduledAt:this.classSession.get("scheduledAt"),scheduledAtLocalDateTimeString:this.toLocalDateTimeString(this.classSession.get("scheduledAt")),showDescription:!1,showAttendanceButton:this.needToShowAttendanceButton(this.classSession.get("scheduledAt")),attendanceState:this.toAttendanceStateString(this.attendance),materialState:this.toMaterialStateString(this.attendance)}},buildSessionDropdownOptions:function(){if(this.sessionDropdownOptions=[],this.editing)if(this.classSession.dummy)this.sessionDropdownOptions=this.newSessions;else{var t={id:this.classSession.id,name:this.classSession.get("name")};console.log("".concat(JSON.stringify(t)));for(var e=parseInt(t.name.match(/(\d+)/)[0]),s=!1,n=0;n<this.newSessions.length;n++){var a=this.newSessions[n];!s&&parseInt(a.name.match(/(\d+)/)[0])>e&&(this.sessionDropdownOptions.push(t),s=!0),this.sessionDropdownOptions.push(a)}}},toLocalDateTimeString:function(t){var e={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString("zh-CN",e)},toLocalDateString:function(t){var e={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString("zh-CN",e)},needToShowAttendanceButton:function(t){if(this.isStudent){var e=new Date;return e.getTime()<t.getTime()+2592e5}return!1},toAttendanceStateString:function(t){if(t){if(t.qingJia)return"已请假";if(1==t.shangKe)return"已上课";if(0==t.shangKe&&void 0==t.qingJia)return"未上课"}return"未报考勤"},toMaterialStateString:function(t){if(this.forApplication)return"请在课前看完传承/法本";var e="未看传承",s="未看法本";return t&&(t.chuanCheng&&(e="已看传承"),1==t.faBen&&(s="已看法本")),"".concat(e,"/").concat(s)},addToGoogleCalendarUrl:function(){var t=this.session.scheduledAt,e=new Date;e.setTime(t.getTime()+144e5),t=t.toISOString().replace(/.000/g,"").replace(/:/g,"").replace(/-/g,""),e=e.toISOString().replace(/.000/g,"").replace(/:/g,"").replace(/-/g,"");var s="".concat(this.session.name,"&details=").concat(this.session.description);return s=encodeURI(s),"https://www.google.com/calendar/render?action=TEMPLATE&text=".concat(s,"&dates=").concat(t,"%2F").concat(e)},attendanceButtonName:function(){var t=new Date;return t<this.classSession.get("scheduledAt")?this.attendance.qingJia?"取消请假":"我要请假":void 0!=this.attendance.shangKe?"我要改考勤":"我要报考勤"},updateAttendance:function(){var t=new Date,e={},s="确认";t<this.classSession.get("scheduledAt")?this.attendance.qingJia?(e.qingJia=!1,s+="取消请假"):(e.qingJia=!0,e.shangKe=!1,s+="请假"):this.attendance.shangKe?(e.shangKe=!1,s+="没有上课"):(e.shangKe=!0,s+="已上课");var n=this.classSession.get("url"),a=this,i={okText:"确认",cancelText:"取消"},o={title:this.session.name,body:s+"?"};this.$dialog.confirm(o,i).then((function(t){console.log("".concat(JSON.stringify(t))),r.a.Cloud.run("home:updateAttendance",{pathname:n,attendance:e}).then((function(t){console.log("updateAttendance - result: ".concat(JSON.stringify(t))),void 0!=t.qingJia&&(a.attendance.qingJia=t.qingJia),void 0!=t.shangKe&&(a.attendance.shangKe=t.shangKe),a.session.attendanceState=a.toAttendanceStateString(a.attendance)})).catch((function(t){console.log("error in updateAttendance: ".concat(t))}))})).catch((function(t){console.log("error: ".concat(t))}))},editSession:function(){this.session=this.initSession(),this.editing=!0,this.buildSessionDropdownOptions()},onReset:function(t){t.preventDefault(),this.editing=!1},onSubmit:function(t){t.preventDefault();var e=this.session.id;console.log("sessionId: ".concat(e));var s=this.classInfo.classSessions.filter((function(t){return t.id===e}))[0],n={okText:"确认",cancelText:"取消"},a={title:this.classInfo.name,body:"".concat(this.session.creating?"创建新课":"修改"," 《").concat(s.get("name"),"》 @ ").concat(this.toLocalDateString(this.session.scheduledAt),"？")},i=this,o=this.session;o.oldId=this.classSession.id;var c=new Date(o.scheduledAt);c.setHours(9),o.scheduledAt=c,this.$dialog.confirm(a,n).then((function(){r.a.Cloud.run("class:updateClassSession",{session:o}).then((function(t){console.log("updateClassSession - result: ".concat(JSON.stringify(t))),i.$router.go()})).catch((function(t){console.log("error in updateAttendance: ".concat(t))}))})).catch((function(t){console.log("error: ".concat(t))}))}}},h=u,p=s("2877"),f=Object(p["a"])(h,n,a,!1,null,null,null);e["a"]=f.exports},a481:function(t,e,s){"use strict";var n=s("cb7c"),a=s("4bf8"),i=s("9def"),o=s("4588"),r=s("0390"),c=s("5f1b"),l=Math.max,d=Math.min,u=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};s("214f")("replace",2,(function(t,e,s,b){return[function(n,a){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,a):s.call(String(i),n,a)},function(t,e){var a=b(s,t,this,e);if(a.done)return a.value;var u=n(t),h=String(this),p="function"===typeof e;p||(e=String(e));var m=u.global;if(m){var v=u.unicode;u.lastIndex=0}var S=[];while(1){var y=c(u,h);if(null===y)break;if(S.push(y),!m)break;var O=String(y[0]);""===O&&(u.lastIndex=r(h,i(u.lastIndex),v))}for(var w="",A=0,_=0;_<S.length;_++){y=S[_];for(var D=String(y[0]),C=l(d(o(y.index),h.length),0),j=[],k=1;k<y.length;k++)j.push(f(y[k]));var x=y.groups;if(p){var P=[D].concat(j,C,h);void 0!==x&&P.push(x);var T=String(e.apply(void 0,P))}else T=g(D,h,C,j,x,e);C>=A&&(w+=h.slice(A,C)+T,A=C+D.length)}return w+h.slice(A)}];function g(t,e,n,i,o,r){var c=n+t.length,l=i.length,d=p;return void 0!==o&&(o=a(o),d=h),s.call(r,d,(function(s,a){var r;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":r=o[a.slice(1,-1)];break;default:var d=+a;if(0===d)return s;if(d>l){var h=u(d/10);return 0===h?s:h<=l?void 0===i[h-1]?a.charAt(1):i[h-1]+a.charAt(1):s}r=i[d-1]}return void 0===r?"":r}))}}))},bb51:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoadingDashboards?s("div",[t._v("\n    正在获取主页数据...\n  ")]):s("div",[t.home.studentDashboard?s("div",[s("h2",[t._v(t._s(t.currentUser.name)+"的闻思修")]),s("hr"),s("StudentDashboard",{attrs:{dashboard:t.home.studentDashboard}})],1):t._e(),t.home.classAdminDashboard?s("div",[s("h2",[t._v(t._s(t.currentUser.name)+"辅导的课程")]),s("hr"),s("AdminDashboard",{attrs:{dashboard:t.home.classAdminDashboard}})],1):t._e(),t.home.systemAdminDashboard?s("div",[s("h2",[t._v("学会全部课程")]),s("hr"),s("AdminDashboard",{attrs:{dashboard:t.home.systemAdminDashboard}})],1):t._e()])])},a=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("f559"),s("bd86")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-preview"},[0===t.dashboard.enrolledClasses.length?s("div",{staticClass:"user-preview"},[t._v("\n    您还没有参加任何佛学课程！\n  ")]):t._l(t.dashboard.enrolledClasses,(function(t,e){return s("Class",{key:t.id+e,attrs:{buddhaClass:t}})})),t.dashboard.newClasses.length?s("h2",[t._v("学会最新课程")]):t._e(),t._l(t.dashboard.newClasses,(function(t,e){return s("Class",{key:t.id+e,attrs:{buddhaClass:t,forApplication:!0}})}))],2)},r=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{domProps:{textContent:t._s(t.buddhaClass.name)}}),s("h4",[s("center",[s("ul",{staticStyle:{"list-style-type":"none"}},[s("li",[t._v("辅导员："+t._s(t.teachers)+" 师兄")]),t.buddhaClass.snapshotObj?s("li",[t._v("\n          学生人数："+t._s(t.buddhaClass.snapshotObj.studentCount)+"\n        ")]):t._e(),s("li",[t._v("\n          学习资料：\n          "),s("a",{attrs:{href:t.buddhaClass.url,target:"_blank"}},[t._v("网页链接")])])])])],1),t.forApplication?s("div",[s("b-button",{attrs:{block:"",variant:"info"},on:{click:t.listSession}},[t._v("查看详情")]),s("hr")],1):s("div",[0===t.buddhaClass.classSessions.length?s("div",[t._v("\n      还没有开课，敬请期待！\n    ")]):s("div",[s("h4",[t._v("正在闻思")]),t._l(t.buddhaClass.classSessions,(function(e,n){return s("ClassSession",{key:e.id+n,attrs:{classSession:e,attendance:t.buddhaClass.attendances[n],forApplication:t.forApplication}})})),s("b-button",{attrs:{block:"",variant:"info"},on:{click:t.listSession}},[t._v("查看上课记录")]),s("hr"),t.buddhaClass.practices.length>0?s("h4",[t._v("正在实修")]):t._e(),t._l(t.buddhaClass.practices,(function(e,n){return s("Practice",{key:e.id+n,attrs:{practice:e,latestPracticeCount:t.buddhaClass.counts[n]}})}))],2)])])},l=[],d=s("2c634"),u=s("569a"),h={name:"Class",components:{ClassSession:d["a"],Practice:u["a"]},props:{buddhaClass:{type:Object,required:!0},forApplication:Boolean},data:function(){return{teachers:this.buddhaClass.teachers.join()}},methods:{listSession:function(){this.$router.push({name:"session-management",params:{classId:this.buddhaClass.id,forApplication:this.forApplication}})}}},p=h,f=s("2877"),b=Object(f["a"])(p,c,l,!1,null,null,null),g=b.exports,m={name:"StudentDashboard",props:{dashboard:{type:Object,required:!0}},components:{Class:g}},v=m,S=Object(f["a"])(v,o,r,!1,null,null,null),y=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-preview"},[0===t.dashboard.classes.length?s("div",{staticClass:"user-preview"},[t._v("\n    没有找到任何佛学课程！\n  ")]):t._l(t.dashboard.classes,(function(t,e){return s("Class",{key:t.id+e,attrs:{buddhaClass:t}})}))],2)},w=[],A={name:"AdminDashboard",props:{dashboard:{type:Object,required:!0}},components:{Class:g}},_=A,D=Object(f["a"])(_,O,w,!1,null,null,null),C=D.exports,j=s("2f62"),k=s("6c33"),x=s("4360");function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var $={name:"Home",components:{StudentDashboard:y,AdminDashboard:C},computed:T({},Object(j["b"])(["home","currentUser","isLoadingDashboards","isSystemAdmin"])),beforeRouteEnter:function(t,e,s){console.log("from: ".concat(e.path)),e&&e.path&&e.path.startsWith("/home")?s():x["a"].dispatch(k["c"]).then((function(){s()}))}},q=$,I=Object(f["a"])(q,n,a,!1,null,null,null);e["default"]=I.exports},f559:function(t,e,s){"use strict";var n=s("5ca1"),a=s("9def"),i=s("d2c8"),o="startsWith",r=""[o];n(n.P+n.F*s("5147")(o),"String",{startsWith:function(t){var e=i(this,t,o),s=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return r?r.call(e,n,s):e.slice(s,s+n.length)===n}})}}]);
//# sourceMappingURL=chunk-828b241c.d36d1203.js.map