(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"settings-page"},[t("div",{staticClass:"container page"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[e.user.id?t("h1",{staticClass:"text-xs-center"},[e._v("用户信息")]):t("h1",{staticClass:"text-xs-center"},[e._v("创建用户")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.updateUser()}}},[t("fieldset",[t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("用户名")]),e.user.id?t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"用户名",readonly:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.user.name},on:{input:function(s){s.target.composing||e.$set(e.user,"name",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("电邮地址")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"电邮地址",readonly:""},domProps:{value:e.user.email},on:{input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("电话号码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control form-control-lg",attrs:{type:"phone",placeholder:"电话号码"},domProps:{value:e.user.phone},on:{input:function(s){s.target.composing||e.$set(e.user,"phone",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"密码",autocomplete:"new-password"},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("确认密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"确认密码",autocomplete:"new-password"},domProps:{value:e.user.confirmPassword},on:{input:function(s){s.target.composing||e.$set(e.user,"confirmPassword",s.target.value)}}})]),t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("用户角色")]),t("div",{staticClass:"form-control"},[t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isSystemAdmin,expression:"user.isSystemAdmin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isSystemAdmin"},domProps:{checked:Array.isArray(e.user.isSystemAdmin)?e._i(e.user.isSystemAdmin,null)>-1:e.user.isSystemAdmin},on:{change:function(s){var t=e.user.isSystemAdmin,r=s.target,a=!!r.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);r.checked?n<0&&e.$set(e.user,"isSystemAdmin",t.concat([i])):n>-1&&e.$set(e.user,"isSystemAdmin",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"isSystemAdmin",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"isSystemAdmin"}},[e._v(" 系统管理员")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isClassAdmin,expression:"user.isClassAdmin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isClassAdmin"},domProps:{checked:Array.isArray(e.user.isClassAdmin)?e._i(e.user.isClassAdmin,null)>-1:e.user.isClassAdmin},on:{change:function(s){var t=e.user.isClassAdmin,r=s.target,a=!!r.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);r.checked?n<0&&e.$set(e.user,"isClassAdmin",t.concat([i])):n>-1&&e.$set(e.user,"isClassAdmin",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"isClassAdmin",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"isClassAdmin"}},[e._v(" 学修管理员")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isTeachingAssistant,expression:"user.isTeachingAssistant"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isTeachingAssistant"},domProps:{checked:Array.isArray(e.user.isTeachingAssistant)?e._i(e.user.isTeachingAssistant,null)>-1:e.user.isTeachingAssistant},on:{change:function(s){var t=e.user.isTeachingAssistant,r=s.target,a=!!r.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);r.checked?n<0&&e.$set(e.user,"isTeachingAssistant",t.concat([i])):n>-1&&e.$set(e.user,"isTeachingAssistant",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"isTeachingAssistant",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"isTeachingAssistant"}},[e._v(" 学修助理")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isStudent,expression:"user.isStudent"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isStudent"},domProps:{checked:Array.isArray(e.user.isStudent)?e._i(e.user.isStudent,null)>-1:e.user.isStudent},on:{change:function(s){var t=e.user.isStudent,r=s.target,a=!!r.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);r.checked?n<0&&e.$set(e.user,"isStudent",t.concat([i])):n>-1&&e.$set(e.user,"isStudent",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"isStudent",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"isStudent"}},[e._v(" 学员")])])])]),e.user.id?t("fieldset",{staticClass:"form-group"},[t("label",{staticStyle:{"font-size":"22px"}},[e._v("用户状态")]),t("div",{staticClass:"form-control"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.state,expression:"user.state"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.$set(e.user,"state",s.target.multiple?t:t[0])}}},e._l(e.userStates,(function(s){return t("option",{key:s.key,domProps:{value:s.key}},[e._v("\n                    "+e._s(s.value)+"\n                  ")])})),0)])]):e._e(),t("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e.user.id?t("span",[e._v(" 更新用户信息")]):t("span",[e._v(" 创建新用户")])]),t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home-user-management",skip:"true"}}},[e._v("返回")])],1)])])])])])},a=[],i=(t("8e6e"),t("ac6a"),t("456d"),t("bd86")),n=t("2f62"),o=t("6c33"),l=t("4360");function c(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?c(Object(t),!0).forEach((function(s){Object(i["a"])(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var m={name:"RwvUser",data:function(){return{userStates:[{value:"正常",key:void 0},{value:"密码需更改",key:"needToChangePassword"},{value:"被屏蔽",key:"blocked"}]}},props:{slug:{type:String,required:!1}},beforeRouteEnter:function(e,s,t){l["a"].dispatch(o["a"],e.params.slug).then((function(){t()}))},computed:u({},Object(n["b"])(["user"])),methods:{updateUser:function(){var e=this;this.$store.dispatch(o["z"],this.user).then((function(){e.$router.push({name:"home-user-management"})}))}}},d=m,p=t("2877"),f=Object(p["a"])(d,r,a,!1,null,null,null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.5d2d9b02.js.map