(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\users.js"],{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Skynet\\React\\nextjs\\components\\UserList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function UserList(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Name: ", props.name), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Country: ", props.country));
}

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fusers&absolutePagePath=C%3A%5CSkynet%5CReact%5Cnextjs%5Cpages%5Cusers%5Cindex.js!./":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fusers&absolutePagePath=C%3A%5CSkynet%5CReact%5Cnextjs%5Cpages%5Cusers%5Cindex.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/users", function() {
      var page = __webpack_require__(/*! ./pages/users/index.js */ "./pages/users/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/users/index.js */ "./pages/users/index.js", function() {
          if(!next.router.components["/users"]) return
          var updatedPage = __webpack_require__(/*! ./pages/users/index.js */ "./pages/users/index.js")
          next.router.update("/users", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/users/index.js":
/*!******************************!*\
  !*** ./pages/users/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserList */ "./components/UserList.js");
var _jsxFileName = "C:\\Skynet\\React\\nextjs\\pages\\users\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Welcome to user page"), __jsx(_components_UserList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "John Connor",
    country: "US",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fusers&absolutePagePath=C%3A%5CSkynet%5CReact%5Cnextjs%5Cpages%5Cusers%5Cindex.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fusers&absolutePagePath=C%3A%5CSkynet%5CReact%5Cnextjs%5Cpages%5Cusers%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fusers&absolutePagePath=C%3A%5CSkynet%5CReact%5Cnextjs%5Cpages%5Cusers%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_01f9a3fa864a7b7414d8":
/*!*******************************************!*\
  !*** external "dll_01f9a3fa864a7b7414d8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_01f9a3fa864a7b7414d8;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=users.js.map