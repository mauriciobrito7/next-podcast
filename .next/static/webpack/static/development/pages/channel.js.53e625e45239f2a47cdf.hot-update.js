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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PodcastList(_ref) {
  var podcasts = _ref.podcasts,
      onclickPodcast = _ref.onclickPodcast;
  return __jsx("div", null, podcasts.map(function (podcast) {
    return __jsx("a", {
      href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.title), ".").concat(podcast.id),
      className: "podcast",
      onClick: function onClick(event) {
        return onclickPodcast(event, podcast);
      }
    }, __jsx("h3", null, podcast.title), __jsx("div", {
      className: "meta"
    }, Math.ceil(podcast.duration / 60), " minutes"));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

/***/ })

})
//# sourceMappingURL=channel.js.53e625e45239f2a47cdf.hot-update.js.map