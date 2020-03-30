webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./components/PodcastList.jsx":
/*!************************************!*\
  !*** ./components/PodcastList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PodcastList(_ref) {
  var podcasts = _ref.podcasts;
  return __jsx("div", null, podcasts.map(function (podcast) {
    return __jsx(Link, {
      href: "/podcast?id=".concat(podcast.id)
    }, __jsx("a", {
      href: "podcast"
    }, __jsx("h3", null, podcast.title), __jsx("div", {
      className: "meta"
    }, Math.ceil(podcast.duration / 60), " minutes")));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

/***/ })

})
//# sourceMappingURL=channel.js.4b9edece4e2e1b153cbc.hot-update.js.map