((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextReader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fileName: undefined
    };
  },
  methods: {
    loadCSVFieldsFromFile: function loadCSVFieldsFromFile(ev) {
      var _this = this;

      var file = ev.target.files[0];
      this.fileName = file.name;
      var reader = new FileReader();

      reader.onload = function (e) {
        var lines = e.target.result.split(/\r?\n/);
        var fields = lines[0].split(",");

        _this.$emit("load", fields);
      };

      reader.readAsText(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdminFunctions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextReader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TextReader */ "./src/components/TextReader.vue");
/* harmony import */ var vue_csv_import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-csv-import */ "./node_modules/vue-csv-import/dist/VueCsvImport.common.js");
/* harmony import */ var vue_csv_import__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_csv_import__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_importdata_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/importdata.module */ "./src/store/importdata.module.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






vue__WEBPACK_IMPORTED_MODULE_5__["default"].component("JsonExcel", vue_json_excel__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminDashboard",
  components: {
    TextReader: _components_TextReader__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueCsvImport: vue_csv_import__WEBPACK_IMPORTED_MODULE_3__["VueCsvImport"],
    JsonExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      name: "",
      params: "",
      result: "",
      parseCsv: undefined,
      fields: undefined,
      buttonNames: ["导入一组心咒", "导入一组共修", "导入二组心咒", "导入二组共修"],
      selectedIndex: undefined
    };
  },
  methods: {
    importData: function importData(index) {
      this.selectedIndex = index;
      console.log("importData - index: ".concat(index));
      this.parseCsv = _store_importdata_module__WEBPACK_IMPORTED_MODULE_6__["default"].parseCsvList[index]; // console.log(`importData - parseCsv: ${JSON.stringify(this.parseCsv)}`);

      console.log("importData - #records: ".concat(this.parseCsv.length));
      this.params = _store_importdata_module__WEBPACK_IMPORTED_MODULE_6__["default"].paramsList[index % 2];
    },
    onReset: function onReset(evt) {
      evt.preventDefault();
      window.location.reload();
    },
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      var options = {
        okText: "Confirm",
        cancelText: "Cancel",
        loader: true // default: false - when set to true, the proceed button shows a loader when clicked; and a dialog object will be passed to the then() callback

      };
      var params = JSON.parse(this.params);

      if (!this.name || this.name.length == 0) {
        this.name = params.functionName;
      }

      var message = {
        title: "Run Admin Function",
        body: "Confirm to run function ".concat(this.name, "\uFF1F")
      };
      params.csv = this.parseCsv;
      this.text = JSON.stringify(params);
      var thisComponent = this;
      this.$dialog.confirm(message, options).then(function (dialog) {
        parse__WEBPACK_IMPORTED_MODULE_1___default.a.Cloud.run(thisComponent.name, params).then(function (result) {
          thisComponent.result = JSON.stringify(result, null, 4);
          dialog.close();
        }).catch(function (e) {
          thisComponent.result = JSON.stringify(e, null, 4);
          dialog.close();
        });
      }).catch(function (e) {
        console.log("error: ".concat(e));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7e0fe40c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=template&id=9c5cb300&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e0fe40c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextReader.vue?vue&type=template&id=9c5cb300& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("label", { staticClass: "text-reader" }, [
      _vm._v("\n    Read CSV File\n    "),
      _c("input", {
        attrs: { type: "file" },
        on: { change: _vm.loadCSVFieldsFromFile }
      })
    ]),
    _vm._v("\n  " + _vm._s(_vm.fileName) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7e0fe40c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e0fe40c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdminFunctions.vue?vue&type=template&id=edc85074& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
        [
          _c("h4", [_vm._v("Run Admin Functions")]),
          _c("TextReader", {
            on: {
              load: function($event) {
                _vm.fields = $event
              }
            }
          }),
          _c("b-form-textarea", {
            attrs: {
              value: JSON.stringify(_vm.fields, null, 4),
              placeholder: "CSV fields will appear here",
              rows: "2",
              "max-rows": "10",
              readonly: ""
            }
          }),
          _vm.fields
            ? _c("VueCsvImport", {
                attrs: { "map-fields": _vm.fields, autoMatchFields: true },
                model: {
                  value: _vm.parseCsv,
                  callback: function($$v) {
                    _vm.parseCsv = $$v
                  },
                  expression: "parseCsv"
                }
              })
            : _vm._e(),
          _vm.fields
            ? _c("b-form-textarea", {
                attrs: {
                  value: JSON.stringify(_vm.parseCsv, null, 4),
                  placeholder:
                    "JSON converted from CSV file content will appear here",
                  rows: "8",
                  "max-rows": "20",
                  readonly: ""
                }
              })
            : _vm._e(),
          _c("b-form-textarea", {
            attrs: {
              placeholder: "Enter parameters",
              rows: "8",
              "max-rows": "20"
            },
            model: {
              value: _vm.params,
              callback: function($$v) {
                _vm.params = $$v
              },
              expression: "params"
            }
          }),
          _c(
            "b-input-group",
            { staticClass: "mt-3", attrs: { prepend: "Name：" } },
            [
              _c("b-form-input", {
                attrs: { placeholder: "Enter function name", trim: "" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _c(
                "b-input-group-append",
                [
                  _c(
                    "b-button",
                    { attrs: { type: "reset", variant: "warning" } },
                    [_c("b-icon", { attrs: { icon: "x-circle" } })],
                    1
                  ),
                  _c(
                    "b-button",
                    { attrs: { type: "submit", variant: "success" } },
                    [_c("b-icon", { attrs: { icon: "check-circle" } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._l(_vm.buttonNames, function(buttonName, index) {
        return _c(
          "div",
          { key: buttonName + index },
          [
            _c(
              "b-button",
              {
                attrs: {
                  block: "",
                  variant: _vm.selectedIndex == index ? "warning" : "info"
                },
                on: {
                  click: function($event) {
                    return _vm.importData(index)
                  }
                }
              },
              [_vm._v(_vm._s(buttonName))]
            ),
            _c("hr")
          ],
          1
        )
      }),
      _c(
        "JsonExcel",
        {
          staticClass: "btn btn-info btn-block",
          attrs: {
            data: _vm.parseCsv,
            worksheet: "My Worksheet",
            name: "filename.xls"
          }
        },
        [_vm._v("\n    下载报表\n  ")]
      ),
      _c("hr"),
      _c("div", { staticClass: "multiline" }, [
        _vm._v("Result: " + _vm._s(_vm.result))
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextReader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-reader {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n\n  /* Fancy button looking */\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.text-reader input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.multiline {\n  white-space: pre-wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextReader.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("51f737e0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fc75ca1c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/TextReader.vue":
/*!***************************************!*\
  !*** ./src/components/TextReader.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextReader.vue?vue&type=template&id=9c5cb300& */ "./src/components/TextReader.vue?vue&type=template&id=9c5cb300&");
/* harmony import */ var _TextReader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextReader.vue?vue&type=script&lang=js& */ "./src/components/TextReader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextReader.vue?vue&type=style&index=0&lang=css& */ "./src/components/TextReader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextReader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9c5cb300')) {
      api.createRecord('9c5cb300', component.options)
    } else {
      api.reload('9c5cb300', component.options)
    }
    module.hot.accept(/*! ./TextReader.vue?vue&type=template&id=9c5cb300& */ "./src/components/TextReader.vue?vue&type=template&id=9c5cb300&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextReader.vue?vue&type=template&id=9c5cb300& */ "./src/components/TextReader.vue?vue&type=template&id=9c5cb300&");
(function () {
      api.rerender('9c5cb300', {
        render: _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/TextReader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TextReader.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/TextReader.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TextReader.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./src/components/TextReader.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/TextReader.vue?vue&type=template&id=9c5cb300&":
/*!**********************************************************************!*\
  !*** ./src/components/TextReader.vue?vue&type=template&id=9c5cb300& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e0fe40c-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextReader.vue?vue&type=template&id=9c5cb300& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7e0fe40c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TextReader.vue?vue&type=template&id=9c5cb300&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextReader_vue_vue_type_template_id_9c5cb300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/store/importdata.module.js":
/*!****************************************!*\
  !*** ./src/store/importdata.module.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var gongXiu1 = [{
  组别: "1",
  组员: "组长黄东浩",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "38"
}, {
  组别: "1",
  组员: "乔金平",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "0",
  "27-Jun": "0",
  "JUN2020 TOTAL": "2",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "0",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "0",
  "OCT2020 TOTAL": "3",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "0",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "33"
}, {
  组别: "1",
  组员: "蔡红波",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "1",
  FEB2020TOTAL: "1",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "0",
  "MAR2020 TOTAL": "3",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "0",
  "27-Jun": "0",
  "JUN2020 TOTAL": "2",
  "4-Jul": "0",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "3",
  "1-Aug": "0",
  "8-Aug": "0",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "2",
  "5-Sep": "0",
  "12-Sep": "1",
  "19-Sep": "0",
  "26-Sep": "1",
  "SEP2020 TOTAL": "2",
  "3-Oct": "0",
  "10-Oct": "0",
  "17-Oct": "0",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "2",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "24"
}, {
  组别: "1",
  组员: "周琳琳",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "0",
  "JUN2020 TOTAL": "3",
  "4-Jul": "0",
  "11-Jul": "0",
  "18-Jul": "0",
  "25-Jul": "1",
  "JUL2020 TOTAL": "1",
  "1-Aug": "0",
  "8-Aug": "0",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "2",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "0",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "31"
}, {
  组别: "1",
  组员: "曾倩妮",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "0",
  "14-Mar": "0",
  "21-Mar": "1",
  "28-Mar": "0",
  "MAR2020 TOTAL": "1",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "0",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "3",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "0",
  "8-Aug": "1",
  "15-Aug": "0",
  "22-Aug": "0",
  "29-Aug": "",
  "AUG2020 TOTAL": "1",
  "5-Sep": "0",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "3",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "30"
}, {
  组别: "1",
  组员: "李明芳",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "0",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "3",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "0",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "0",
  "JUL2020 TOTAL": "2",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "0",
  "SEP2020 TOTAL": "3",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "34"
}, {
  组别: "1",
  组员: "罗良玉",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "0",
  "MAR2020 TOTAL": "3",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "0",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "36"
}, {
  组别: "1",
  组员: "圆硕",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "",
  FEB2020TOTAL: "",
  "7-Mar": "",
  "14-Mar": "",
  "21-Mar": "",
  "28-Mar": "",
  "MAR2020 TOTAL": "",
  "4-Apr": "",
  "11-Apr": "",
  "18-Apr": "",
  "25-Apr": "",
  "APR2020 TOTAL": "",
  "2-May": "",
  "9-May": "",
  "16-May": "",
  "23-May": "",
  "30-May": "",
  "MAY2020 TOTAL": "",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "0",
  "25-Jul": "1",
  "JUL2020 TOTAL": "3",
  "1-Aug": "1",
  "8-Aug": "0",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "3",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "0",
  "10-Oct": "0",
  "17-Oct": "1",
  "24-Oct": "0",
  "31-Oct": "1",
  "OCT2020 TOTAL": "2",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "0",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "16"
}, {
  组别: "1",
  组员: "谭美君",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "",
  FEB2020TOTAL: "",
  "7-Mar": "",
  "14-Mar": "",
  "21-Mar": "",
  "28-Mar": "",
  "MAR2020 TOTAL": "",
  "4-Apr": "",
  "11-Apr": "",
  "18-Apr": "",
  "25-Apr": "",
  "APR2020 TOTAL": "",
  "2-May": "",
  "9-May": "",
  "16-May": "",
  "23-May": "",
  "30-May": "",
  "MAY2020 TOTAL": "",
  "6-Jun": "",
  "13-Jun": "",
  "20-Jun": "",
  "27-Jun": "",
  "JUN2020 TOTAL": "0",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "0",
  "JUL2020 TOTAL": "3",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "0",
  "26-Sep": "1",
  "SEP2020 TOTAL": "3",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "0",
  "31-Oct": "1",
  "OCT2020 TOTAL": "4",
  "7-Nov": "0",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "0",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "14"
}, {
  组别: "",
  组员: "",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "",
  FEB2020TOTAL: "",
  "7-Mar": "",
  "14-Mar": "",
  "21-Mar": "",
  "28-Mar": "",
  "MAR2020 TOTAL": "",
  "4-Apr": "",
  "11-Apr": "",
  "18-Apr": "",
  "25-Apr": "",
  "APR2020 TOTAL": "",
  "2-May": "",
  "9-May": "",
  "16-May": "",
  "23-May": "",
  "30-May": "",
  "MAY2020 TOTAL": "",
  "6-Jun": "",
  "13-Jun": "",
  "20-Jun": "",
  "27-Jun": "",
  "JUN2020 TOTAL": "",
  "4-Jul": "",
  "11-Jul": "",
  "18-Jul": "",
  "25-Jul": "",
  "JUL2020 TOTAL": "",
  "1-Aug": "",
  "8-Aug": "",
  "15-Aug": "",
  "22-Aug": "",
  "29-Aug": "",
  "AUG2020 TOTAL": "",
  "5-Sep": "",
  "12-Sep": "",
  "19-Sep": "",
  "26-Sep": "",
  "SEP2020 TOTAL": "",
  "3-Oct": "",
  "10-Oct": "",
  "17-Oct": "",
  "24-Oct": "",
  "31-Oct": "",
  "OCT2020 TOTAL": "",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "",
  "2020 TOTAL": ""
}];
var gongXiu2 = [{
  组别: "2",
  组员: "组长廖佩君",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "38"
}, {
  组别: "2",
  组员: "龚清山",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "38"
}, {
  组别: "2",
  组员: "辜宝瑶",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "0.5",
  "30-May": "",
  "MAY2020 TOTAL": "3.5",
  "6-Jun": "0.5",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "3.5",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "0.5",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "3.5",
  "5-Sep": "0.5",
  "12-Sep": "1",
  "19-Sep": "0",
  "26-Sep": "1",
  "SEP2020 TOTAL": "2.5",
  "3-Oct": "1",
  "10-Oct": "0.5",
  "17-Oct": "1",
  "24-Oct": "0",
  "31-Oct": "1",
  "OCT2020 TOTAL": "3.5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "33.5"
}, {
  组别: "2",
  组员: "星伊",
  "8-Feb": "0",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "3",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "0",
  "28-Mar": "1",
  "MAR2020 TOTAL": "3",
  "4-Apr": "0",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "3",
  "2-May": "1",
  "9-May": "0",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "3",
  "6-Jun": "1",
  "13-Jun": "0",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "3",
  "4-Jul": "0.5",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "0",
  "JUL2020 TOTAL": "2.5",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "0",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "3",
  "5-Sep": "1",
  "12-Sep": "0.5",
  "19-Sep": "1",
  "26-Sep": "0",
  "SEP2020 TOTAL": "2.5",
  "3-Oct": "1",
  "10-Oct": "0",
  "17-Oct": "1",
  "24-Oct": "0",
  "31-Oct": "1",
  "OCT2020 TOTAL": "3",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "27"
}, {
  组别: "2",
  组员: "钟惠勤",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "0",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "3",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "37"
}, {
  组别: "2",
  组员: "黄薇颖",
  "8-Feb": "0",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "3",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "37"
}, {
  组别: "2",
  组员: "许乃文",
  "8-Feb": "0",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "3",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "0",
  "MAR2020 TOTAL": "3",
  "4-Apr": "0",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "3",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "0.5",
  "30-May": "",
  "MAY2020 TOTAL": "3.5",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "0",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "3",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "0",
  "SEP2020 TOTAL": "3",
  "3-Oct": "0",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "4",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "31.5"
}, {
  组别: "2",
  组员: "许艺瀚",
  "8-Feb": "1",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "4",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "38"
}, {
  组别: "2",
  组员: "韩亚璇",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "",
  FEB2020TOTAL: "0",
  "7-Mar": "0",
  "14-Mar": "0",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "2",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "0",
  "30-May": "",
  "MAY2020 TOTAL": "3",
  "6-Jun": "1",
  "13-Jun": "0.5",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "3.5",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "0",
  "JUL2020 TOTAL": "3",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "0",
  "26-Sep": "1",
  "SEP2020 TOTAL": "3",
  "3-Oct": "1",
  "10-Oct": "0",
  "17-Oct": "0",
  "24-Oct": "0",
  "31-Oct": "1",
  "OCT2020 TOTAL": "2",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "25.5"
}, {
  组别: "2",
  组员: "李淑勤",
  "8-Feb": "0",
  "15-Feb": "1",
  "22-Feb": "1",
  "29-Feb": "1",
  FEB2020TOTAL: "3",
  "7-Mar": "1",
  "14-Mar": "1",
  "21-Mar": "1",
  "28-Mar": "1",
  "MAR2020 TOTAL": "4",
  "4-Apr": "1",
  "11-Apr": "1",
  "18-Apr": "1",
  "25-Apr": "1",
  "APR2020 TOTAL": "4",
  "2-May": "1",
  "9-May": "1",
  "16-May": "1",
  "23-May": "1",
  "30-May": "",
  "MAY2020 TOTAL": "4",
  "6-Jun": "1",
  "13-Jun": "1",
  "20-Jun": "1",
  "27-Jun": "1",
  "JUN2020 TOTAL": "4",
  "4-Jul": "1",
  "11-Jul": "1",
  "18-Jul": "1",
  "25-Jul": "1",
  "JUL2020 TOTAL": "4",
  "1-Aug": "1",
  "8-Aug": "1",
  "15-Aug": "1",
  "22-Aug": "1",
  "29-Aug": "",
  "AUG2020 TOTAL": "4",
  "5-Sep": "1",
  "12-Sep": "1",
  "19-Sep": "1",
  "26-Sep": "1",
  "SEP2020 TOTAL": "4",
  "3-Oct": "1",
  "10-Oct": "1",
  "17-Oct": "1",
  "24-Oct": "1",
  "31-Oct": "1",
  "OCT2020 TOTAL": "5",
  "7-Nov": "1",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "1",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "37"
}, {
  组别: "",
  组员: "",
  "8-Feb": "",
  "15-Feb": "",
  "22-Feb": "",
  "29-Feb": "",
  FEB2020TOTAL: "",
  "7-Mar": "",
  "14-Mar": "",
  "21-Mar": "",
  "28-Mar": "",
  "MAR2020 TOTAL": "",
  "4-Apr": "",
  "11-Apr": "",
  "18-Apr": "",
  "25-Apr": "",
  "APR2020 TOTAL": "",
  "2-May": "",
  "9-May": "",
  "16-May": "",
  "23-May": "",
  "30-May": "",
  "MAY2020 TOTAL": "",
  "6-Jun": "",
  "13-Jun": "",
  "20-Jun": "",
  "27-Jun": "",
  "JUN2020 TOTAL": "",
  "4-Jul": "",
  "11-Jul": "",
  "18-Jul": "",
  "25-Jul": "",
  "JUL2020 TOTAL": "",
  "1-Aug": "",
  "8-Aug": "",
  "15-Aug": "",
  "22-Aug": "",
  "29-Aug": "",
  "AUG2020 TOTAL": "",
  "5-Sep": "",
  "12-Sep": "",
  "19-Sep": "",
  "26-Sep": "",
  "SEP2020 TOTAL": "",
  "3-Oct": "",
  "10-Oct": "",
  "17-Oct": "",
  "24-Oct": "",
  "31-Oct": "",
  "OCT2020 TOTAL": "",
  "7-Nov": "",
  "14-Nov": "",
  "21-Nov": "",
  "28-Nov": "",
  "NOV2020 TOTAL": "",
  "5-Dec": "",
  "12-Dec": "",
  "19-Dec": "",
  "26-Dec": "",
  "DEC2020 TOTAL": "",
  "2020 TOTAL": ""
}];
var xinZhou1 = [{
  组别: "1",
  组员: "组长黄东浩",
  "24FEB-01MAR": "424",
  FEB2020TOTAL: "424",
  "2-8MAR": "3,354",
  "9-15MAR": "4,626",
  "16-22MAR": "889",
  "23-29MAR": "8,402",
  "MAR2020 TOTAL": "17,271",
  "30MAR-5APR": "7,317",
  "6-12APR": "10,131",
  "13-19APR": "8,617",
  "20-26APR": "735",
  "APR2020 TOTAL": "26,800",
  "27APR-3MAY": "725",
  "4-10MAY": "0",
  "11-17MAY": "1,080",
  "18-24MAY": "177",
  "25-31MAY": "3,322",
  "MAY2020 TOTAL": "5,304",
  "1-7JUN": "2,344",
  "8-14JUN": "907",
  "15-21JUN": "2,010",
  "22-28JUN": "2,900",
  "JUN2020 TOTAL": "8,161",
  "29JUN-5JUL": "3,552",
  "6-12JUL": "2,080",
  "13-19JUL": "3,824",
  "20-26JUL": "3,900",
  "JUL2020 TOTAL": "13,356",
  "27JUL-2AUG": "4,200",
  "3-9AUG": "2,628",
  "10-16AUG": "2,490",
  "17-23AUG": "1,342",
  "24-30AUG": "1,816",
  "AUG2020 TOTAL": "12,476",
  "31AUG-6SEP": "636",
  "7-13SEP": "1,537",
  "14-20SEP": "1,380",
  "21-27SEP": "2,085",
  "SEP2020 TOTAL": "5,638",
  "28SEP-4OCT": "3,500",
  "5-11OCT": "3,200",
  "12-18OCT": "2,700",
  "19-25OCT": "1,230",
  "26OCT-1NOV": "3,200",
  "OCT2020 TOTAL": "13,830",
  "2-8NOV": "3,700",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "3,700",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "106,960"
}, {
  组别: "1",
  组员: "乔金平",
  "24FEB-01MAR": "29,517",
  FEB2020TOTAL: "29,517",
  "2-8MAR": "40,284",
  "9-15MAR": "37,260",
  "16-22MAR": "36,720",
  "23-29MAR": "23,312",
  "MAR2020 TOTAL": "137,576",
  "30MAR-5APR": "21,160",
  "6-12APR": "19,550",
  "13-19APR": "10,800",
  "20-26APR": "9,612",
  "APR2020 TOTAL": "61,122",
  "27APR-3MAY": "7,128",
  "4-10MAY": "5,757",
  "11-17MAY": "8,600",
  "18-24MAY": "7,872",
  "25-31MAY": "750",
  "MAY2020 TOTAL": "30,107",
  "1-7JUN": "1,650",
  "8-14JUN": "4,770",
  "15-21JUN": "600",
  "22-28JUN": "600",
  "JUN2020 TOTAL": "7,620",
  "29JUN-5JUL": "0",
  "6-12JUL": "0",
  "13-19JUL": "600",
  "20-26JUL": "0",
  "JUL2020 TOTAL": "600",
  "27JUL-2AUG": "0",
  "3-9AUG": "0",
  "10-16AUG": "0",
  "17-23AUG": "600",
  "24-30AUG": "600",
  "AUG2020 TOTAL": "1,200",
  "31AUG-6SEP": "756",
  "7-13SEP": "1,580",
  "14-20SEP": "3,566",
  "21-27SEP": "1,290",
  "SEP2020 TOTAL": "7,192",
  "28SEP-4OCT": "1,500",
  "5-11OCT": "2,000",
  "12-18OCT": "1,200",
  "19-25OCT": "2,400",
  "26OCT-1NOV": "2,470",
  "OCT2020 TOTAL": "9,570",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "0",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "284,504"
}, {
  组别: "1",
  组员: "蔡红波",
  "24FEB-01MAR": "1,200",
  FEB2020TOTAL: "1,200",
  "2-8MAR": "1,800",
  "9-15MAR": "3,500",
  "16-22MAR": "4,200",
  "23-29MAR": "2,800",
  "MAR2020 TOTAL": "12,300",
  "30MAR-5APR": "2,400",
  "6-12APR": "2,000",
  "13-19APR": "2,000",
  "20-26APR": "3,000",
  "APR2020 TOTAL": "9,400",
  "27APR-3MAY": "2,400",
  "4-10MAY": "240",
  "11-17MAY": "1,200",
  "18-24MAY": "1,000",
  "25-31MAY": "1,000",
  "MAY2020 TOTAL": "5,840",
  "1-7JUN": "800",
  "8-14JUN": "2,400",
  "15-21JUN": "3,000",
  "22-28JUN": "0",
  "JUN2020 TOTAL": "6,200",
  "29JUN-5JUL": "0",
  "6-12JUL": "300",
  "13-19JUL": "900",
  "20-26JUL": "900",
  "JUL2020 TOTAL": "2,100",
  "27JUL-2AUG": "900",
  "3-9AUG": "300",
  "10-16AUG": "300",
  "17-23AUG": "300",
  "24-30AUG": "300",
  "AUG2020 TOTAL": "2,100",
  "31AUG-6SEP": "300",
  "7-13SEP": "1,200",
  "14-20SEP": "1,000",
  "21-27SEP": "1,000",
  "SEP2020 TOTAL": "3,500",
  "28SEP-4OCT": "200",
  "5-11OCT": "0",
  "12-18OCT": "0",
  "19-25OCT": "900",
  "26OCT-1NOV": "1,200",
  "OCT2020 TOTAL": "2,300",
  "2-8NOV": "1,200",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "1,200",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "46,140"
}, {
  组别: "1",
  组员: "周琳琳",
  "24FEB-01MAR": "28,000",
  FEB2020TOTAL: "28,000",
  "2-8MAR": "16,000",
  "9-15MAR": "27,796",
  "16-22MAR": "29,927",
  "23-29MAR": "30,600",
  "MAR2020 TOTAL": "104,323",
  "30MAR-5APR": "31,580",
  "6-12APR": "18,340",
  "13-19APR": "18,950",
  "20-26APR": "11,926",
  "APR2020 TOTAL": "80,796",
  "27APR-3MAY": "12,532",
  "4-10MAY": "19,956",
  "11-17MAY": "19,756",
  "18-24MAY": "10,541",
  "25-31MAY": "18,680",
  "MAY2020 TOTAL": "81,465",
  "1-7JUN": "27,560",
  "8-14JUN": "15,251",
  "15-21JUN": "9,582",
  "22-28JUN": "15,421",
  "JUN2020 TOTAL": "67,814",
  "29JUN-5JUL": "6,290",
  "6-12JUL": "1,050",
  "13-19JUL": "6,823",
  "20-26JUL": "4,875",
  "JUL2020 TOTAL": "19,038",
  "27JUL-2AUG": "8,330",
  "3-9AUG": "1,718",
  "10-16AUG": "3,400",
  "17-23AUG": "3,968",
  "24-30AUG": "3,968",
  "AUG2020 TOTAL": "21,384",
  "31AUG-6SEP": "4,609",
  "7-13SEP": "1,616",
  "14-20SEP": "1,251",
  "21-27SEP": "2,008",
  "SEP2020 TOTAL": "9,484",
  "28SEP-4OCT": "1,600",
  "5-11OCT": "1,170",
  "12-18OCT": "1,300",
  "19-25OCT": "3,726",
  "26OCT-1NOV": "7,398",
  "OCT2020 TOTAL": "15,194",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "0",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "427,498"
}, {
  组别: "1",
  组员: "曾倩妮",
  "24FEB-01MAR": "4,320",
  FEB2020TOTAL: "4,320",
  "2-8MAR": "0",
  "9-15MAR": "0",
  "16-22MAR": "0",
  "23-29MAR": "0",
  "MAR2020 TOTAL": "0",
  "30MAR-5APR": "0",
  "6-12APR": "540",
  "13-19APR": "4,860",
  "20-26APR": "7,020",
  "APR2020 TOTAL": "12,420",
  "27APR-3MAY": "0",
  "4-10MAY": "4,536",
  "11-17MAY": "1,080",
  "18-24MAY": "0",
  "25-31MAY": "1,620",
  "MAY2020 TOTAL": "7,236",
  "1-7JUN": "0",
  "8-14JUN": "0",
  "15-21JUN": "1,080",
  "22-28JUN": "0",
  "JUN2020 TOTAL": "1,080",
  "29JUN-5JUL": "0",
  "6-12JUL": "0",
  "13-19JUL": "0",
  "20-26JUL": "1,836",
  "JUL2020 TOTAL": "1,836",
  "27JUL-2AUG": "2,160",
  "3-9AUG": "0",
  "10-16AUG": "0",
  "17-23AUG": "0",
  "24-30AUG": "0",
  "AUG2020 TOTAL": "2,160",
  "31AUG-6SEP": "1,080",
  "7-13SEP": "0",
  "14-20SEP": "1,080",
  "21-27SEP": "0",
  "SEP2020 TOTAL": "2,160",
  "28SEP-4OCT": "1,620",
  "5-11OCT": "0",
  "12-18OCT": "0",
  "19-25OCT": "0",
  "26OCT-1NOV": "0",
  "OCT2020 TOTAL": "1,620",
  "2-8NOV": "1,080",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "1,080",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "33,912"
}, {
  组别: "1",
  组员: "李明芳",
  "24FEB-01MAR": "17,871",
  FEB2020TOTAL: "17,871",
  "2-8MAR": "20,390",
  "9-15MAR": "19,509",
  "16-22MAR": "25,371",
  "23-29MAR": "25,193",
  "MAR2020 TOTAL": "90,463",
  "30MAR-5APR": "16,177",
  "6-12APR": "20,913",
  "13-19APR": "19,639",
  "20-26APR": "17,080",
  "APR2020 TOTAL": "73,809",
  "27APR-3MAY": "17,400",
  "4-10MAY": "27,076",
  "11-17MAY": "25,685",
  "18-24MAY": "34,132",
  "25-31MAY": "37,358",
  "MAY2020 TOTAL": "141,651",
  "1-7JUN": "31,777",
  "8-14JUN": "35,007",
  "15-21JUN": "31,615",
  "22-28JUN": "18,024",
  "JUN2020 TOTAL": "116,423",
  "29JUN-5JUL": "25,430",
  "6-12JUL": "14,057",
  "13-19JUL": "17,710",
  "20-26JUL": "0",
  "JUL2020 TOTAL": "57,197",
  "27JUL-2AUG": "18,263",
  "3-9AUG": "16,587",
  "10-16AUG": "15,887",
  "17-23AUG": "16,296",
  "24-30AUG": "22,395",
  "AUG2020 TOTAL": "89,428",
  "31AUG-6SEP": "16,529",
  "7-13SEP": "17,652",
  "14-20SEP": "22,474",
  "21-27SEP": "21,033",
  "SEP2020 TOTAL": "77,688",
  "28SEP-4OCT": "26,813",
  "5-11OCT": "25,438",
  "12-18OCT": "23,557",
  "19-25OCT": "23,710",
  "26OCT-1NOV": "23,616",
  "OCT2020 TOTAL": "123,134",
  "2-8NOV": "25,324",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "25,324",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "812,988"
}, {
  组别: "1",
  组员: "罗良玉",
  "24FEB-01MAR": "2,400",
  FEB2020TOTAL: "2,400",
  "2-8MAR": "4,100",
  "9-15MAR": "7,200",
  "16-22MAR": "7,200",
  "23-29MAR": "6,000",
  "MAR2020 TOTAL": "24,500",
  "30MAR-5APR": "6,000",
  "6-12APR": "1,200",
  "13-19APR": "1,200",
  "20-26APR": "1,000",
  "APR2020 TOTAL": "9,400",
  "27APR-3MAY": "4,000",
  "4-10MAY": "1,200",
  "11-17MAY": "200",
  "18-24MAY": "0",
  "25-31MAY": "0",
  "MAY2020 TOTAL": "5,400",
  "1-7JUN": "2,400",
  "8-14JUN": "2,500",
  "15-21JUN": "1,200",
  "22-28JUN": "2,400",
  "JUN2020 TOTAL": "8,500",
  "29JUN-5JUL": "2,400",
  "6-12JUL": "50",
  "13-19JUL": "800",
  "20-26JUL": "1,200",
  "JUL2020 TOTAL": "4,450",
  "27JUL-2AUG": "200",
  "3-9AUG": "108",
  "10-16AUG": "108",
  "17-23AUG": "0",
  "24-30AUG": "100",
  "AUG2020 TOTAL": "516",
  "31AUG-6SEP": "20",
  "7-13SEP": "20",
  "14-20SEP": "1,200",
  "21-27SEP": "120",
  "SEP2020 TOTAL": "1,360",
  "28SEP-4OCT": "100",
  "5-11OCT": "1,200",
  "12-18OCT": "1,200",
  "19-25OCT": "3,000",
  "26OCT-1NOV": "300",
  "OCT2020 TOTAL": "5,800",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "0",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "62,326"
}, {
  组别: "1",
  组员: "圆硕",
  "24FEB-01MAR": "",
  FEB2020TOTAL: "",
  "2-8MAR": "",
  "9-15MAR": "",
  "16-22MAR": "",
  "23-29MAR": "",
  "MAR2020 TOTAL": "",
  "30MAR-5APR": "",
  "6-12APR": "",
  "13-19APR": "",
  "20-26APR": "",
  "APR2020 TOTAL": "",
  "27APR-3MAY": "",
  "4-10MAY": "",
  "11-17MAY": "",
  "18-24MAY": "",
  "25-31MAY": "",
  "MAY2020 TOTAL": "",
  "1-7JUN": "8,500",
  "8-14JUN": "5,000",
  "15-21JUN": "0",
  "22-28JUN": "200",
  "JUN2020 TOTAL": "13,700",
  "29JUN-5JUL": "200",
  "6-12JUL": "3,000",
  "13-19JUL": "1,500",
  "20-26JUL": "500",
  "JUL2020 TOTAL": "5,200",
  "27JUL-2AUG": "100",
  "3-9AUG": "100",
  "10-16AUG": "108",
  "17-23AUG": "108",
  "24-30AUG": "108",
  "AUG2020 TOTAL": "524",
  "31AUG-6SEP": "108",
  "7-13SEP": "108",
  "14-20SEP": "5,000",
  "21-27SEP": "108",
  "SEP2020 TOTAL": "5,324",
  "28SEP-4OCT": "108",
  "5-11OCT": "200",
  "12-18OCT": "108",
  "19-25OCT": "108",
  "26OCT-1NOV": "108",
  "OCT2020 TOTAL": "632",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "0",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "25,380"
}, {
  组别: "1",
  组员: "谭美君",
  "24FEB-01MAR": "",
  FEB2020TOTAL: "",
  "2-8MAR": "",
  "9-15MAR": "",
  "16-22MAR": "",
  "23-29MAR": "",
  "MAR2020 TOTAL": "",
  "30MAR-5APR": "",
  "6-12APR": "",
  "13-19APR": "",
  "20-26APR": "",
  "APR2020 TOTAL": "",
  "27APR-3MAY": "",
  "4-10MAY": "",
  "11-17MAY": "",
  "18-24MAY": "",
  "25-31MAY": "",
  "MAY2020 TOTAL": "",
  "1-7JUN": "",
  "8-14JUN": "",
  "15-21JUN": "",
  "22-28JUN": "",
  "JUN2020 TOTAL": "0",
  "29JUN-5JUL": "200",
  "6-12JUL": "1,200",
  "13-19JUL": "1,890",
  "20-26JUL": "1,001",
  "JUL2020 TOTAL": "4,291",
  "27JUL-2AUG": "143",
  "3-9AUG": "154",
  "10-16AUG": "389",
  "17-23AUG": "509",
  "24-30AUG": "2,898",
  "AUG2020 TOTAL": "4,093",
  "31AUG-6SEP": "1,615",
  "7-13SEP": "600",
  "14-20SEP": "1,466",
  "21-27SEP": "1,500",
  "SEP2020 TOTAL": "5,181",
  "28SEP-4OCT": "1,147",
  "5-11OCT": "802",
  "12-18OCT": "1,000",
  "19-25OCT": "2,800",
  "26OCT-1NOV": "3,200",
  "OCT2020 TOTAL": "8,949",
  "2-8NOV": "3,308",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "3,308",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "25,822"
}, {
  组别: "",
  组员: "",
  "24FEB-01MAR": "",
  FEB2020TOTAL: "",
  "2-8MAR": "",
  "9-15MAR": "",
  "16-22MAR": "",
  "23-29MAR": "",
  "MAR2020 TOTAL": "",
  "30MAR-5APR": "",
  "6-12APR": "",
  "13-19APR": "",
  "20-26APR": "",
  "APR2020 TOTAL": "",
  "27APR-3MAY": "",
  "4-10MAY": "",
  "11-17MAY": "",
  "18-24MAY": "",
  "25-31MAY": "",
  "MAY2020 TOTAL": "",
  "1-7JUN": "",
  "8-14JUN": "",
  "15-21JUN": "",
  "22-28JUN": "",
  "JUN2020 TOTAL": "",
  "29JUN-5JUL": "",
  "6-12JUL": "",
  "13-19JUL": "",
  "20-26JUL": "",
  "JUL2020 TOTAL": "",
  "27JUL-2AUG": "",
  "3-9AUG": "",
  "10-16AUG": "",
  "17-23AUG": "",
  "24-30AUG": "",
  "AUG2020 TOTAL": "",
  "31AUG-6SEP": "",
  "7-13SEP": "",
  "14-20SEP": "",
  "21-27SEP": "",
  "SEP2020 TOTAL": "",
  "28SEP-4OCT": "",
  "5-11OCT": "",
  "12-18OCT": "",
  "19-25OCT": "",
  "26OCT-1NOV": "",
  "OCT2020 TOTAL": "",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "",
  "2020 TOTAL": ""
}];
var xinZhou2 = [{
  组别: "2",
  组员: "组长廖佩君",
  "24FEB-01MAR": "49,300",
  FEB2020TOTAL: "49,300",
  "2-8MAR": "52,000",
  "9-15MAR": "57,300",
  "16-22MAR": "61,770",
  "23-29MAR": "60,000",
  "MAR2020 TOTAL": "231,070",
  "30MAR-5APR": "62,090",
  "6-12APR": "66,400",
  "13-19APR": "66,660",
  "20-26APR": "68300",
  "APR2020 TOTAL": "263,450",
  "27APR-3MAY": "68,000",
  "4-10MAY": "68,380",
  "11-17MAY": "73,100",
  "18-24MAY": "75,200",
  "25-31MAY": "71,300",
  "MAY2020 TOTAL": "355,980",
  "1-7JUN": "71,000",
  "8-14JUN": "80,800",
  "15-21JUN": "73,000",
  "22-28JUN": "55,000",
  "JUN2020 TOTAL": "279,800",
  "29JUN-5JUL": "72,000",
  "6-12JUL": "50,000",
  "13-19JUL": "78,000",
  "20-26JUL": "58,000",
  "JUL2020 TOTAL": "258,000",
  "27JUL-2AUG": "50,000",
  "3-9AUG": "50,000",
  "10-16AUG": "50,000",
  "17-23AUG": "50,000",
  "24-30AUG": "58,000",
  "AUG2020 TOTAL": "258,000",
  "31AUG-6SEP": "62,000",
  "7-13SEP": "50,000",
  "14-20SEP": "77,000",
  "21-27SEP": "51,000",
  "SEP2020 TOTAL": "240,000",
  "28SEP-4OCT": "50,000",
  "5-11OCT": "50,000",
  "12-18OCT": "50,000",
  "19-25OCT": "60,000",
  "26OCT-1NOV": "63,000",
  "OCT2020 TOTAL": "273,000",
  "2-8NOV": "57000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "57000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "2,265,600"
}, {
  组别: "2",
  组员: "龚清山",
  "24FEB-01MAR": "43,000",
  FEB2020TOTAL: "43,000",
  "2-8MAR": "44,000",
  "9-15MAR": "41,000",
  "16-22MAR": "45,900",
  "23-29MAR": "41,600",
  "MAR2020 TOTAL": "172,500",
  "30MAR-5APR": "36,300",
  "6-12APR": "35,100",
  "13-19APR": "37,000",
  "20-26APR": "38,340",
  "APR2020 TOTAL": "146,740",
  "27APR-3MAY": "42,552",
  "4-10MAY": "40,200",
  "11-17MAY": "51,300",
  "18-24MAY": "40,400",
  "25-31MAY": "43,000",
  "MAY2020 TOTAL": "217,452",
  "1-7JUN": "39,100",
  "8-14JUN": "47,000",
  "15-21JUN": "40,000",
  "22-28JUN": "40,000",
  "JUN2020 TOTAL": "166,100",
  "29JUN-5JUL": "50,200",
  "6-12JUL": "35,000",
  "13-19JUL": "46,000",
  "20-26JUL": "30,000",
  "JUL2020 TOTAL": "161,200",
  "27JUL-2AUG": "30,000",
  "3-9AUG": "31,500",
  "10-16AUG": "30,000",
  "17-23AUG": "30,000",
  "24-30AUG": "30,000",
  "AUG2020 TOTAL": "151,500",
  "31AUG-6SEP": "30,000",
  "7-13SEP": "30,000",
  "14-20SEP": "30,000",
  "21-27SEP": "30,000",
  "SEP2020 TOTAL": "120,000",
  "28SEP-4OCT": "30,000",
  "5-11OCT": "30,000",
  "12-18OCT": "30,000",
  "19-25OCT": "30,000",
  "26OCT-1NOV": "30,000",
  "OCT2020 TOTAL": "150,000",
  "2-8NOV": "30000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "30000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "1,358,492"
}, {
  组别: "2",
  组员: "辜宝瑶",
  "24FEB-01MAR": "49,326",
  FEB2020TOTAL: "49,326",
  "2-8MAR": "55,086",
  "9-15MAR": "73,077",
  "16-22MAR": "80,162",
  "23-29MAR": "27,800",
  "MAR2020 TOTAL": "236,125",
  "30MAR-5APR": "65,895",
  "6-12APR": "33,473",
  "13-19APR": "38,232",
  "20-26APR": "46,548",
  "APR2020 TOTAL": "184,148",
  "27APR-3MAY": "52,920",
  "4-10MAY": "67,068",
  "11-17MAY": "77,220",
  "18-24MAY": "89,856",
  "25-31MAY": "104,436",
  "MAY2020 TOTAL": "391,500",
  "1-7JUN": "96,228",
  "8-14JUN": "95,688",
  "15-21JUN": "106,636",
  "22-28JUN": "48,598",
  "JUN2020 TOTAL": "347,150",
  "29JUN-5JUL": "47,005",
  "6-12JUL": "50,937",
  "13-19JUL": "66,053",
  "20-26JUL": "57,364",
  "JUL2020 TOTAL": "221,359",
  "27JUL-2AUG": "74,710",
  "3-9AUG": "87,778",
  "10-16AUG": "103,207",
  "17-23AUG": "96,334",
  "24-30AUG": "88,788",
  "AUG2020 TOTAL": "450,817",
  "31AUG-6SEP": "85,669",
  "7-13SEP": "81,311",
  "14-20SEP": "56,572",
  "21-27SEP": "51,796",
  "SEP2020 TOTAL": "275,348",
  "28SEP-4OCT": "96,067",
  "5-11OCT": "63,350",
  "12-18OCT": "96,564",
  "19-25OCT": "61,293",
  "26OCT-1NOV": "84,336",
  "OCT2020 TOTAL": "401,610",
  "2-8NOV": "66472",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "66472",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "2,623,855"
}, {
  组别: "2",
  组员: "星伊",
  "24FEB-01MAR": "10,000",
  FEB2020TOTAL: "10,000",
  "2-8MAR": "2,500",
  "9-15MAR": "6,500",
  "16-22MAR": "6,000",
  "23-29MAR": "5,000",
  "MAR2020 TOTAL": "20,000",
  "30MAR-5APR": "5,000",
  "6-12APR": "5,000",
  "13-19APR": "5,000",
  "20-26APR": "5,000",
  "APR2020 TOTAL": "20,000",
  "27APR-3MAY": "5,000",
  "4-10MAY": "5,000",
  "11-17MAY": "5,000",
  "18-24MAY": "5,000",
  "25-31MAY": "5,000",
  "MAY2020 TOTAL": "25,000",
  "1-7JUN": "5,000",
  "8-14JUN": "5,000",
  "15-21JUN": "5,000",
  "22-28JUN": "5,000",
  "JUN2020 TOTAL": "20,000",
  "29JUN-5JUL": "5,000",
  "6-12JUL": "5,000",
  "13-19JUL": "5,500",
  "20-26JUL": "5,000",
  "JUL2020 TOTAL": "20,500",
  "27JUL-2AUG": "5,150",
  "3-9AUG": "5,500",
  "10-16AUG": "5,000",
  "17-23AUG": "5,000",
  "24-30AUG": "5,380",
  "AUG2020 TOTAL": "26,030",
  "31AUG-6SEP": "5,611",
  "7-13SEP": "5,650",
  "14-20SEP": "5,000",
  "21-27SEP": "5,000",
  "SEP2020 TOTAL": "21,261",
  "28SEP-4OCT": "5,000",
  "5-11OCT": "5,000",
  "12-18OCT": "5,000",
  "19-25OCT": "5,000",
  "26OCT-1NOV": "5,000",
  "OCT2020 TOTAL": "25,000",
  "2-8NOV": "5000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "5000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "192,791"
}, {
  组别: "2",
  组员: "钟惠勤",
  "24FEB-01MAR": "10,000",
  FEB2020TOTAL: "10,000",
  "2-8MAR": "10,000",
  "9-15MAR": "12,000",
  "16-22MAR": "10,000",
  "23-29MAR": "10,000",
  "MAR2020 TOTAL": "42,000",
  "30MAR-5APR": "10,000",
  "6-12APR": "8,000",
  "13-19APR": "11,000",
  "20-26APR": "11,000",
  "APR2020 TOTAL": "40,000",
  "27APR-3MAY": "8,500",
  "4-10MAY": "10,000",
  "11-17MAY": "10,000",
  "18-24MAY": "9,000",
  "25-31MAY": "9,000",
  "MAY2020 TOTAL": "46,500",
  "1-7JUN": "9,000",
  "8-14JUN": "10,000",
  "15-21JUN": "9,000",
  "22-28JUN": "9,000",
  "JUN2020 TOTAL": "37,000",
  "29JUN-5JUL": "9,000",
  "6-12JUL": "9,000",
  "13-19JUL": "9,000",
  "20-26JUL": "8,000",
  "JUL2020 TOTAL": "35,000",
  "27JUL-2AUG": "10,000",
  "3-9AUG": "9,000",
  "10-16AUG": "9,000",
  "17-23AUG": "9,000",
  "24-30AUG": "7,000",
  "AUG2020 TOTAL": "44,000",
  "31AUG-6SEP": "10,000",
  "7-13SEP": "9,000",
  "14-20SEP": "9,000",
  "21-27SEP": "9,000",
  "SEP2020 TOTAL": "37,000",
  "28SEP-4OCT": "9,000",
  "5-11OCT": "9,000",
  "12-18OCT": "9,000",
  "19-25OCT": "10,000",
  "26OCT-1NOV": "9,000",
  "OCT2020 TOTAL": "46,000",
  "2-8NOV": "9000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "9000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "346,500"
}, {
  组别: "2",
  组员: "黄薇颖",
  "24FEB-01MAR": "22,502",
  FEB2020TOTAL: "22,502",
  "2-8MAR": "24,050",
  "9-15MAR": "27,720",
  "16-22MAR": "22,620",
  "23-29MAR": "19,100",
  "MAR2020 TOTAL": "93,490",
  "30MAR-5APR": "23,600",
  "6-12APR": "18,850",
  "13-19APR": "12,600",
  "20-26APR": "17,140",
  "APR2020 TOTAL": "72,190",
  "27APR-3MAY": "20,300",
  "4-10MAY": "17,400",
  "11-17MAY": "17,100",
  "18-24MAY": "17,330",
  "25-31MAY": "17,300",
  "MAY2020 TOTAL": "89,430",
  "1-7JUN": "14,020",
  "8-14JUN": "16,880",
  "15-21JUN": "14,900",
  "22-28JUN": "12,400",
  "JUN2020 TOTAL": "58,200",
  "29JUN-5JUL": "19,200",
  "6-12JUL": "16,950",
  "13-19JUL": "13,110",
  "20-26JUL": "14,770",
  "JUL2020 TOTAL": "64,030",
  "27JUL-2AUG": "18,230",
  "3-9AUG": "13,350",
  "10-16AUG": "15,400",
  "17-23AUG": "16,450",
  "24-30AUG": "14,890",
  "AUG2020 TOTAL": "78,320",
  "31AUG-6SEP": "14,200",
  "7-13SEP": "20,580",
  "14-20SEP": "19,330",
  "21-27SEP": "18,700",
  "SEP2020 TOTAL": "72,810",
  "28SEP-4OCT": "16,000",
  "5-11OCT": "16,000",
  "12-18OCT": "16,100",
  "19-25OCT": "14,500",
  "26OCT-1NOV": "18,300",
  "OCT2020 TOTAL": "80,900",
  "2-8NOV": "18000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "18000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "649,872"
}, {
  组别: "2",
  组员: "许乃文",
  "24FEB-01MAR": "27,250",
  FEB2020TOTAL: "27,250",
  "2-8MAR": "20,850",
  "9-15MAR": "25,000",
  "16-22MAR": "23,500",
  "23-29MAR": "7,550",
  "MAR2020 TOTAL": "76,900",
  "30MAR-5APR": "13,500",
  "6-12APR": "9,000",
  "13-19APR": "7,500",
  "20-26APR": "10,500",
  "APR2020 TOTAL": "40,500",
  "27APR-3MAY": "13,350",
  "4-10MAY": "12,300",
  "11-17MAY": "7,950",
  "18-24MAY": "8,950",
  "25-31MAY": "4,100",
  "MAY2020 TOTAL": "46,650",
  "1-7JUN": "6,750",
  "8-14JUN": "10,500",
  "15-21JUN": "9,000",
  "22-28JUN": "13,650",
  "JUN2020 TOTAL": "39,900",
  "29JUN-5JUL": "10,700",
  "6-12JUL": "8,200",
  "13-19JUL": "8,850",
  "20-26JUL": "12,600",
  "JUL2020 TOTAL": "40,350",
  "27JUL-2AUG": "6,200",
  "3-9AUG": "3,400",
  "10-16AUG": "8,250",
  "17-23AUG": "5,300",
  "24-30AUG": "5,450",
  "AUG2020 TOTAL": "28,600",
  "31AUG-6SEP": "3,450",
  "7-13SEP": "1,000",
  "14-20SEP": "3,200",
  "21-27SEP": "2,550",
  "SEP2020 TOTAL": "10,200",
  "28SEP-4OCT": "0",
  "5-11OCT": "1,800",
  "12-18OCT": "6,150",
  "19-25OCT": "6,000",
  "26OCT-1NOV": "3,700",
  "OCT2020 TOTAL": "17,650",
  "2-8NOV": "2210",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "2210",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "330,210"
}, {
  组别: "2",
  组员: "许艺瀚",
  "24FEB-01MAR": "0",
  FEB2020TOTAL: "0",
  "2-8MAR": "0",
  "9-15MAR": "0",
  "16-22MAR": "600",
  "23-29MAR": "644",
  "MAR2020 TOTAL": "1,244",
  "30MAR-5APR": "677",
  "6-12APR": "680",
  "13-19APR": "690",
  "20-26APR": "697",
  "APR2020 TOTAL": "2,744",
  "27APR-3MAY": "700",
  "4-10MAY": "700",
  "11-17MAY": "700",
  "18-24MAY": "700",
  "25-31MAY": "700",
  "MAY2020 TOTAL": "3,500",
  "1-7JUN": "700",
  "8-14JUN": "700",
  "15-21JUN": "700",
  "22-28JUN": "700",
  "JUN2020 TOTAL": "2,800",
  "29JUN-5JUL": "700",
  "6-12JUL": "700",
  "13-19JUL": "700",
  "20-26JUL": "700",
  "JUL2020 TOTAL": "2,800",
  "27JUL-2AUG": "700",
  "3-9AUG": "701",
  "10-16AUG": "701",
  "17-23AUG": "720",
  "24-30AUG": "720",
  "AUG2020 TOTAL": "3,542",
  "31AUG-6SEP": "720",
  "7-13SEP": "720",
  "14-20SEP": "720",
  "21-27SEP": "720",
  "SEP2020 TOTAL": "2,880",
  "28SEP-4OCT": "720",
  "5-11OCT": "720",
  "12-18OCT": "721",
  "19-25OCT": "721",
  "26OCT-1NOV": "730",
  "OCT2020 TOTAL": "3,612",
  "2-8NOV": "731",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "731",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "23,853"
}, {
  组别: "2",
  组员: "韩亚璇",
  "24FEB-01MAR": "",
  FEB2020TOTAL: "0",
  "2-8MAR": "0",
  "9-15MAR": "0",
  "16-22MAR": "0",
  "23-29MAR": "6,480",
  "MAR2020 TOTAL": "6,480",
  "30MAR-5APR": "3,348",
  "6-12APR": "1,944",
  "13-19APR": "11,664",
  "20-26APR": "8,640",
  "APR2020 TOTAL": "25,596",
  "27APR-3MAY": "10,908",
  "4-10MAY": "6,696",
  "11-17MAY": "6,480",
  "18-24MAY": "6,000",
  "25-31MAY": "8,640",
  "MAY2020 TOTAL": "38,724",
  "1-7JUN": "6,480",
  "8-14JUN": "6,480",
  "15-21JUN": "6,588",
  "22-28JUN": "7,884",
  "JUN2020 TOTAL": "27,432",
  "29JUN-5JUL": "6,480",
  "6-12JUL": "6,480",
  "13-19JUL": "6,480",
  "20-26JUL": "6,480",
  "JUL2020 TOTAL": "25,920",
  "27JUL-2AUG": "6,480",
  "3-9AUG": "6,840",
  "10-16AUG": "5,000",
  "17-23AUG": "6,480",
  "24-30AUG": "5,000",
  "AUG2020 TOTAL": "29,800",
  "31AUG-6SEP": "5,000",
  "7-13SEP": "0",
  "14-20SEP": "5,000",
  "21-27SEP": "6,000",
  "SEP2020 TOTAL": "16,000",
  "28SEP-4OCT": "5,000",
  "5-11OCT": "5,000",
  "12-18OCT": "5,000",
  "19-25OCT": "5,000",
  "26OCT-1NOV": "5,000",
  "OCT2020 TOTAL": "25,000",
  "2-8NOV": "5000",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "5000",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "199,952"
}, {
  组别: "2",
  组员: "李淑勤",
  "24FEB-01MAR": "16,829",
  FEB2020TOTAL: "16,829",
  "2-8MAR": "17,815",
  "9-15MAR": "22,979",
  "16-22MAR": "20,872",
  "23-29MAR": "31,849",
  "MAR2020 TOTAL": "93,515",
  "30MAR-5APR": "25,443",
  "6-12APR": "25,712",
  "13-19APR": "40,282",
  "20-26APR": "32,482",
  "APR2020 TOTAL": "123,919",
  "27APR-3MAY": "49,303",
  "4-10MAY": "51,653",
  "11-17MAY": "44,924",
  "18-24MAY": "40,227",
  "25-31MAY": "44,205",
  "MAY2020 TOTAL": "230,312",
  "1-7JUN": "34,248",
  "8-14JUN": "40,167",
  "15-21JUN": "32,257",
  "22-28JUN": "40,585",
  "JUN2020 TOTAL": "147,257",
  "29JUN-5JUL": "36,684",
  "6-12JUL": "26,272",
  "13-19JUL": "23,881",
  "20-26JUL": "26,947",
  "JUL2020 TOTAL": "113,784",
  "27JUL-2AUG": "24,812",
  "3-9AUG": "15,182",
  "10-16AUG": "12,249",
  "17-23AUG": "9,362",
  "24-30AUG": "9,667",
  "AUG2020 TOTAL": "71,272",
  "31AUG-6SEP": "8,703",
  "7-13SEP": "19,016",
  "14-20SEP": "14,477",
  "21-27SEP": "24,866",
  "SEP2020 TOTAL": "67,062",
  "28SEP-4OCT": "4,748",
  "5-11OCT": "9,668",
  "12-18OCT": "12,677",
  "19-25OCT": "6,518",
  "26OCT-1NOV": "5,000",
  "OCT2020 TOTAL": "38,611",
  "2-8NOV": "7052",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "7052",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "0",
  "2020 TOTAL": "909,613"
}, {
  组别: "",
  组员: "",
  "24FEB-01MAR": "",
  FEB2020TOTAL: "",
  "2-8MAR": "",
  "9-15MAR": "",
  "16-22MAR": "",
  "23-29MAR": "",
  "MAR2020 TOTAL": "",
  "30MAR-5APR": "",
  "6-12APR": "",
  "13-19APR": "",
  "20-26APR": "",
  "APR2020 TOTAL": "",
  "27APR-3MAY": "",
  "4-10MAY": "",
  "11-17MAY": "",
  "18-24MAY": "",
  "25-31MAY": "",
  "MAY2020 TOTAL": "",
  "1-7JUN": "",
  "8-14JUN": "",
  "15-21JUN": "",
  "22-28JUN": "",
  "JUN2020 TOTAL": "",
  "29JUN-5JUL": "",
  "6-12JUL": "",
  "13-19JUL": "",
  "20-26JUL": "",
  "JUL2020 TOTAL": "",
  "27JUL-2AUG": "",
  "3-9AUG": "",
  "10-16AUG": "",
  "17-23AUG": "",
  "24-30AUG": "",
  "AUG2020 TOTAL": "",
  "31AUG-6SEP": "",
  "7-13SEP": "",
  "14-20SEP": "",
  "21-27SEP": "",
  "SEP2020 TOTAL": "",
  "28SEP-4OCT": "",
  "5-11OCT": "",
  "12-18OCT": "",
  "19-25OCT": "",
  "26OCT-1NOV": "",
  "OCT2020 TOTAL": "",
  "2-8NOV": "",
  "9-15NOV": "",
  "16-22NOV": "",
  "23-29NOV": "",
  "NOV2020 TOTAL": "",
  "30NOV-6DEC": "",
  "7-13DEC": "",
  "14-20DEC": "",
  "21-27DEC": "",
  "DEC2020 TOTAL": "",
  "2020 TOTAL": ""
}];
var importParams = {
  functionName: "admin:importCsv",
  classId: "7QFVjl9Av0",
  practiceId: "0apCh4htRA",
  user: {
    id: "P59KfjAwDT",
    name: "黄东浩",
    username: "donghao",
    phone: "+65 9733 6176",
    email: "donghao.huang@gmail.com",
    roles: ["StudentUser", "B4aAdminUser", "TeachingAssistantUser"]
  }
};
var parseCsvList = [xinZhou1, gongXiu1, xinZhou2, gongXiu2];
var paramsList = [importParams, importParams].map(function (e) {
  var params = JSON.stringify(e);
  e.practiceId = undefined;
  return params;
});
/* harmony default export */ __webpack_exports__["default"] = ({
  parseCsvList: parseCsvList,
  paramsList: paramsList
});

/***/ }),

/***/ "./src/views/AdminFunctions.vue":
/*!**************************************!*\
  !*** ./src/views/AdminFunctions.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminFunctions.vue?vue&type=template&id=edc85074& */ "./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&");
/* harmony import */ var _AdminFunctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminFunctions.vue?vue&type=script&lang=js& */ "./src/views/AdminFunctions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminFunctions.vue?vue&type=style&index=0&lang=css& */ "./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminFunctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('edc85074')) {
      api.createRecord('edc85074', component.options)
    } else {
      api.reload('edc85074', component.options)
    }
    module.hot.accept(/*! ./AdminFunctions.vue?vue&type=template&id=edc85074& */ "./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminFunctions.vue?vue&type=template&id=edc85074& */ "./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&");
(function () {
      api.rerender('edc85074', {
        render: _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/AdminFunctions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/AdminFunctions.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/AdminFunctions.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&":
/*!*********************************************************************!*\
  !*** ./src/views/AdminFunctions.vue?vue&type=template&id=edc85074& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e0fe40c-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminFunctions.vue?vue&type=template&id=edc85074& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7e0fe40c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AdminFunctions.vue?vue&type=template&id=edc85074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7e0fe40c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFunctions_vue_vue_type_template_id_edc85074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=9.js.map