"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/main.js?{"type":"appStyle"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/*!***************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/main.js?{"page":"pages%2Freader%2Freader"} ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_reader_reader_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/reader/reader.nvue?mpType=page */ 50);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_reader_reader_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_reader_reader_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/reader/reader'\n        _pages_reader_reader_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_reader_reader_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsNkVBQUc7QUFDWCxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLGdCQUFnQiw2RUFBRyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvcmVhZGVyL3JlYWRlci5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3JlYWRlci9yZWFkZXInXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!*********************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader.nvue?vue&type=template&id=f1f70670&mpType=page */ 51);\n/* harmony import */ var _reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reader.nvue?vue&type=script&lang=js&mpType=page */ 53);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./reader.nvue?vue&type=style&index=0&lang=css&mpType=page */ 64).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./reader.nvue?vue&type=style&index=0&lang=css&mpType=page */ 64).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"b6136c1a\",\n  false,\n  _reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/reader/reader.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcmVhZGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjFmNzA2NzAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9yZWFkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3JlYWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJiNjEzNmMxYVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9yZWFkZXIvcmVhZGVyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!***************************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=template&id=f1f70670&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./reader.nvue?vue&type=template&id=f1f70670&mpType=page */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_template_id_f1f70670_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 52 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=template&id=f1f70670&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["reader"],
          style: "height:" + _vm.screenHeight + "px;"
        },
        [
          _c(
            "u-text",
            {
              staticClass: ["directoryTitle"],
              style: "top:" + _vm.screenTop + "px"
            },
            [_vm._v(_vm._s(_vm.bookData.directoryTitle))]
          ),
          _c(
            "scroll-view",
            {
              staticClass: ["content"],
              style:
                "height:" +
                (_vm.readerHeight - 30) +
                "px;top:" +
                (_vm.screenTop + 30) +
                "px",
              attrs: { scrollY: true, showScrollbar: false }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["content-box"],
                  on: { click: _vm.openConsolePop }
                },
                _vm._l(_vm.bookContent, function(item, index) {
                  return _c("u-text", { key: index, staticClass: ["p"] }, [
                    _vm._v(
                      _vm._s(item.name == "p" ? item.children[0].text : "")
                    )
                  ])
                }),
                0
              )
            ]
          ),
          _vm.direPop
            ? _c(
                "view",
                {
                  ref: "direPop",
                  class: "directory-pop",
                  style: "height:" + _vm.screenHeight + "px;"
                },
                [
                  _c(
                    "scroll-view",
                    {
                      staticClass: ["directory-list"],
                      style:
                        "height:" +
                        _vm.readerHeight +
                        "px;top:" +
                        _vm.screenTop +
                        "px",
                      attrs: { scrollY: "true" }
                    },
                    _vm._l(_vm.directoryList, function(item, index) {
                      return _c(
                        "u-text",
                        {
                          key: index,
                          staticClass: ["directory-item"],
                          on: {
                            click: function($event) {
                              _vm.getContent(item.directoryId)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item.directoryTitle))]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            : _vm._e(),
          _vm.consolePop
            ? _c(
                "view",
                {
                  staticClass: ["console-pop"],
                  style: "height:" + _vm.screenHeight + "px;"
                },
                [
                  _c("view", {
                    staticClass: ["console-pop-bg"],
                    style: "height:" + _vm.screenHeight + "px;",
                    on: { click: _vm.openConsolePop }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: ["console-pop-top"],
                      style: "padding-top: " + _vm.screenTop + "px;"
                    },
                    [
                      _c("view", { staticClass: ["console-pop-top-content"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["back-btn"],
                            on: { click: _vm.back }
                          },
                          [
                            _c("u-image", {
                              staticClass: ["console-img"],
                              attrs: {
                                src: "../../static/images/tc.png",
                                mode: "aspectFill"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "view",
                          {
                            staticClass: ["directory-btn"],
                            on: { click: _vm.openDirectory }
                          },
                          [
                            _c("u-image", {
                              staticClass: ["console-img"],
                              attrs: {
                                src: "../../static/images/ml.png",
                                mode: "aspectFill"
                              }
                            })
                          ],
                          1
                        ),
                        _c("u-text", { staticClass: ["title"] }, [
                          _vm._v(_vm._s(_vm.bookData.bookName))
                        ])
                      ])
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["console-pop-bottom"],
                      style: "padding-bottom: " + _vm.screenBottom + "px;"
                    },
                    [
                      _c("view", { staticClass: ["console-pop-top-content"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["console-btn"],
                            on: { click: _vm.previous }
                          },
                          [
                            _c("u-image", {
                              staticClass: ["console-img"],
                              attrs: {
                                src: "../../static/images/previous.png",
                                mode: "aspectFill"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "view",
                          {
                            staticClass: ["console-btn"],
                            on: { click: _vm.next }
                          },
                          [
                            _c("u-image", {
                              staticClass: ["console-img"],
                              attrs: {
                                src: "../../static/images/next.png",
                                mode: "aspectFill"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/*!*********************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./reader.nvue?vue&type=script&lang=js&mpType=page */ 54);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVhZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _parseHtml = _interopRequireDefault(__webpack_require__(/*! @/util/parseHtml.js */ 56));\nvar _pageTurning = _interopRequireDefault(__webpack_require__(/*! @/components/pageTurning/pageTurning.nvue */ 57));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar http = getApp().globalData.$http.http;var animation = __webpack_provided_uni_dot_requireNativePlugin('animation');var _default = { components: { pageTurning: _pageTurning.default }, data: function data() {return { bookId: '', screenHeight: 0, //整个页面高度\n      screenTop: 0, //顶部菜单栏高度\n      readerHeight: 0, //安全区整体高度\n      screenBottom: 0, //iphone x 安全外的高度\n      directoryList: [], direPop: true, //目录弹窗状态\n      bookContent: [], bookData: {}, consolePop: false, //控制台弹窗\n      beforeData: {}, //上一章\n      nextData: {}, //下一章\n      recording: null, //看书记录对象\n      progressDirectoryId: '' //进度目录id\n    };}, onLoad: function onLoad(option) {var sys = uni.getSystemInfoSync();this.readerHeight = sys.safeArea.height;this.screenTop = sys.safeAreaInsets.top;this.screenHeight = sys.windowHeight;this.screenBottom = sys.safeAreaInsets.bottom !== 0 ? sys.safeAreaInsets.bottom : 0;this.bookId = option.bookId;this.progressDirectoryId = option.progressDirectoryId; // this.recording = uni.getStorageSync('book_recording_' + this.bookId) || null;\n    __f__(\"log\", this.progressDirectoryId, \" at pages/reader/reader.nvue:94\");if (this.progressDirectoryId) {// 从书架进去\n      this.getContent(this.progressDirectoryId);this.colseDirectory();} else {if (this.recording) {// 打开记录的章节\n        this.getContent(this.recording.directoryId);this.colseDirectory();} else {// 没有记录打开目录\n        this.openDirectory();}}}, methods: { // 打开目录\n    openDirectory: function openDirectory() {var _this = this;this.consolePop = false;this.direPop = true;this.$nextTick(function () {\n        setTimeout(function () {\n          var testEl = _this.$refs.direPop;\n          animation.transition(testEl, {\n            styles: {\n              transform: 'translate(0px, 0px)' },\n\n            duration: 500, //ms\n            timingFunction: 'ease',\n            delay: 0, //ms\n            needLayout: true },\n          function () {\n\n          });\n        }, 10);\n\n      });\n\n      if (this.directoryList.length === 0) {\n        this.getDirectory();\n      }\n    },\n    // 关闭目录\n    colseDirectory: function colseDirectory() {var _this2 = this;\n      var testEl = this.$refs.direPop;\n      animation.transition(testEl, {\n        styles: {\n          transform: 'translate(-750upx, 0px)' },\n\n        duration: 500, //ms\n        timingFunction: 'ease',\n        delay: 0, //ms\n        needLayout: true },\n      function () {\n        _this2.direPop = false;\n      });\n\n    },\n    openConsolePop: function openConsolePop(e) {\n      this.consolePop = !this.consolePop;\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    // 设置记录\n    setRecording: function setRecording(data) {\n      this.recording = data;\n      uni.setStorageSync('book_recording_' + this.bookId, data);\n    },\n    getDirectory: function getDirectory() {var _this3 = this;\n      http({\n        url: '/common/book/directory',\n        data: {\n          bookId: this.bookId } }).\n\n      then(function (res) {\n        if (res.code == 200) {\n          _this3.directoryList = res.data;\n        }\n      });\n    },\n    // 上一章\n    previous: function previous() {\n      if (!this.beforeData.directoryId) {\n        uni.showToast({\n          title: '已经是第一章节',\n          duration: 1000 });\n\n        return;\n      }\n      this.getContent(this.beforeData.directoryId);\n      this.openConsolePop();\n    },\n    // 下一章\n    next: function next() {\n      if (!this.nextData.directoryId) {\n        uni.showToast({\n          title: '已经是最新的章节',\n          duration: 1000 });\n\n        return;\n      }\n      this.getContent(this.nextData.directoryId);\n      this.openConsolePop();\n    },\n    // 获取内容\n    getContent: function getContent(directoryId) {var _this4 = this;\n      http({\n        url: '/common/book/content',\n        data: {\n          directoryId: directoryId } }).\n\n      then(function (res) {\n        if (res.code == 200) {\n          _this4.bookData = res.data.current;\n          __f__(\"log\", res.data, \" at pages/reader/reader.nvue:219\");\n          var doc = new _parseHtml.default(res.data.current.bookContent);\n          // console.log(doc)\n          // doc.forEach(item=>{\n          // \tif(item.name=='p'){\n          // \t\titem.attrs= {\n          // \t\t\t// class: 'div-class',\n          // \t\t\tstyle: 'color: red; padding-top:20px;font-size:40px;'\n          // \t\t}\n          // \t}\n          // }) \n          _this4.bookContent = doc;\n          _this4.beforeData = res.data.before || {};\n          _this4.nextData = res.data.next || {};\n          _this4.colseDirectory();\n          _this4.setRecording(res.data.current);\n\n          _this4.shelf(directoryId);\n        }\n      });\n    },\n    // 记录进度\n    shelf: function shelf(progressDirectoryId) {\n      http({\n        url: '/token/client/shelf/add',\n        data: {\n          bookId: this.bookId,\n          progressDirectoryId: progressDirectoryId },\n\n        method: 'post' }).\n      then(function (res) {\n        __f__(\"log\", res, \" at pages/reader/reader.nvue:250\");\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 55)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVhZGVyL3JlYWRlci5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0Esb0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwQ0FDQSw0RSxlQUVBLEVBQ0EsY0FDQSxpQ0FEQSxFQURBLEVBSUEsSUFKQSxrQkFJQSxDQUNBLFNBQ0EsVUFEQSxFQUVBLGVBRkEsRUFFQTtBQUNBLGtCQUhBLEVBR0E7QUFDQSxxQkFKQSxFQUlBO0FBQ0EscUJBTEEsRUFLQTtBQUNBLHVCQU5BLEVBT0EsYUFQQSxFQU9BO0FBQ0EscUJBUkEsRUFTQSxZQVRBLEVBVUEsaUJBVkEsRUFVQTtBQUNBLG9CQVhBLEVBV0E7QUFDQSxrQkFaQSxFQVlBO0FBRUEscUJBZEEsRUFjQTtBQUVBLDZCQWhCQSxDQWdCQTtBQWhCQSxNQWtCQSxDQXZCQSxFQXdCQSxNQXhCQSxrQkF3QkEsTUF4QkEsRUF3QkEsQ0FHQSxrQ0FDQSx3Q0FDQSx3Q0FDQSxxQ0FDQSxvRkFDQSw0QkFDQSxzREFUQSxDQVVBO0FBQ0EsOEVBR0EsK0JBQ0E7QUFDQSxnREFDQSxzQkFDQSxDQUpBLE1BSUEsQ0FDQSxxQkFDQTtBQUNBLG9EQUNBLHNCQUNBLENBSkEsTUFJQSxDQUNBO0FBQ0EsNkJBQ0EsQ0FFQSxDQUlBLENBeERBLEVBeURBLFdBQ0E7QUFDQSxpQkFGQSwyQkFFQSxrQkFDQSx3QkFDQSxvQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBREEsRUFEQTs7QUFJQSx5QkFKQSxFQUlBO0FBQ0Esa0NBTEE7QUFNQSxvQkFOQSxFQU1BO0FBQ0EsNEJBUEE7QUFRQTs7QUFFQSxXQVZBO0FBV0EsU0FiQSxFQWFBLEVBYkE7O0FBZUEsT0FoQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBLEtBM0JBO0FBNEJBO0FBQ0Esa0JBN0JBLDRCQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQURBLEVBREE7O0FBSUEscUJBSkEsRUFJQTtBQUNBLDhCQUxBO0FBTUEsZ0JBTkEsRUFNQTtBQUNBLHdCQVBBO0FBUUE7QUFDQTtBQUNBLE9BVkE7O0FBWUEsS0EzQ0E7QUE0Q0Esa0JBNUNBLDBCQTRDQSxDQTVDQSxFQTRDQTtBQUNBO0FBQ0EsS0E5Q0E7QUErQ0EsUUEvQ0Esa0JBK0NBO0FBQ0E7QUFDQSxnQkFEQTs7QUFHQSxLQW5EQTtBQW9EQTtBQUNBLGdCQXJEQSx3QkFxREEsSUFyREEsRUFxREE7QUFDQTtBQUNBO0FBQ0EsS0F4REE7QUF5REEsZ0JBekRBLDBCQXlEQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBLDZCQURBLEVBRkE7O0FBS0EsVUFMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBcEVBO0FBcUVBO0FBQ0EsWUF0RUEsc0JBc0VBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhGQTtBQWlGQTtBQUNBLFFBbEZBLGtCQWtGQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1RkE7QUE2RkE7QUFDQSxjQTlGQSxzQkE4RkEsV0E5RkEsRUE4RkE7QUFDQTtBQUNBLG1DQURBO0FBRUE7QUFDQSxrQ0FEQSxFQUZBOztBQUtBLFVBTEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0EzQkE7QUE0QkEsS0EzSEE7QUE0SEE7QUFDQSxTQTdIQSxpQkE2SEEsbUJBN0hBLEVBNkhBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBO0FBQ0EsNkJBREE7QUFFQSxrREFGQSxFQUZBOztBQU1BLHNCQU5BO0FBT0EsVUFQQSxDQU9BO0FBQ0E7QUFDQSxPQVRBO0FBVUEsS0F4SUEsRUF6REEsRSIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS0g5bCP6K+06ZiF6K+76aG1IC0tPlxuPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInJlYWRlclwiIDpzdHlsZT1cImBoZWlnaHQ6JHtzY3JlZW5IZWlnaHR9cHg7YFwiPlxuXG5cdFx0PCEtLSDlhoXlrrkgLS0+XG5cdFx0PHRleHQgY2xhc3M9XCJkaXJlY3RvcnlUaXRsZVwiIDpzdHlsZT1cImB0b3A6JHtzY3JlZW5Ub3B9cHhgXCI+e3tib29rRGF0YS5kaXJlY3RvcnlUaXRsZX19PC90ZXh0PlxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIGNsYXNzPVwiY29udGVudFwiIDpzdHlsZT1cImBoZWlnaHQ6JHtyZWFkZXJIZWlnaHQtMzB9cHg7dG9wOiR7c2NyZWVuVG9wKzMwfXB4YFwiPlxuXHRcdFx0PHZpZXcgQGNsaWNrPVwib3BlbkNvbnNvbGVQb3BcIiBjbGFzcz1cImNvbnRlbnQtYm94XCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwicFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGJvb2tDb250ZW50XCIgOmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWU9PSdwJz9pdGVtLmNoaWxkcmVuWzBdLnRleHQ6Jyd9fTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHRcdDwhLS0gPHBhZ2UtdHVybmluZyA6Ym9va0NvbnRlbnQ9XCJib29rQ29udGVudFwiICB2LWlmPVwiIWRpcmVQb3BcIj48L3BhZ2UtdHVybmluZz4gLS0+XG5cblx0XHQ8IS0tIOebruW9lSAtLT5cblx0XHQ8dmlldyA6Y2xhc3M9XCJgZGlyZWN0b3J5LXBvcGBcIiByZWY9J2RpcmVQb3AnIHYtaWY9XCJkaXJlUG9wXCIgOnN0eWxlPVwiYGhlaWdodDoke3NjcmVlbkhlaWdodH1weDtgXCI+XG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJkaXJlY3RvcnktbGlzdFwiIDpzdHlsZT1cImBoZWlnaHQ6JHtyZWFkZXJIZWlnaHR9cHg7dG9wOiR7c2NyZWVuVG9wfXB4YFwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRpcmVjdG9yeS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZGlyZWN0b3J5TGlzdFwiIEBjbGljaz1cImdldENvbnRlbnQoaXRlbS5kaXJlY3RvcnlJZClcIiA6a2V5PVwiaW5kZXhcIj57e2l0ZW0uZGlyZWN0b3J5VGl0bGV9fTwvdGV4dD5cblx0XHRcdDwvc2Nyb2xsLXZpZXc+XG5cdFx0PC92aWV3PlxuXG5cdFx0PCEtLSDmjqfliLblj7AgLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJjb25zb2xlLXBvcFwiIHYtaWY9XCJjb25zb2xlUG9wXCIgOnN0eWxlPVwiYGhlaWdodDoke3NjcmVlbkhlaWdodH1weDtgXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnNvbGUtcG9wLWJnXCIgOnN0eWxlPVwiYGhlaWdodDoke3NjcmVlbkhlaWdodH1weDtgXCIgQGNsaWNrPVwib3BlbkNvbnNvbGVQb3BcIj48L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnNvbGUtcG9wLXRvcFwiIDpzdHlsZT1cImBwYWRkaW5nLXRvcDogJHtzY3JlZW5Ub3B9cHg7YFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnNvbGUtcG9wLXRvcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PCEtLSDpgIDlh7rmjInpkq4gLS0+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrLWJ0blwiIEBjbGljaz1cImJhY2tcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3RjLnBuZ1wiIGNsYXNzPVwiY29uc29sZS1pbWdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwhLS0g55uu5b2V5oyJ6ZKuIC0tPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlyZWN0b3J5LWJ0blwiIEBjbGljay5zdG9wPVwib3BlbkRpcmVjdG9yeVwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWwucG5nXCIgY2xhc3M9XCJjb25zb2xlLWltZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7Ym9va0RhdGEuYm9va05hbWV9fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb25zb2xlLXBvcC1ib3R0b21cIiA6c3R5bGU9XCJgcGFkZGluZy1ib3R0b206ICR7c2NyZWVuQm90dG9tfXB4O2BcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb25zb2xlLXBvcC10b3AtY29udGVudFwiPlxuXHRcdFx0XHRcdDwhLS0g5LiK5LiA56ugIC0tPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29uc29sZS1idG5cIiBAY2xpY2s9XCJwcmV2aW91c1wiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcHJldmlvdXMucG5nXCIgY2xhc3M9XCJjb25zb2xlLWltZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PCEtLSDkuIvkuIDnq6AgLS0+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb25zb2xlLWJ0blwiIEBjbGljaz1cIm5leHRcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgY2xhc3M9XCJjb25zb2xlLWltZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBIVE1MUGFyc2VyIGZyb20gXCJAL3V0aWwvcGFyc2VIdG1sLmpzXCJcblx0aW1wb3J0IHBhZ2VUdXJuaW5nIGZyb20gJ0AvY29tcG9uZW50cy9wYWdlVHVybmluZy9wYWdlVHVybmluZy5udnVlJ1xuXHRjb25zdCBodHRwID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS4kaHR0cC5odHRwO1xuXHRjb25zdCBhbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJylcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0cGFnZVR1cm5pbmcsXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ym9va0lkOiAnJyxcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OiAwLCAvL+aVtOS4qumhtemdoumrmOW6plxuXHRcdFx0XHRzY3JlZW5Ub3A6IDAsIC8v6aG26YOo6I+c5Y2V5qCP6auY5bqmXG5cdFx0XHRcdHJlYWRlckhlaWdodDogMCwgLy/lronlhajljLrmlbTkvZPpq5jluqZcblx0XHRcdFx0c2NyZWVuQm90dG9tOiAwLCAvL2lwaG9uZSB4IOWuieWFqOWklueahOmrmOW6plxuXHRcdFx0XHRkaXJlY3RvcnlMaXN0OiBbXSxcblx0XHRcdFx0ZGlyZVBvcDogdHJ1ZSwgLy/nm67lvZXlvLnnqpfnirbmgIFcblx0XHRcdFx0Ym9va0NvbnRlbnQ6IFtdLFxuXHRcdFx0XHRib29rRGF0YToge30sXG5cdFx0XHRcdGNvbnNvbGVQb3A6IGZhbHNlLCAvL+aOp+WItuWPsOW8ueeql1xuXHRcdFx0XHRiZWZvcmVEYXRhOiB7fSwgLy/kuIrkuIDnq6Bcblx0XHRcdFx0bmV4dERhdGE6IHt9LCAvL+S4i+S4gOeroFxuXG5cdFx0XHRcdHJlY29yZGluZzogbnVsbCwgLy/nnIvkuaborrDlvZXlr7nosaFcblxuXHRcdFx0XHRwcm9ncmVzc0RpcmVjdG9yeUlkOiAnJywgLy/ov5vluqbnm67lvZVpZFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKG9wdGlvbikge1xuXHRcdFx0XG5cdFx0XG5cdFx0XHRjb25zdCBzeXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0XHRcdHRoaXMucmVhZGVySGVpZ2h0ID0gc3lzLnNhZmVBcmVhLmhlaWdodDtcblx0XHRcdHRoaXMuc2NyZWVuVG9wID0gc3lzLnNhZmVBcmVhSW5zZXRzLnRvcDtcblx0XHRcdHRoaXMuc2NyZWVuSGVpZ2h0ID0gc3lzLndpbmRvd0hlaWdodDtcblx0XHRcdHRoaXMuc2NyZWVuQm90dG9tID0gKHN5cy5zYWZlQXJlYUluc2V0cy5ib3R0b20gIT09IDApID8gc3lzLnNhZmVBcmVhSW5zZXRzLmJvdHRvbSA6IDA7XG5cdFx0XHR0aGlzLmJvb2tJZCA9IG9wdGlvbi5ib29rSWQ7XG5cdFx0XHR0aGlzLnByb2dyZXNzRGlyZWN0b3J5SWQgPSBvcHRpb24ucHJvZ3Jlc3NEaXJlY3RvcnlJZFxuXHRcdFx0Ly8gdGhpcy5yZWNvcmRpbmcgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2Jvb2tfcmVjb3JkaW5nXycgKyB0aGlzLmJvb2tJZCkgfHwgbnVsbDtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMucHJvZ3Jlc3NEaXJlY3RvcnlJZClcblxuXG5cdFx0XHRpZiAodGhpcy5wcm9ncmVzc0RpcmVjdG9yeUlkKSB7XG5cdFx0XHRcdC8vIOS7juS5puaetui/m+WOu1xuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQodGhpcy5wcm9ncmVzc0RpcmVjdG9yeUlkKTtcblx0XHRcdFx0dGhpcy5jb2xzZURpcmVjdG9yeSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMucmVjb3JkaW5nKSB7XG5cdFx0XHRcdFx0Ly8g5omT5byA6K6w5b2V55qE56ug6IqCXG5cdFx0XHRcdFx0dGhpcy5nZXRDb250ZW50KHRoaXMucmVjb3JkaW5nLmRpcmVjdG9yeUlkKTtcblx0XHRcdFx0XHR0aGlzLmNvbHNlRGlyZWN0b3J5KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g5rKh5pyJ6K6w5b2V5omT5byA55uu5b2VXG5cdFx0XHRcdFx0dGhpcy5vcGVuRGlyZWN0b3J5KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cblxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Ly8g5omT5byA55uu5b2VXG5cdFx0XHRvcGVuRGlyZWN0b3J5KCkge1xuXHRcdFx0XHR0aGlzLmNvbnNvbGVQb3AgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5kaXJlUG9wID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR2YXIgdGVzdEVsID0gdGhpcy4kcmVmcy5kaXJlUG9wO1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGVzdEVsLCB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCknLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLCAvL21zXG5cdFx0XHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG5cdFx0XHRcdFx0XHRcdGRlbGF5OiAwLCAvL21zXG5cdFx0XHRcdFx0XHRcdG5lZWRMYXlvdXQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9LCAoKSA9PiB7XG5cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSwgMTApXG5cblx0XHRcdFx0fSlcblxuXHRcdFx0XHRpZiAodGhpcy5kaXJlY3RvcnlMaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuZ2V0RGlyZWN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyDlhbPpl63nm67lvZVcblx0XHRcdGNvbHNlRGlyZWN0b3J5KCkge1xuXHRcdFx0XHR2YXIgdGVzdEVsID0gdGhpcy4kcmVmcy5kaXJlUG9wO1xuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0ZXN0RWwsIHtcblx0XHRcdFx0XHRzdHlsZXM6IHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNzUwdXB4LCAwcHgpJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMCwgLy9tc1xuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG5cdFx0XHRcdFx0ZGVsYXk6IDAsIC8vbXNcblx0XHRcdFx0XHRuZWVkTGF5b3V0OiB0cnVlLFxuXHRcdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kaXJlUG9wID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cblx0XHRcdH0sXG5cdFx0XHRvcGVuQ29uc29sZVBvcChlKSB7XG5cdFx0XHRcdHRoaXMuY29uc29sZVBvcCA9ICF0aGlzLmNvbnNvbGVQb3A7XG5cdFx0XHR9LFxuXHRcdFx0YmFjaygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6K6+572u6K6w5b2VXG5cdFx0XHRzZXRSZWNvcmRpbmcoZGF0YSkge1xuXHRcdFx0XHR0aGlzLnJlY29yZGluZyA9IGRhdGE7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYm9va19yZWNvcmRpbmdfJyArIHRoaXMuYm9va0lkLCBkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRnZXREaXJlY3RvcnkoKSB7XG5cdFx0XHRcdGh0dHAoe1xuXHRcdFx0XHRcdHVybDogJy9jb21tb24vYm9vay9kaXJlY3RvcnknLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGJvb2tJZDogdGhpcy5ib29rSWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRpcmVjdG9yeUxpc3QgPSByZXMuZGF0YTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiK5LiA56ugXG5cdFx0XHRwcmV2aW91cygpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmJlZm9yZURhdGEuZGlyZWN0b3J5SWQpIHtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn5bey57uP5piv56ys5LiA56ug6IqCJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KHRoaXMuYmVmb3JlRGF0YS5kaXJlY3RvcnlJZCk7XG5cdFx0XHRcdHRoaXMub3BlbkNvbnNvbGVQb3AoKTtcblx0XHRcdH0sXG5cdFx0XHQvLyDkuIvkuIDnq6Bcblx0XHRcdG5leHQoKSB7XG5cdFx0XHRcdGlmICghdGhpcy5uZXh0RGF0YS5kaXJlY3RvcnlJZCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICflt7Lnu4/mmK/mnIDmlrDnmoTnq6DoioInLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQodGhpcy5uZXh0RGF0YS5kaXJlY3RvcnlJZCk7XG5cdFx0XHRcdHRoaXMub3BlbkNvbnNvbGVQb3AoKTtcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5blhoXlrrlcblx0XHRcdGdldENvbnRlbnQoZGlyZWN0b3J5SWQpIHtcblx0XHRcdFx0aHR0cCh7XG5cdFx0XHRcdFx0dXJsOiAnL2NvbW1vbi9ib29rL2NvbnRlbnQnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGRpcmVjdG9yeUlkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5ib29rRGF0YSA9IHJlcy5kYXRhLmN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcblx0XHRcdFx0XHRcdGNvbnN0IGRvYyA9IG5ldyBIVE1MUGFyc2VyKHJlcy5kYXRhLmN1cnJlbnQuYm9va0NvbnRlbnQpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZG9jKVxuXHRcdFx0XHRcdFx0Ly8gZG9jLmZvckVhY2goaXRlbT0+e1xuXHRcdFx0XHRcdFx0Ly8gXHRpZihpdGVtLm5hbWU9PSdwJyl7XG5cdFx0XHRcdFx0XHQvLyBcdFx0aXRlbS5hdHRycz0ge1xuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0Ly8gY2xhc3M6ICdkaXYtY2xhc3MnLFxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0c3R5bGU6ICdjb2xvcjogcmVkOyBwYWRkaW5nLXRvcDoyMHB4O2ZvbnQtc2l6ZTo0MHB4Oydcblx0XHRcdFx0XHRcdC8vIFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0XHRcdC8vIH0pIFxuXHRcdFx0XHRcdFx0dGhpcy5ib29rQ29udGVudCA9IGRvYztcblx0XHRcdFx0XHRcdHRoaXMuYmVmb3JlRGF0YSA9IHJlcy5kYXRhLmJlZm9yZSB8fCB7fTtcblx0XHRcdFx0XHRcdHRoaXMubmV4dERhdGEgPSByZXMuZGF0YS5uZXh0IHx8IHt9O1xuXHRcdFx0XHRcdFx0dGhpcy5jb2xzZURpcmVjdG9yeSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRSZWNvcmRpbmcocmVzLmRhdGEuY3VycmVudCk7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2hlbGYoZGlyZWN0b3J5SWQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOiusOW9lei/m+W6plxuXHRcdFx0c2hlbGYocHJvZ3Jlc3NEaXJlY3RvcnlJZCkge1xuXHRcdFx0XHRodHRwKHtcblx0XHRcdFx0XHR1cmw6ICcvdG9rZW4vY2xpZW50L3NoZWxmL2FkZCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0Ym9va0lkOiB0aGlzLmJvb2tJZCxcblx0XHRcdFx0XHRcdHByb2dyZXNzRGlyZWN0b3J5SWQ6IHByb2dyZXNzRGlyZWN0b3J5SWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdEBpbXBvcnQgdXJsKFwiLi9yZWFkZXIuY3NzXCIpO1xuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 56 */
/*!**************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/util/parseHtml.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\n                                                                                                      * HTML5 Parser By Sam Blowes\n                                                                                                      *\n                                                                                                      * Designed for HTML5 documents\n                                                                                                      *\n                                                                                                      * Original code by John Resig (ejohn.org)\n                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/\n                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License\n                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js\n                                                                                                      *\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      * License\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      *\n                                                                                                      * This code is triple licensed using Apache Software License 2.0,\n                                                                                                      * Mozilla Public License or GNU Public License\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\n                                                                                                      * use this file except in compliance with the License.  You may obtain a copy\n                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * The contents of this file are subject to the Mozilla Public License\n                                                                                                      * Version 1.1 (the \"License\"); you may not use this file except in\n                                                                                                      * compliance with the License. You may obtain a copy of the License at\n                                                                                                      * http://www.mozilla.org/MPL/\n                                                                                                      *\n                                                                                                      * Software distributed under the License is distributed on an \"AS IS\"\n                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the\n                                                                                                      * License for the specific language governing rights and limitations\n                                                                                                      * under the License.\n                                                                                                      *\n                                                                                                      * The Original Code is Simple HTML Parser.\n                                                                                                      *\n                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.\n                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights\n                                                                                                      * Reserved.\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * This program is free software; you can redistribute it and/or\n                                                                                                      * modify it under the terms of the GNU General Public License\n                                                                                                      * as published by the Free Software Foundation; either version 2\n                                                                                                      * of the License, or (at your option) any later version.\n                                                                                                      *\n                                                                                                      * This program is distributed in the hope that it will be useful,\n                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of\n                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n                                                                                                      * GNU General Public License for more details.\n                                                                                                      *\n                                                                                                      * You should have received a copy of the GNU General Public License\n                                                                                                      * along with this program; if not, write to the Free Software\n                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n                                                                                                      *\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      * Usage\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      *\n                                                                                                      * // Use like so:\n                                                                                                      * HTMLParser(htmlString, {\n                                                                                                      *     start: function(tag, attrs, unary) {},\n                                                                                                      *     end: function(tag) {},\n                                                                                                      *     chars: function(text) {},\n                                                                                                      *     comment: function(text) {}\n                                                                                                      * });\n                                                                                                      *\n                                                                                                      * // or to get an XML string:\n                                                                                                      * HTMLtoXML(htmlString);\n                                                                                                      *\n                                                                                                      * // or to get an XML DOM Document\n                                                                                                      * HTMLtoDOM(htmlString);\n                                                                                                      *\n                                                                                                      * // or to inject into an existing document/DOM node\n                                                                                                      * HTMLtoDOM(htmlString, document);\n                                                                                                      * HTMLtoDOM(htmlString, document.body);\n                                                                                                      *\n                                                                                                      */\n// Regular Expressions for parsing tags and attributes\nvar startTag = /^<([-A-Za-z0-9_]+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?)*)\\s*(\\/?)>/;\nvar endTag = /^<\\/([-A-Za-z0-9_]+)[^>]*>/;\nvar attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\\s*=\\s*(?:(?:\"((?:\\\\.|[^\"])*)\")|(?:'((?:\\\\.|[^'])*)')|([^>\\s]+)))?/g; // Empty Elements - HTML 5\n\nvar empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5\n// fixed by xxx 将 ins 标签从块级名单中移除\n\nvar block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5\n\nvar inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open\n// (and which close themselves)\n\nvar closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled=\"disabled\"\n\nvar fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)\n\nvar special = makeMap('script,style');\nfunction HTMLParser(html, handler) {\n  var index;\n  var chars;\n  var match;\n  var stack = [];\n  var last = html;\n\n  stack.last = function () {\n    return this[this.length - 1];\n  };\n\n  while (html) {\n    chars = true; // Make sure we're not in a script or style element\n\n    if (!stack.last() || !special[stack.last()]) {\n      // Comment\n      if (html.indexOf('<!--') == 0) {\n        index = html.indexOf('-->');\n\n        if (index >= 0) {\n          if (handler.comment) {\n            handler.comment(html.substring(4, index));\n          }\n\n          html = html.substring(index + 3);\n          chars = false;\n        } // end tag\n\n      } else if (html.indexOf('</') == 0) {\n        match = html.match(endTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(endTag, parseEndTag);\n          chars = false;\n        } // start tag\n\n      } else if (html.indexOf('<') == 0) {\n        match = html.match(startTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(startTag, parseStartTag);\n          chars = false;\n        }\n      }\n\n      if (chars) {\n        index = html.indexOf('<');\n        var text = index < 0 ? html : html.substring(0, index);\n        html = index < 0 ? '' : html.substring(index);\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n      }\n    } else {\n      html = html.replace(new RegExp('([\\\\s\\\\S]*?)<\\/' + stack.last() + '[^>]*>'), function (all, text) {\n        text = text.replace(/<!--([\\s\\S]*?)-->|<!\\[CDATA\\[([\\s\\S]*?)]]>/g, '$1$2');\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n\n        return '';\n      });\n      parseEndTag('', stack.last());\n    }\n\n    if (html == last) {\n      throw 'Parse Error: ' + html;\n    }\n\n    last = html;\n  } // Clean up any remaining tags\n\n\n  parseEndTag();\n\n  function parseStartTag(tag, tagName, rest, unary) {\n    tagName = tagName.toLowerCase();\n\n    if (block[tagName]) {\n      while (stack.last() && inline[stack.last()]) {\n        parseEndTag('', stack.last());\n      }\n    }\n\n    if (closeSelf[tagName] && stack.last() == tagName) {\n      parseEndTag('', tagName);\n    }\n\n    unary = empty[tagName] || !!unary;\n\n    if (!unary) {\n      stack.push(tagName);\n    }\n\n    if (handler.start) {\n      var attrs = [];\n      rest.replace(attr, function (match, name) {\n        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';\n        attrs.push({\n          name: name,\n          value: value,\n          escaped: value.replace(/(^|[^\\\\])\"/g, '$1\\\\\\\"') // \"\n        });\n\n      });\n\n      if (handler.start) {\n        handler.start(tagName, attrs, unary);\n      }\n    }\n  }\n\n  function parseEndTag(tag, tagName) {\n    // If no tag name is provided, clean shop\n    if (!tagName) {\n      var pos = 0;\n    } // Find the closest opened tag of the same type\n    else {\n        for (var pos = stack.length - 1; pos >= 0; pos--) {\n          if (stack[pos] == tagName) {\n            break;\n          }\n        }\n      }\n\n    if (pos >= 0) {\n      // Close all the open elements, up the stack\n      for (var i = stack.length - 1; i >= pos; i--) {\n        if (handler.end) {\n          handler.end(stack[i]);\n        }\n      } // Remove the open elements from the stack\n\n\n      stack.length = pos;\n    }\n  }\n}\n\nfunction makeMap(str) {\n  var obj = {};\n  var items = str.split(',');\n\n  for (var i = 0; i < items.length; i++) {\n    obj[items[i]] = true;\n  }\n\n  return obj;\n}\n\nfunction removeDOCTYPE(html) {\n  return html.replace(/<\\?xml.*\\?>\\n/, '').replace(/<!doctype.*>\\n/, '').replace(/<!DOCTYPE.*>\\n/, '');\n}\n\nfunction parseAttrs(attrs) {\n  return attrs.reduce(function (pre, attr) {\n    var value = attr.value;\n    var name = attr.name;\n\n    if (pre[name]) {\n      pre[name] = pre[name] + \" \" + value;\n    } else {\n      pre[name] = value;\n    }\n\n    return pre;\n  }, {});\n}\n\nfunction parseHtml(html) {\n  html = removeDOCTYPE(html);\n  var stacks = [];\n  var results = {\n    node: 'root',\n    children: [] };\n\n  HTMLParser(html, {\n    start: function start(tag, attrs, unary) {\n      var node = {\n        name: tag };\n\n\n      if (attrs.length !== 0) {\n        node.attrs = parseAttrs(attrs);\n      }\n\n      if (unary) {\n        var parent = stacks[0] || results;\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      } else {\n        stacks.unshift(node);\n      }\n    },\n    end: function end(tag) {\n      var node = stacks.shift();\n      if (node.name !== tag) __f__(\"error\", 'invalid state: mismatch end tag', \" at util/parseHtml.js:303\");\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    chars: function chars(text) {\n      var node = {\n        type: 'text',\n        text: text };\n\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    comment: function comment(text) {\n      var node = {\n        node: 'comment',\n        text: text };\n\n      var parent = stacks[0];\n\n      if (!parent.children) {\n        parent.children = [];\n      }\n\n      parent.children.push(node);\n    } });\n\n  return results.children;\n}var _default =\n\nparseHtml;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbC9wYXJzZUh0bWwuanMiXSwibmFtZXMiOlsic3RhcnRUYWciLCJlbmRUYWciLCJhdHRyIiwiZW1wdHkiLCJtYWtlTWFwIiwiYmxvY2siLCJpbmxpbmUiLCJjbG9zZVNlbGYiLCJmaWxsQXR0cnMiLCJzcGVjaWFsIiwiSFRNTFBhcnNlciIsImh0bWwiLCJoYW5kbGVyIiwiaW5kZXgiLCJjaGFycyIsIm1hdGNoIiwic3RhY2siLCJsYXN0IiwibGVuZ3RoIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwicGFyc2VFbmRUYWciLCJwYXJzZVN0YXJ0VGFnIiwidGV4dCIsIlJlZ0V4cCIsImFsbCIsInRhZyIsInRhZ05hbWUiLCJyZXN0IiwidW5hcnkiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJzdGFydCIsImF0dHJzIiwibmFtZSIsInZhbHVlIiwiYXJndW1lbnRzIiwiZXNjYXBlZCIsInBvcyIsImkiLCJlbmQiLCJzdHIiLCJvYmoiLCJpdGVtcyIsInNwbGl0IiwicmVtb3ZlRE9DVFlQRSIsInBhcnNlQXR0cnMiLCJyZWR1Y2UiLCJwcmUiLCJwYXJzZUh0bWwiLCJzdGFja3MiLCJyZXN1bHRzIiwibm9kZSIsImNoaWxkcmVuIiwicGFyZW50IiwidW5zaGlmdCIsInNoaWZ0IiwidHlwZSJdLCJtYXBwaW5ncyI6InFJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdGQTtBQUNBLElBQUlBLFFBQVEsR0FBRyxnSEFBZjtBQUNBLElBQUlDLE1BQU0sR0FBRyw0QkFBYjtBQUNBLElBQUlDLElBQUksR0FBRyxvR0FBWCxDLENBQWlIOztBQUVqSCxJQUFJQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxvR0FBRCxDQUFuQixDLENBQTJIO0FBQzNIOztBQUVBLElBQUlDLEtBQUssR0FBR0QsT0FBTyxDQUFDLDJTQUFE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LFVBQUk2QixJQUFJLEdBQUc7QUFDVEssWUFBSSxFQUFFLE1BREc7QUFFVGxDLFlBQUksRUFBRUEsSUFGRyxFQUFYOzs7QUFLQSxVQUFJMkIsTUFBTSxDQUFDbEMsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qm1DLGVBQU8sQ0FBQ0UsUUFBUixDQUFpQnRCLElBQWpCLENBQXNCcUIsSUFBdEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJRSxNQUFNLEdBQUdKLE1BQU0sQ0FBQyxDQUFELENBQW5COztBQUVBLFlBQUksQ0FBQ0ksTUFBTSxDQUFDRCxRQUFaLEVBQXNCO0FBQ3BCQyxnQkFBTSxDQUFDRCxRQUFQLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRURDLGNBQU0sQ0FBQ0QsUUFBUCxDQUFnQnRCLElBQWhCLENBQXFCcUIsSUFBckI7QUFDRDtBQUNGLEtBdkRjO0FBd0RmbEMsV0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJLLElBQWpCLEVBQXVCO0FBQzlCLFVBQUk2QixJQUFJLEdBQUc7QUFDVEEsWUFBSSxFQUFFLFNBREc7QUFFVDdCLFlBQUksRUFBRUEsSUFGRyxFQUFYOztBQUlBLFVBQUkrQixNQUFNLEdBQUdKLE1BQU0sQ0FBQyxDQUFELENBQW5COztBQUVBLFVBQUksQ0FBQ0ksTUFBTSxDQUFDRCxRQUFaLEVBQXNCO0FBQ3BCQyxjQUFNLENBQUNELFFBQVAsR0FBa0IsRUFBbEI7QUFDRDs7QUFFREMsWUFBTSxDQUFDRCxRQUFQLENBQWdCdEIsSUFBaEIsQ0FBcUJxQixJQUFyQjtBQUNELEtBcEVjLEVBQVAsQ0FBVjs7QUFzRUEsU0FBT0QsT0FBTyxDQUFDRSxRQUFmO0FBQ0QsQzs7QUFFY0osUyIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBIVE1MNSBQYXJzZXIgQnkgU2FtIEJsb3dlc1xuICpcbiAqIERlc2lnbmVkIGZvciBIVE1MNSBkb2N1bWVudHNcbiAqXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEpvaG4gUmVzaWcgKGVqb2huLm9yZylcbiAqIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9wdXJlLWphdmFzY3JpcHQtaHRtbC1wYXJzZXIvXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEVyaWsgQXJ2aWRzc29uLCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIExpY2Vuc2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBUaGlzIGNvZGUgaXMgdHJpcGxlIGxpY2Vuc2VkIHVzaW5nIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMCxcbiAqIE1vemlsbGEgUHVibGljIExpY2Vuc2Ugb3IgR05VIFB1YmxpYyBMaWNlbnNlXG4gKlxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90XG4gKiB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAqXG4gKiBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBzdWJqZWN0IHRvIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXG4gKiBWZXJzaW9uIDEuMSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW5cbiAqIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3Lm1vemlsbGEub3JnL01QTC9cbiAqXG4gKiBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCJcbiAqIGJhc2lzLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFRoZSBPcmlnaW5hbCBDb2RlIGlzIFNpbXBsZSBIVE1MIFBhcnNlci5cbiAqXG4gKiBUaGUgSW5pdGlhbCBEZXZlbG9wZXIgb2YgdGhlIE9yaWdpbmFsIENvZGUgaXMgRXJpayBBcnZpZHNzb24uXG4gKiBQb3J0aW9ucyBjcmVhdGVkIGJ5IEVyaWsgQXJ2aWRzc3NvbiBhcmUgQ29weXJpZ2h0IChDKSAyMDA0LiBBbGwgUmlnaHRzXG4gKiBSZXNlcnZlZC5cbiAqXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyXG4gKiBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3RyZWV0LCBGaWZ0aCBGbG9vciwgQm9zdG9uLCBNQSAgMDIxMTAtMTMwMSwgVVNBLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFVzYWdlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogLy8gVXNlIGxpa2Ugc286XG4gKiBIVE1MUGFyc2VyKGh0bWxTdHJpbmcsIHtcbiAqICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHt9LFxuICogICAgIGVuZDogZnVuY3Rpb24odGFnKSB7fSxcbiAqICAgICBjaGFyczogZnVuY3Rpb24odGV4dCkge30sXG4gKiAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge31cbiAqIH0pO1xuICpcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgc3RyaW5nOlxuICogSFRNTHRvWE1MKGh0bWxTdHJpbmcpO1xuICpcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgRE9NIERvY3VtZW50XG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZyk7XG4gKlxuICogLy8gb3IgdG8gaW5qZWN0IGludG8gYW4gZXhpc3RpbmcgZG9jdW1lbnQvRE9NIG5vZGVcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nLCBkb2N1bWVudCk7XG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZywgZG9jdW1lbnQuYm9keSk7XG4gKlxuICovXG4vLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbnZhciBzdGFydFRhZyA9IC9ePChbLUEtWmEtejAtOV9dKykoKD86XFxzK1thLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKD86XFxzKj1cXHMqKD86KD86XCJbXlwiXSpcIil8KD86J1teJ10qJyl8W14+XFxzXSspKT8pKilcXHMqKFxcLz8pPi87XG52YXIgZW5kVGFnID0gL148XFwvKFstQS1aYS16MC05X10rKVtePl0qPi87XG52YXIgYXR0ciA9IC8oW2EtekEtWl86XVstYS16QS1aMC05XzouXSopKD86XFxzKj1cXHMqKD86KD86XCIoKD86XFxcXC58W15cIl0pKilcIil8KD86JygoPzpcXFxcLnxbXiddKSopJyl8KFtePlxcc10rKSkpPy9nOyAvLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNVxuXG52YXIgZW1wdHkgPSBtYWtlTWFwKCdhcmVhLGJhc2UsYmFzZWZvbnQsYnIsY29sLGZyYW1lLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sZW1iZWQsY29tbWFuZCxrZXlnZW4sc291cmNlLHRyYWNrLHdicicpOyAvLyBCbG9jayBFbGVtZW50cyAtIEhUTUwgNVxuLy8gZml4ZWQgYnkgeHh4IOWwhiBpbnMg5qCH562+5LuO5Z2X57qn5ZCN5Y2V5Lit56e76ZmkXG5cbnZhciBibG9jayA9IG1ha2VNYXAoJ2EsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlzaW5kZXgsbGksbWFwLG1lbnUsbm9mcmFtZXMsbm9zY3JpcHQsb2JqZWN0LG9sLG91dHB1dCxwLHByZSxzZWN0aW9uLHNjcmlwdCx0YWJsZSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0cix1bCx2aWRlbycpOyAvLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MIDVcblxudmFyIGlubGluZSA9IG1ha2VNYXAoJ2FiYnIsYWNyb255bSxhcHBsZXQsYixiYXNlZm9udCxiZG8sYmlnLGJyLGJ1dHRvbixjaXRlLGNvZGUsZGVsLGRmbixlbSxmb250LGksaWZyYW1lLGltZyxpbnB1dCxpbnMsa2JkLGxhYmVsLG1hcCxvYmplY3QscSxzLHNhbXAsc2NyaXB0LHNlbGVjdCxzbWFsbCxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0ZXh0YXJlYSx0dCx1LHZhcicpOyAvLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cbi8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcblxudmFyIGNsb3NlU2VsZiA9IG1ha2VNYXAoJ2NvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cicpOyAvLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSB0aGVpciB2YWx1ZXMgZmlsbGVkIGluIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXG52YXIgZmlsbEF0dHJzID0gbWFrZU1hcCgnY2hlY2tlZCxjb21wYWN0LGRlY2xhcmUsZGVmZXIsZGlzYWJsZWQsaXNtYXAsbXVsdGlwbGUsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm93cmFwLHJlYWRvbmx5LHNlbGVjdGVkJyk7IC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxuXG52YXIgc3BlY2lhbCA9IG1ha2VNYXAoJ3NjcmlwdCxzdHlsZScpO1xuZnVuY3Rpb24gSFRNTFBhcnNlcihodG1sLCBoYW5kbGVyKSB7XG4gIHZhciBpbmRleDtcbiAgdmFyIGNoYXJzO1xuICB2YXIgbWF0Y2g7XG4gIHZhciBzdGFjayA9IFtdO1xuICB2YXIgbGFzdCA9IGh0bWw7XG5cbiAgc3RhY2subGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICB9O1xuXG4gIHdoaWxlIChodG1sKSB7XG4gICAgY2hhcnMgPSB0cnVlOyAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgc2NyaXB0IG9yIHN0eWxlIGVsZW1lbnRcblxuICAgIGlmICghc3RhY2subGFzdCgpIHx8ICFzcGVjaWFsW3N0YWNrLmxhc3QoKV0pIHtcbiAgICAgIC8vIENvbW1lbnRcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzwhLS0nKSA9PSAwKSB7XG4gICAgICAgIGluZGV4ID0gaHRtbC5pbmRleE9mKCctLT4nKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlmIChoYW5kbGVyLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBpbmRleCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhpbmRleCArIDMpO1xuICAgICAgICAgIGNoYXJzID0gZmFsc2U7XG4gICAgICAgIH0gLy8gZW5kIHRhZ1xuXG4gICAgICB9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZignPC8nKSA9PSAwKSB7XG4gICAgICAgIG1hdGNoID0gaHRtbC5tYXRjaChlbmRUYWcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2UoZW5kVGFnLCBwYXJzZUVuZFRhZyk7XG4gICAgICAgICAgY2hhcnMgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBzdGFydCB0YWdcblxuICAgICAgfSBlbHNlIGlmIChodG1sLmluZGV4T2YoJzwnKSA9PSAwKSB7XG4gICAgICAgIG1hdGNoID0gaHRtbC5tYXRjaChzdGFydFRhZyk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgbWF0Y2hbMF0ucmVwbGFjZShzdGFydFRhZywgcGFyc2VTdGFydFRhZyk7XG4gICAgICAgICAgY2hhcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcnMpIHtcbiAgICAgICAgaW5kZXggPSBodG1sLmluZGV4T2YoJzwnKTtcbiAgICAgICAgdmFyIHRleHQgPSBpbmRleCA8IDAgPyBodG1sIDogaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBodG1sID0gaW5kZXggPCAwID8gJycgOiBodG1sLnN1YnN0cmluZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIuY2hhcnMpIHtcbiAgICAgICAgICBoYW5kbGVyLmNoYXJzKHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFtcXFxcc1xcXFxTXSo/KTxcXC8nICsgc3RhY2subGFzdCgpICsgJ1tePl0qPicpLCBmdW5jdGlvbiAoYWxsLCB0ZXh0KSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT58PCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCAnJDEkMicpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyLmNoYXJzKSB7XG4gICAgICAgICAgaGFuZGxlci5jaGFycyh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICAgICAgcGFyc2VFbmRUYWcoJycsIHN0YWNrLmxhc3QoKSk7XG4gICAgfVxuXG4gICAgaWYgKGh0bWwgPT0gbGFzdCkge1xuICAgICAgdGhyb3cgJ1BhcnNlIEVycm9yOiAnICsgaHRtbDtcbiAgICB9XG5cbiAgICBsYXN0ID0gaHRtbDtcbiAgfSAvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHRhZ3NcblxuXG4gIHBhcnNlRW5kVGFnKCk7XG5cbiAgZnVuY3Rpb24gcGFyc2VTdGFydFRhZyh0YWcsIHRhZ05hbWUsIHJlc3QsIHVuYXJ5KSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChibG9ja1t0YWdOYW1lXSkge1xuICAgICAgd2hpbGUgKHN0YWNrLmxhc3QoKSAmJiBpbmxpbmVbc3RhY2subGFzdCgpXSkge1xuICAgICAgICBwYXJzZUVuZFRhZygnJywgc3RhY2subGFzdCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xvc2VTZWxmW3RhZ05hbWVdICYmIHN0YWNrLmxhc3QoKSA9PSB0YWdOYW1lKSB7XG4gICAgICBwYXJzZUVuZFRhZygnJywgdGFnTmFtZSk7XG4gICAgfVxuXG4gICAgdW5hcnkgPSBlbXB0eVt0YWdOYW1lXSB8fCAhIXVuYXJ5O1xuXG4gICAgaWYgKCF1bmFyeSkge1xuICAgICAgc3RhY2sucHVzaCh0YWdOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlci5zdGFydCkge1xuICAgICAgdmFyIGF0dHJzID0gW107XG4gICAgICByZXN0LnJlcGxhY2UoYXR0ciwgZnVuY3Rpb24gKG1hdGNoLCBuYW1lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6IGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6IGZpbGxBdHRyc1tuYW1lXSA/IG5hbWUgOiAnJztcbiAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZXNjYXBlZDogdmFsdWUucmVwbGFjZSgvKF58W15cXFxcXSlcIi9nLCAnJDFcXFxcXFxcIicpIC8vIFwiXG5cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZXIuc3RhcnQpIHtcbiAgICAgICAgaGFuZGxlci5zdGFydCh0YWdOYW1lLCBhdHRycywgdW5hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRW5kVGFnKHRhZywgdGFnTmFtZSkge1xuICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXG4gICAgaWYgKCF0YWdOYW1lKSB7XG4gICAgICB2YXIgcG9zID0gMDtcbiAgICB9IC8vIEZpbmQgdGhlIGNsb3Nlc3Qgb3BlbmVkIHRhZyBvZiB0aGUgc2FtZSB0eXBlXG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIHBvcyA9IHN0YWNrLmxlbmd0aCAtIDE7IHBvcyA+PSAwOyBwb3MtLSkge1xuICAgICAgICAgIGlmIChzdGFja1twb3NdID09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAvLyBDbG9zZSBhbGwgdGhlIG9wZW4gZWxlbWVudHMsIHVwIHRoZSBzdGFja1xuICAgICAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gcG9zOyBpLS0pIHtcbiAgICAgICAgaWYgKGhhbmRsZXIuZW5kKSB7XG4gICAgICAgICAgaGFuZGxlci5lbmQoc3RhY2tbaV0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xuXG5cbiAgICAgIHN0YWNrLmxlbmd0aCA9IHBvcztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgaXRlbXMgPSBzdHIuc3BsaXQoJywnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqW2l0ZW1zW2ldXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiByZW1vdmVET0NUWVBFKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPFxcP3htbC4qXFw/Plxcbi8sICcnKS5yZXBsYWNlKC88IWRvY3R5cGUuKj5cXG4vLCAnJykucmVwbGFjZSgvPCFET0NUWVBFLio+XFxuLywgJycpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKGF0dHJzKSB7XG4gIHJldHVybiBhdHRycy5yZWR1Y2UoZnVuY3Rpb24gKHByZSwgYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICBpZiAocHJlW25hbWVdKSB7XG5cdFx0XHRwcmVbbmFtZV0gPSBwcmVbbmFtZV0gKyBcIiBcIiArIHZhbHVlO1xuICAgIH0gZWxzZSB7XG5cdFx0XHRwcmVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XG4gIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xuICB2YXIgc3RhY2tzID0gW107XG4gIHZhciByZXN1bHRzID0ge1xuICAgIG5vZGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogW11cbiAgfTtcbiAgSFRNTFBhcnNlcihodG1sLCB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KHRhZywgYXR0cnMsIHVuYXJ5KSB7XG4gICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgbmFtZTogdGFnXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIG5vZGUuYXR0cnMgPSBwYXJzZUF0dHJzKGF0dHJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuYXJ5KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBzdGFja3NbMF0gfHwgcmVzdWx0cztcblxuICAgICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFja3MudW5zaGlmdChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gZW5kKHRhZykge1xuICAgICAgdmFyIG5vZGUgPSBzdGFja3Muc2hpZnQoKTtcbiAgICAgIGlmIChub2RlLm5hbWUgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xuXG4gICAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdO1xuXG4gICAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYXJzOiBmdW5jdGlvbiBjaGFycyh0ZXh0KSB7XG4gICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICB9O1xuXG4gICAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdO1xuXG4gICAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQodGV4dCkge1xuICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgIG5vZGU6ICdjb21tZW50JyxcbiAgICAgICAgdGV4dDogdGV4dFxuICAgICAgfTtcbiAgICAgIHZhciBwYXJlbnQgPSBzdGFja3NbMF07XG5cbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cy5jaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VIdG1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageTurning.nvue?vue&type=template&id=da557728& */ 58);\n/* harmony import */ var _pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageTurning.nvue?vue&type=script&lang=js& */ 60);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./pageTurning.nvue?vue&type=style&index=0&lang=css& */ 62).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./pageTurning.nvue?vue&type=style&index=0&lang=css& */ 62).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4087e361\",\n  false,\n  _pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/pageTurning/pageTurning.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZEQUFxRDtBQUN6RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkRBQXFEO0FBQzlHOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcGFnZVR1cm5pbmcubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYTU1NzcyOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhZ2VUdXJuaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2VUdXJuaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9wYWdlVHVybmluZy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3BhZ2VUdXJuaW5nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0MDg3ZTM2MVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3BhZ2VUdXJuaW5nL3BhZ2VUdXJuaW5nLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!*******************************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=template&id=da557728& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pageTurning.nvue?vue&type=template&id=da557728& */ 59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_template_id_da557728___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 59 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=template&id=da557728& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["box"],
      style:
        "height:" +
        (_vm.readerHeight - 30) +
        "px;top:" +
        (_vm.screenTop + 30) +
        "px;",
      attrs: { id: "box" },
      on: { touchstart: _vm.start }
    },
    [
      _c(
        "view",
        {
          staticClass: ["content"],
          style: "height:" + (_vm.readerHeight - 30) + "px;left:" + 0 + "upx;",
          attrs: { id: "content" }
        },
        _vm._l(_vm.bookContent, function(item, index) {
          return _c("u-text", { key: index, staticClass: ["p"] }, [
            _vm._v(_vm._s(item.name == "p" ? item.children[0].text : ""))
          ])
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 60 */
/*!*************************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pageTurning.nvue?vue&type=script&lang=js& */ 61);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtqQixDQUFnQiw0akJBQUcsRUFBQyIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWdlVHVybmluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZVR1cm5pbmcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      screenHeight: 0, //整个页面高度\n      screenTop: 0, //顶部菜单栏高度\n      readerHeight: 0, //安全区高度\n      screenWidth: 0,\n      pageIndex: 0 };\n\n  },\n  props: {\n    bookContent: {\n      type: Object,\n      default: {} } },\n\n\n  computed: {\n    // 计算属性的 getter\n    pageAttr: function pageAttr() {\n      // return this.paheight();\n      var content = uni.createSelectorQuery().select('#content');\n      content.boundingClientRect(function (data) {\n        __f__(\"log\", data.height, \" at components/pageTurning/pageTurning.nvue:33\");\n        // this.boxHeight = Math.floor(data.height / 26) * 26\n        // console.log('boxHeight', this.boxHeight)\n      }).exec();\n      return this.bookContent;\n    } },\n\n\n  created: function created() {\n    var sys = uni.getSystemInfoSync();\n    this.readerHeight = sys.safeArea.height;\n    this.screenTop = sys.safeAreaInsets.top;\n    this.screenHeight = sys.windowHeight;\n    this.screenWidth = sys.windowWidth;\n\n\n  },\n  methods: {\n    getEl: function getEl(el) {\n      if (typeof el === 'string' || typeof el === 'number') return el;\n      if (WXEnvironment) {\n        return el.ref;\n      } else {\n        return el instanceof HTMLElement ? el : el.$el;\n      }\n    },\n    start: function start(e) {\n      __f__(\"log\", this.bookContent, \" at components/pageTurning/pageTurning.nvue:60\");\n      var x = e.touches[0].screenX;\n      var critical = this.screenWidth / 2;\n      __f__(\"log\", x, \" at components/pageTurning/pageTurning.nvue:63\");\n      if (x > critical) {\n        __f__(\"log\", '下一页', \" at components/pageTurning/pageTurning.nvue:65\");\n        this.pageIndex++;\n      } else if (x < critical) {\n        __f__(\"log\", '上一页', \" at components/pageTurning/pageTurning.nvue:68\");\n        this.pageIndex--;\n      }\n\n\n\n    },\n    paheight: function paheight() {\n      var temp = [];\n      var nowAttr = [];\n      this.bookContent.forEach(function (item) {\n        if (item.name == 'p') {\n          nowAttr.push({\n            type: item.children[0].type,\n            text: item.children[0].text });\n\n        }\n      });\n      var rowfontNum = parseInt((this.screenWidth - 30 * 2) / 18); //每行字数\n      // console.log(rowfontNum)\n\n      var pageRowNum = 10; //每页的行数\n      var startIndex = 0; //字符串起始索引\n      var readerHeight = this.readerHeight; //总高度\n      var attrIndex = 0;\n      var rowTotality = parseInt((readerHeight - 30 * 2) / 30); //每页的能显示的行数  根据设备高度-内边距/每行高度 算出\n      __f__(\"log\", rowTotality, \" at components/pageTurning/pageTurning.nvue:94\");\n      var thenRowNumy = 0; //每页已显示的行数\n      var tempIndex = 0; //每页索引\n\n      var ss = true;\n\n      function loop() {\n\n        if (attrIndex >= nowAttr.length) {\n          loop = null;\n          return;\n        }\n        var attrRowNum = Math.ceil(nowAttr[attrIndex].text.length / rowfontNum); //每个数组的文字的行数\n        thenRowNumy += attrRowNum;\n        // console.log('thenRowNumy--'+thenRowNumy)\n        if (thenRowNumy < rowTotality) {\n          // 缓存数组，此页可以完整现在这个数组的内容\t\n          if (!temp[tempIndex]) {\n            temp[tempIndex] = [];\n          }\n\n          if (nowAttr[attrIndex]) {\n            temp[tempIndex].push(nowAttr[attrIndex]);\n          }\n          attrIndex++;\n          loop();\n        } else {\n\n          var s_string = rowfontNum * (rowTotality - thenRowNumy);\n          if (nowAttr[attrIndex]) {\n            if (nowAttr[attrIndex].text.length > s_string) {\n              temp[tempIndex].push({\n                type: nowAttr[attrIndex].type,\n                text: nowAttr[attrIndex].text.slice(0, s_string) });\n\n              if (nowAttr[attrIndex + 1]) {\n                nowAttr[attrIndex + 1].text.slice(s_string, nowAttr[attrIndex + 1].text.length - 1);\n              }\n            } else {\n              temp[tempIndex].push({\n                type: nowAttr[attrIndex].type,\n                text: nowAttr[attrIndex].text });\n\n              // if(nowAttr[attrIndex].text.length)\n\n            }\n\n          }\n\n\n\n          tempIndex++;\n          thenRowNumy = 0;\n          loop();\n          return;\n        }\n\n\n\n      }\n\n      loop();\n\n      __f__(\"log\", temp, \" at components/pageTurning/pageTurning.nvue:157\");\n      return temp;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9wYWdlVHVybmluZy9wYWdlVHVybmluZy5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBLEVBQ0E7QUFDQSxrQkFGQSxFQUVBO0FBQ0EscUJBSEEsRUFHQTtBQUNBLG9CQUpBO0FBS0Esa0JBTEE7O0FBT0EsR0FUQTtBQVVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREEsRUFWQTs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxJQUpBO0FBS0E7QUFDQSxLQVhBLEVBaEJBOzs7QUE4QkEsU0E5QkEscUJBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsR0F0Q0E7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0EsU0FUQSxpQkFTQSxDQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLEtBeEJBO0FBeUJBLFlBekJBLHNCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBOztBQUlBO0FBQ0EsT0FQQTtBQVFBLGtFQVhBLENBV0E7QUFDQTs7QUFFQSwwQkFkQSxDQWNBO0FBQ0EseUJBZkEsQ0FlQTtBQUNBLDJDQWhCQSxDQWdCQTtBQUNBO0FBQ0EsK0RBbEJBLENBa0JBO0FBQ0E7QUFDQSwwQkFwQkEsQ0FvQkE7QUFDQSx3QkFyQkEsQ0FxQkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWEEsTUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQURBO0FBRUEsZ0VBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsYUFSQSxNQVFBO0FBQ0E7QUFDQSw2Q0FEQTtBQUVBLDZDQUZBOztBQUlBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQTdHQSxFQXZDQSxFIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImJveFwiIGlkPVwiYm94XCIgOnN0eWxlPVwiYGhlaWdodDoke3JlYWRlckhlaWdodC0zMH1weDt0b3A6JHtzY3JlZW5Ub3ArMzB9cHg7YFwiIEB0b3VjaHN0YXJ0PVwic3RhcnRcIj5cblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIiBpZD1cImNvbnRlbnRcIiA6c3R5bGU9XCJgaGVpZ2h0OiR7cmVhZGVySGVpZ2h0LTMwfXB4O2xlZnQ6JHswfXVweDtgXCIgPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJwXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gYm9va0NvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIj57e2l0ZW0ubmFtZT09J3AnP2l0ZW0uY2hpbGRyZW5bMF0udGV4dDonJ319PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OiAwLCAvL+aVtOS4qumhtemdoumrmOW6plxuXHRcdFx0XHRzY3JlZW5Ub3A6IDAsIC8v6aG26YOo6I+c5Y2V5qCP6auY5bqmXG5cdFx0XHRcdHJlYWRlckhlaWdodDogMCwgLy/lronlhajljLrpq5jluqZcblx0XHRcdFx0c2NyZWVuV2lkdGg6IDAsXG5cdFx0XHRcdHBhZ2VJbmRleDogMCxcblx0XHRcdH1cblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHRib29rQ29udGVudDoge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQ6IHt9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC8vIOiuoeeul+WxnuaAp+eahCBnZXR0ZXJcblx0XHRcdHBhZ2VBdHRyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gcmV0dXJuIHRoaXMucGFoZWlnaHQoKTtcblx0XHRcdHZhciBjb250ZW50ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJyNjb250ZW50Jyk7XG5cdFx0XHRjb250ZW50LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5oZWlnaHQpXG5cdFx0XHQgICAgICAgIC8vIHRoaXMuYm94SGVpZ2h0ID0gTWF0aC5mbG9vcihkYXRhLmhlaWdodCAvIDI2KSAqIDI2XG5cdFx0XHQgICAgICAgIC8vIGNvbnNvbGUubG9nKCdib3hIZWlnaHQnLCB0aGlzLmJveEhlaWdodClcblx0XHRcdCAgICAgIH0pLmV4ZWMoKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib29rQ29udGVudFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Y29uc3Qgc3lzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFx0XHR0aGlzLnJlYWRlckhlaWdodCA9IHN5cy5zYWZlQXJlYS5oZWlnaHQ7XG5cdFx0XHR0aGlzLnNjcmVlblRvcCA9IHN5cy5zYWZlQXJlYUluc2V0cy50b3A7XG5cdFx0XHR0aGlzLnNjcmVlbkhlaWdodCA9IHN5cy53aW5kb3dIZWlnaHQ7XG5cdFx0XHR0aGlzLnNjcmVlbldpZHRoID0gc3lzLndpbmRvd1dpZHRoO1xuXHRcdFx0XG5cdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRnZXRFbDogZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsID09PSAnbnVtYmVyJykgcmV0dXJuIGVsO1xuXHRcdFx0XHRpZiAoV1hFbnZpcm9ubWVudCkge1xuXHRcdFx0XHRcdHJldHVybiBlbC5yZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbCA6IGVsLiRlbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHN0YXJ0KGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5ib29rQ29udGVudClcblx0XHRcdFx0Y29uc3QgeCA9IGUudG91Y2hlc1swXS5zY3JlZW5YO1xuXHRcdFx0XHRjb25zdCBjcml0aWNhbCA9IHRoaXMuc2NyZWVuV2lkdGggLyAyO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh4KVxuXHRcdFx0XHRpZiAoeCA+IGNyaXRpY2FsKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+S4i+S4gOmhtScpXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5kZXgrKztcblx0XHRcdFx0fSBlbHNlIGlmICh4IDwgY3JpdGljYWwpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5LiK5LiA6aG1Jylcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmRleC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcblxuXHRcdFx0fSxcblx0XHRcdHBhaGVpZ2h0KCkge1xuXHRcdFx0XHR2YXIgdGVtcCA9IFtdO1xuXHRcdFx0XHR2YXIgbm93QXR0ciA9IFtdO1xuXHRcdFx0XHR0aGlzLmJvb2tDb250ZW50LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGl0ZW0ubmFtZSA9PSAncCcpIHtcblx0XHRcdFx0XHRcdG5vd0F0dHIucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IGl0ZW0uY2hpbGRyZW5bMF0udHlwZSxcblx0XHRcdFx0XHRcdFx0dGV4dDogaXRlbS5jaGlsZHJlblswXS50ZXh0XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHZhciByb3dmb250TnVtID0gcGFyc2VJbnQoKHRoaXMuc2NyZWVuV2lkdGggLSAoMzAgKiAyKSkgLyAxOCk7IC8v5q+P6KGM5a2X5pWwXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJvd2ZvbnROdW0pXG5cblx0XHRcdFx0dmFyIHBhZ2VSb3dOdW0gPSAxMDsgLy/mr4/pobXnmoTooYzmlbBcblx0XHRcdFx0dmFyIHN0YXJ0SW5kZXggPSAwOyAvL+Wtl+espuS4sui1t+Wni+e0ouW8lVxuXHRcdFx0XHR2YXIgcmVhZGVySGVpZ2h0ID0gdGhpcy5yZWFkZXJIZWlnaHQ7IC8v5oC76auY5bqmXG5cdFx0XHRcdHZhciBhdHRySW5kZXggPSAwO1xuXHRcdFx0XHR2YXIgcm93VG90YWxpdHkgPSBwYXJzZUludCgocmVhZGVySGVpZ2h0IC0gKDMwICogMikpIC8gMzApOyAvL+avj+mhteeahOiDveaYvuekuueahOihjOaVsCAg5qC55o2u6K6+5aSH6auY5bqmLeWGhei+uei3nS/mr4/ooYzpq5jluqYg566X5Ye6XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJvd1RvdGFsaXR5KVxuXHRcdFx0XHR2YXIgdGhlblJvd051bXkgPSAwOyAvL+avj+mhteW3suaYvuekuueahOihjOaVsFxuXHRcdFx0XHR2YXIgdGVtcEluZGV4ID0gMDsgLy/mr4/pobXntKLlvJVcblxuXHRcdFx0XHR2YXIgc3MgPSB0cnVlO1xuXG5cdFx0XHRcdGZ1bmN0aW9uIGxvb3AoKSB7XG5cblx0XHRcdFx0XHRpZiAoYXR0ckluZGV4ID49IG5vd0F0dHIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRsb29wID0gbnVsbFxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBhdHRyUm93TnVtID0gTWF0aC5jZWlsKG5vd0F0dHJbYXR0ckluZGV4XS50ZXh0Lmxlbmd0aCAvIHJvd2ZvbnROdW0pOyAvL+avj+S4quaVsOe7hOeahOaWh+Wtl+eahOihjOaVsFxuXHRcdFx0XHRcdHRoZW5Sb3dOdW15ICs9IGF0dHJSb3dOdW07XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoZW5Sb3dOdW15LS0nK3RoZW5Sb3dOdW15KVxuXHRcdFx0XHRcdGlmICh0aGVuUm93TnVteSA8IHJvd1RvdGFsaXR5KSB7XG5cdFx0XHRcdFx0XHQvLyDnvJPlrZjmlbDnu4TvvIzmraTpobXlj6/ku6XlrozmlbTnjrDlnKjov5nkuKrmlbDnu4TnmoTlhoXlrrlcdFxuXHRcdFx0XHRcdFx0aWYgKCF0ZW1wW3RlbXBJbmRleF0pIHtcblx0XHRcdFx0XHRcdFx0dGVtcFt0ZW1wSW5kZXhdID0gW11cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKG5vd0F0dHJbYXR0ckluZGV4XSkge1xuXHRcdFx0XHRcdFx0XHR0ZW1wW3RlbXBJbmRleF0ucHVzaChub3dBdHRyW2F0dHJJbmRleF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YXR0ckluZGV4Kys7XG5cdFx0XHRcdFx0XHRsb29wKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0dmFyIHNfc3RyaW5nID0gcm93Zm9udE51bSAqIChyb3dUb3RhbGl0eSAtIHRoZW5Sb3dOdW15KTtcblx0XHRcdFx0XHRcdGlmIChub3dBdHRyW2F0dHJJbmRleF0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKG5vd0F0dHJbYXR0ckluZGV4XS50ZXh0Lmxlbmd0aCA+IHNfc3RyaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGVtcFt0ZW1wSW5kZXhdLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbm93QXR0clthdHRySW5kZXhdLnR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBub3dBdHRyW2F0dHJJbmRleF0udGV4dC5zbGljZSgwLCBzX3N0cmluZylcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAobm93QXR0clthdHRySW5kZXggKyAxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bm93QXR0clthdHRySW5kZXggKyAxXS50ZXh0LnNsaWNlKHNfc3RyaW5nLCBub3dBdHRyW2F0dHJJbmRleCArIDFdLnRleHQubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGVtcFt0ZW1wSW5kZXhdLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbm93QXR0clthdHRySW5kZXhdLnR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBub3dBdHRyW2F0dHJJbmRleF0udGV4dFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGlmKG5vd0F0dHJbYXR0ckluZGV4XS50ZXh0Lmxlbmd0aClcblxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH1cblxuXG5cblx0XHRcdFx0XHRcdHRlbXBJbmRleCsrO1xuXHRcdFx0XHRcdFx0dGhlblJvd051bXkgPSAwO1xuXHRcdFx0XHRcdFx0bG9vcCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9vcCgpO1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXApXG5cdFx0XHRcdHJldHVybiB0ZW1wXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5ib3gge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHR3aWR0aDogNzUwdXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkYmQyY2Q7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogNzUwdXB4O1xuXG5cdFx0cGFkZGluZzogMzBweDtcblx0XHQvKiBoZWlnaHQ6IDIwMHB4OyAqL1xuXHRcdFxuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQucCB7XG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdGNvbG9yOiAjMjMxYjEwO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!*********************************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pageTurning.nvue?vue&type=style&index=0&lang=css& */ 63);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pageTurning_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/components/pageTurning/pageTurning.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "750upx",
    "backgroundColor": "#dbd2cd",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "content": {
    "position": "absolute",
    "left": 0,
    "width": "750upx",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "overflow": "hidden"
  },
  "p": {
    "lineHeight": "30",
    "fontSize": "18",
    "color": "#231b10"
  }
}

/***/ }),
/* 64 */
/*!*****************************************************************************************************************!*\
  !*** /Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./reader.nvue?vue&type=style&index=0&lang=css&mpType=page */ 65);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_reader_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/lbr/code/gitCode/book-uni-app/pages/reader/reader.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "position": "absolute",
    "left": 0,
    "width": "750upx",
    "backgroundColor": "#dbd2cd"
  },
  "reader": {
    "backgroundColor": "#dbd2cd",
    "color": "#231b10",
    "width": "750upx"
  },
  "directory-pop": {
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(255,255,255,1)",
    "zIndex": 10,
    "top": 0,
    "width": "600upx",
    "transform": "translate(-750upx,0)"
  },
  "hide": {
    "transform": "translateX(-750upx)"
  },
  "show": {
    "transform": "none"
  },
  "directory-list": {
    "position": "absolute",
    "left": 0,
    "width": "600upx"
  },
  "directory-item": {
    "lineHeight": "80upx",
    "height": "80upx",
    "fontSize": "30upx",
    "borderBottomWidth": "1",
    "borderBottomColor": "#eeeeee",
    "paddingLeft": "30upx",
    "paddingRight": "30upx"
  },
  "p": {
    "marginBottom": "20",
    "lineHeight": "30",
    "fontSize": "18"
  },
  "directoryTitle": {
    "fontSize": "12",
    "lineHeight": "30",
    "position": "absolute",
    "paddingLeft": "20",
    "paddingRight": "20",
    "left": 0
  },
  "console-pop": {
    "position": "absolute",
    "width": "750upx",
    "left": 0,
    "top": 0
  },
  "console-pop-bg": {
    "position": "absolute",
    "width": "750upx",
    "left": 0,
    "top": 0,
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "console-pop-top": {
    "position": "absolute",
    "width": "750upx",
    "left": 0,
    "top": 0,
    "backgroundColor": "#dbd7d4"
  },
  "console-pop-bottom": {
    "position": "absolute",
    "width": "750upx",
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#dbd7d4"
  },
  "console-btn": {
    "height": "50",
    "lineHeight": "50",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1
  },
  "console-pop-top-content": {
    "width": "750upx",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content-box": {
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "title": {
    "color": "#9c7729",
    "fontSize": "30upx",
    "width": "400upx",
    "height": "50",
    "lineHeight": "50",
    "textAlign": "center"
  },
  "back-btn": {
    "width": "100upx",
    "height": "50",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "directory-btn": {
    "width": "100upx",
    "height": "50",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "right": 0,
    "top": 0
  },
  "console-img": {
    "width": "20",
    "height": "20"
  },
  "previousTouth": {
    "position": "absolute",
    "left": 0,
    "width": "300upx",
    "height": "300upx",
    "top": 0
  },
  "nextTouth": {
    "position": "absolute",
    "right": 0,
    "width": "300upx",
    "height": "300upx",
    "top": 0
  },
  "menuTouth": {
    "position": "absolute",
    "left": "300upx",
    "width": "150upx",
    "height": "300upx",
    "top": 0
  }
}

/***/ })
/******/ ]);