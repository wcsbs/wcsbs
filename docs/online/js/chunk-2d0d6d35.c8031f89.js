(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("新用户注册")]),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"login"}}},[e._v("\n            已有用户账号?\n          ")])],1),e.errors?r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,o){return r("li",{key:o},[e._v(e._s(o)+" "+e._s(e._f("error")(t)))])})),0):e._e(),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"电邮地址"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control form-control-lg",attrs:{type:"phone",placeholder:"电话号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            注册\n          ")])])])])])])},s=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),a=r("2f62"),i=r("6c33");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"RwvRegister",data:function(){return{name:"",email:"",password:"",phone:""}},computed:c({},Object(a["c"])({errors:function(e){return e.auth.errors}})),methods:{onSubmit:function(){var e=this;this.$store.dispatch(i["w"],{email:this.email,password:this.password,name:this.name,phone:this.phone}).then((function(){return e.$router.push({name:"home"})}))}}},u=p,m=r("2877"),d=Object(m["a"])(u,o,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.c8031f89.js.map