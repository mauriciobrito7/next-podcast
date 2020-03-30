webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ChannelGrid.jsx":
/*!************************************!*\
  !*** ./components/ChannelGrid.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ChannelGrid(_ref) {
  var channels = _ref.channels;
  return __jsx("div", {
    className: "jsx-522026815" + " " + "channels"
  }, channels.map(function (channel) {
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: channel.id,
      route: "channel",
      params: {
        slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(channel.title),
        id: channel.id
      }
    }, __jsx("a", {
      className: "jsx-522026815" + " " + "channel"
    }, __jsx("img", {
      src: channel.urls.logo_image.original,
      alt: "channel",
      className: "jsx-522026815"
    }), __jsx("h2", {
      className: "jsx-522026815"
    }, channel.title)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "522026815"
  }, ".channels.jsx-522026815{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-522026815{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-522026815 img.jsx-522026815{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWF1cmljaW9cXERvY3VtZW50c1xcR2l0aHViXFxteUZpcnN0TmV4dEFwcFxcY29tcG9uZW50c1xcQ2hhbm5lbEdyaWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCa0IsQUFHd0IsQUFNQyxBQU1ILFdBQ2IsRUFaZ0IsQ0FNSSxhQUxMLEtBTThCLFFBTGlCLGdDQU14QyxvQkFDdEIsTUFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1hdXJpY2lvXFxEb2N1bWVudHNcXEdpdGh1YlxcbXlGaXJzdE5leHRBcHBcXGNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCBzbHVnIGZyb20gXCIuLi9oZWxwZXJzL3NsdWdcIjtcclxuXHJcbmZ1bmN0aW9uIENoYW5uZWxHcmlkKHsgY2hhbm5lbHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XHJcbiAgICAgIHtjaGFubmVscy5tYXAoY2hhbm5lbCA9PiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGtleT17Y2hhbm5lbC5pZH1cclxuICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXHJcbiAgICAgICAgICBwYXJhbXM9e3tcclxuICAgICAgICAgICAgc2x1Zzogc2x1ZyhjaGFubmVsLnRpdGxlKSxcclxuICAgICAgICAgICAgaWQ6IGNoYW5uZWwuaWRcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImNoYW5uZWxcIiAvPlxyXG4gICAgICAgICAgICA8aDI+e2NoYW5uZWwudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsR3JpZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Mauricio\\\\Documents\\\\Github\\\\myFirstNextApp\\\\components\\\\ChannelGrid.jsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ChannelGrid);

/***/ })

})
//# sourceMappingURL=index.js.22841c4af723e7efbcd8.hot-update.js.map