"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_settings_EditCompanyProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      company: {},
      validationErrors: {},
      processing: false
    };
  },
  created: function created() {
    this.fetchCompany();
  },
  methods: {
    fetchCompany: function fetchCompany() {
      var _this = this;
      // Change the method name
      var companyId = this.$route.params.id;
      axios.get("/api/companies/".concat(companyId)) // Correct the API endpoint
      .then(function (response) {
        _this.company = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    updateCompany: function updateCompany() {
      var _this2 = this;
      this.processing = true;
      var companyId = this.$route.params.id;
      axios.put("/api/companies/".concat(companyId), this.company) // Correct the API endpoint
      .then(function () {
        _this2.$router.push('/settings/company/edit');
      })["catch"](function (error) {
        console.error(error);
      })["finally"](function () {
        _this2.processing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-2\"><div class=\"flex-shrink-0 p-3 bg-success\"><ul class=\"list-unstyled ps-0\"><li class=\"mb-1\"><button class=\"btn btn-success btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#settings-collapse\" aria-expanded=\"false\"> Settings </button><div class=\"collapse\" id=\"settings-collapse\"><ul class=\"btn-toggle-nav list-unstyled fw-semibold pb-1 small\"><li><a href=\"#\" class=\"link-light rounded\">Item Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Unit Entry &amp; Measurement</a></li><li><a href=\"#\" class=\"link-light rounded\">Group Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Category Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Warehouse Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Branch Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Sms Sender</a></li><li><a href=\"#\" class=\"link-light rounded\">User Entry</a></li><li><a href=\"#\" class=\"link-light rounded\">Company Profile</a></li></ul></div></li></ul></div></div><div class=\"col-10\"><div class=\"container-fluid\"><!-- Update Company Profile--><!--End Update Company Profile --></div></div>", 2);
var _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/settings/EditCompanyProfile.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/settings/EditCompanyProfile.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditCompanyProfile_vue_vue_type_template_id_5954ceb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyProfile.vue?vue&type=template&id=5954ceb2 */ "./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2");
/* harmony import */ var _EditCompanyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyProfile.vue?vue&type=script&lang=js */ "./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EditCompanyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditCompanyProfile_vue_vue_type_template_id_5954ceb2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/settings/EditCompanyProfile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditCompanyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditCompanyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditCompanyProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditCompanyProfile_vue_vue_type_template_id_5954ceb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditCompanyProfile_vue_vue_type_template_id_5954ceb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditCompanyProfile.vue?vue&type=template&id=5954ceb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/settings/EditCompanyProfile.vue?vue&type=template&id=5954ceb2");


/***/ })

}]);