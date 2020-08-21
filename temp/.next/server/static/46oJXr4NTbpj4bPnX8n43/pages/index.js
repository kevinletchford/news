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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1EPu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rss; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Rss({
  title,
  columns,
  rssLinks
}) {
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(rssLinks);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]]) + " " + "rss"
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]])
  }, title), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]]) + " " + "columns"
  }, items === null || items === undefined ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]])
  }, "Fail") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, items.map((item, i) => {
    return __jsx("div", {
      key: i,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]])
    }, __jsx("a", {
      href: item.Link,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2778489068", [columns]]])
    }, item.Title));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2778489068",
    dynamic: [columns]
  }, ["a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:6px;margin-bottom:0.75rem;background:var(--button-background);overflow:hidden;padding:0.5rem 1rem;}", `.columns.__jsx-style-dynamic-selector{-webkit-column-count:${columns};column-count:${columns};}`]));
}

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dribbble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WAVb");
/* harmony import */ var _components_hackernews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkCa");
/* harmony import */ var _components_rss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1EPu");
/* harmony import */ var _common_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TM6b");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = ({
  dribbbleImages,
  hackerLinks,
  coDrops,
  cssTricks
}) => {
  return __jsx("div", null, __jsx("div", {
    className: "grid"
  }, __jsx(_components_dribbble__WEBPACK_IMPORTED_MODULE_1__[/* Dribbble */ "a"], {
    dribbbleImages: dribbbleImages
  }), __jsx("div", null, __jsx(_components_rss__WEBPACK_IMPORTED_MODULE_3__[/* Rss */ "a"], {
    title: "CSS Tricks",
    rssLinks: cssTricks
  }), __jsx(_components_rss__WEBPACK_IMPORTED_MODULE_3__[/* Rss */ "a"], {
    title: "CoDrops",
    columns: 2,
    rssLinks: coDrops
  })), __jsx(_components_hackernews__WEBPACK_IMPORTED_MODULE_2__[/* HackerNews */ "a"], {
    hackerLinks: hackerLinks
  })));
};

Home.getInitialProps = async ({}) => {
  const dribbbleJson = await Object(_common_server__WEBPACK_IMPORTED_MODULE_4__[/* getData */ "a"])(`${_common_server__WEBPACK_IMPORTED_MODULE_4__[/* server */ "b"]}/api/dribbble`);
  const hackerJson = await Object(_common_server__WEBPACK_IMPORTED_MODULE_4__[/* getData */ "a"])(`${_common_server__WEBPACK_IMPORTED_MODULE_4__[/* server */ "b"]}/api/hackernews`);
  const cssTricks = await Object(_common_server__WEBPACK_IMPORTED_MODULE_4__[/* getData */ "a"])(`${_common_server__WEBPACK_IMPORTED_MODULE_4__[/* server */ "b"]}/api/rss?rssfeed=https://css-tricks.com/feed/`);
  const coDrops = await Object(_common_server__WEBPACK_IMPORTED_MODULE_4__[/* getData */ "a"])(`${_common_server__WEBPACK_IMPORTED_MODULE_4__[/* server */ "b"]}/api/rss?rssfeed=https://tympanus.net/codrops/collective/feed/`);
  return {
    dribbbleImages: dribbbleJson,
    hackerLinks: hackerJson,
    cssTricks: cssTricks,
    coDrops: coDrops
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JkCa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HackerNews; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./svg/comment-alt-dots-solid.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_default.a.createElement("path", {
  fill: "currentColor",
  d: "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM128 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
});

var comment_alt_dots_solid_SvgCommentAltDotsSolid = function SvgCommentAltDotsSolid(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "comment-alt-dots",
    className: "comment-alt-dots-solid_svg__svg-inline--fa comment-alt-dots-solid_svg__fa-comment-alt-dots comment-alt-dots-solid_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ var comment_alt_dots_solid = (comment_alt_dots_solid_SvgCommentAltDotsSolid);
// CONCATENATED MODULE: ./components/hackernews.tsx

var __jsx = external_react_default.a.createElement;


function HackerNews({
  hackerLinks
}) {
  const {
    0: items,
    1: setItems
  } = Object(external_react_["useState"])(hackerLinks);
  return __jsx("div", {
    className: "jsx-2042237501" + " " + "hacker-news"
  }, __jsx("h2", {
    className: "jsx-2042237501"
  }, "Hacker News"), items === null || items === undefined ? __jsx("div", {
    className: "jsx-2042237501"
  }, "Fail") : __jsx(external_react_default.a.Fragment, null, items.map((item, i) => {
    return __jsx("div", {
      key: i,
      className: "jsx-2042237501" + " " + "story"
    }, __jsx("a", {
      href: item.Url,
      className: "jsx-2042237501"
    }, __jsx("span", {
      className: "jsx-2042237501" + " " + "score"
    }, item.Score), __jsx("span", {
      className: "jsx-2042237501" + " " + "text"
    }, item.Text)), __jsx("a", {
      href: `https://news.ycombinator.com/item?id=${item.Id}`,
      className: "jsx-2042237501" + " " + "comments"
    }, __jsx(comment_alt_dots_solid, null)));
  })), __jsx(style_default.a, {
    id: "2042237501"
  }, [".story.jsx-2042237501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:6px;margin-bottom:0.75rem;background:var(--button-background);overflow:hidden;padding:0;}", "a.jsx-2042237501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0;-webkit-flex:1;-ms-flex:1;flex:1;}", ".comments.jsx-2042237501{font-size:1.5rem;font-weight:900;padding:0.5rem;color:var(--highlight-text);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:unset;-ms-flex:unset;flex:unset;}", ".score.jsx-2042237501{font-size:1.5rem;min-width:82px;font-weight:900;padding:0.5rem;background:var(--highlight);color:var(--highlight-text);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".text.jsx-2042237501{padding:1rem;display:block;}"]));
}

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