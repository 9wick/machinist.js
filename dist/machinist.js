var Machinist =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack://Machinist/./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/classes/Machinist.js":
/*!**********************************!*\
  !*** ./src/classes/Machinist.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\nconst Metric = __webpack_require__(/*! ./Metric */ \"./src/classes/Metric.js\");\n\nclass Machinist {\n  constructor(agent, api_key, options = {}) {\n    this.api_key = api_key;\n    this.agent = agent;\n    this.metrics = [];\n  }\n\n  addMetric(name, value, options = {}) {\n    const metric = new Metric(name, value, options);\n    this.metrics.push(metric);\n    return metric;\n  }\n\n  post() {\n    const options = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        Authorization: `Bearer ${this.api_key}`,\n      },\n      body: JSON.stringify(this),\n    };\n\n    this.metrics = [];\n\n    return fetch('https://gw.machinist.iij.jp/endpoint', options);\n  }\n\n  toJson() {\n    let obj = {\n      agent: this.agent,\n      metrics: this.metrics,\n    };\n    return obj;\n  }\n}\n\nmodule.exports = Machinist;\n\n\n//# sourceURL=webpack://Machinist/./src/classes/Machinist.js?");

/***/ }),

/***/ "./src/classes/Metric.js":
/*!*******************************!*\
  !*** ./src/classes/Metric.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Metric {\n  constructor(name, value, { namespace, tags = [], timestamp } = {}) {\n    this.name = name;\n    this.namespace = namespace;\n    this.tags = [];\n    this.value = value;\n    this.timestamp = timestamp || new Date().getTime();\n  }\n\n  toJSON() {\n    let obj = {\n      name: this.name,\n      data_point: {\n        value: this.value,\n      },\n    };\n\n    if (this.namespace) {\n      obj.namespace = this.namespace;\n    }\n    if (this.tags.length > 0) {\n      obj.tags = this.tags;\n    }\n    // if (this.timestamp) {\n    //   obj.data_point.timestamp = this.timestamp;\n    // }\n    return obj;\n  }\n}\n\nmodule.exports = Metric;\n\n\n//# sourceURL=webpack://Machinist/./src/classes/Metric.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./classes/Machinist */ \"./src/classes/Machinist.js\");\n\n\n//# sourceURL=webpack://Machinist/./src/index.js?");

/***/ })

/******/ });