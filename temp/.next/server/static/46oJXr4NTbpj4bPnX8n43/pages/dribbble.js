module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("POXy");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "POXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dribbble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WAVb");
/* harmony import */ var _common_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TM6b");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DribbblePage = ({
  dribbbleImages
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {});
  return __jsx("div", null, __jsx(_components_dribbble__WEBPACK_IMPORTED_MODULE_1__[/* Dribbble */ "a"], {
    dribbbleImages: dribbbleImages
  }));
};

DribbblePage.getInitialProps = async ({}) => {
  const dribbbleJson = await Object(_common_server__WEBPACK_IMPORTED_MODULE_2__[/* getData */ "a"])(`${_common_server__WEBPACK_IMPORTED_MODULE_2__[/* server */ "b"]}/api/dribbble`);
  return {
    dribbbleImages: dribbbleJson
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DribbblePage);

/***/ }),

/***/ "TM6b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
const server = "https://news.ultr.dev";

const tryParseJSON = jsonString => {
  try {
    var o = JSON.parse(jsonString);

    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}

  return null;
};

const getData = async endpoint => {
  const res = await fetch(endpoint);
  const result = await res;
  if (!result.ok) return null;
  return result.json();
};

if (false) {}

/***/ }),

/***/ "WAVb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dribbble; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Dribbble({
  dribbbleImages
}) {
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(dribbbleImages);
  return __jsx("div", {
    className: "jsx-4055037891" + " " + "dribbble"
  }, items === null || items === undefined ? __jsx("div", {
    className: "jsx-4055037891"
  }, "Fail") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, items.map((item, i) => {
    return __jsx("a", {
      key: i,
      href: `https://dribbble.com${item.Url}`,
      className: "jsx-4055037891"
    }, __jsx("img", {
      src: item.Image + "?compress=1&resize=400x300",
      className: "jsx-4055037891"
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4055037891"
  }, [".dribbble.jsx-4055037891{display:grid;grid-template-columns:repeat( auto-fit,minmax(200px,1fr) );gap:1rem;}", "@media(min-width:1400px){.dribbble.jsx-4055037891{grid-template-columns:repeat( auto-fit,minmax(25%,1fr) );}}", ".dribbble.jsx-4055037891 a.jsx-4055037891{display:block;}", ".dribbble.jsx-4055037891 img.jsx-4055037891{width:100%: display:block;width:100%;max-width:100%;}"]));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });