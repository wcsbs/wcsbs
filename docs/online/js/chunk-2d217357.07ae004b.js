(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("我的个人信息")]),r("form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.updateSettings()}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("label",{staticStyle:{"font-size":"22px"}},[t._v("姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.name,expression:"currentUser.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"姓名",id:"name"},domProps:{value:t.currentUser.name},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"name",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{staticStyle:{"font-size":"22px"}},[t._v("电话号码")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.phone,expression:"currentUser.phone"}],staticClass:"form-control form-control-lg",attrs:{type:"phone",placeholder:"电话号码"},domProps:{value:t.currentUser.phone},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"phone",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{staticStyle:{"font-size":"22px"}},[t._v("密码")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"密码",autocomplete:"new-password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{staticStyle:{"font-size":"22px"}},[t._v("确认密码")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.confirmPassword,expression:"currentUser.confirmPassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"确认密码",autocomplete:"new-password"},domProps:{value:t.currentUser.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"confirmPassword",e.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n              更新个人信息\n            ")]),"needToChangePassword"==t.currentUser.state?r("span",{staticStyle:{"font-size":"22px"}},[r("strong",[t._v("\n                请马上修改密码！\n              ")])]):r("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("返回主页")])],1)]),r("hr"),r("button",{staticClass:"btn btn-outline-danger pull-xs-right",on:{click:t.logout}},[t._v("\n          退出登录\n        ")])])])])])},n=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=r("2f62"),c=r("6c33");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"RwvSettings",computed:l({},Object(a["b"])(["currentUser"])),mounted:function(){this.currentUser.password=null,this.currentUser.confirmPassword=null},methods:{updateSettings:function(){var t=this;this.$store.dispatch(c["i"],this.currentUser).then((function(){t.$router.push({name:"home"})}))},logout:function(){var t=this;this.$store.dispatch(c["f"]).then((function(){t.$router.push({name:"home"})}))}}},p=u,m=r("2877"),d=Object(m["a"])(p,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d217357.07ae004b.js.map