"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Map.tsx":
/*!********************************!*\
  !*** ./src/components/Map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n\n\n\n\nconst Map = (param)=>{\n    let { countries } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.MapContainer, {\n        center: [\n            20,\n            0\n        ],\n        zoom: 2,\n        className: \"h-screen w-full rounded-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.TileLayer, {\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n            }, void 0, false, {\n                fileName: \"/Users/alejandosantini/Desktop/tots-front/src/components/Map.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            countries.map((country, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                    position: country.latlng,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: country.name\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandosantini/Desktop/tots-front/src/components/Map.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/alejandosantini/Desktop/tots-front/src/components/Map.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandosantini/Desktop/tots-front/src/components/Map.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUM2QztBQUNyQztBQU9sQyxNQUFNSyxNQUEwQjtRQUFDLEVBQUVDLFNBQVMsRUFBRTtJQUM1QyxxQkFDRSw4REFBQ0wsdURBQVlBO1FBQUNNLFFBQVE7WUFBQztZQUFJO1NBQUU7UUFBRUMsTUFBTTtRQUFHQyxXQUFVOzswQkFDaEQsOERBQUNQLG9EQUFTQTtnQkFDUlEsS0FBSTtnQkFDSkMsYUFBWTs7Ozs7O1lBRWJMLFVBQVVNLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNYLGlEQUFNQTtvQkFBYVksVUFBVUYsUUFBUUcsTUFBTTs4QkFDMUMsNEVBQUNaLGdEQUFLQTtrQ0FBRVMsUUFBUUksSUFBSTs7Ozs7O21CQURUSDs7Ozs7Ozs7Ozs7QUFNckI7S0FkTVQ7QUFnQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwLnRzeD9iMTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0IHsgTGF0TG5nVHVwbGUgfSBmcm9tICdsZWFmbGV0JztcblxuaW50ZXJmYWNlIE1hcFByb3BzIHtcbiAgY291bnRyaWVzOiB7IG5hbWU6IHN0cmluZzsgbGF0bG5nOiBMYXRMbmdUdXBsZSB9W107XG59XG5cbmNvbnN0IE1hcDogUmVhY3QuRkM8TWFwUHJvcHM+ID0gKHsgY291bnRyaWVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGFpbmVyIGNlbnRlcj17WzIwLCAwXX0gem9vbT17Mn0gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIHJvdW5kZWQtbGcgXCI+XG4gICAgICA8VGlsZUxheWVyXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgLz5cbiAgICAgIHtjb3VudHJpZXMubWFwKChjb3VudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICA8TWFya2VyIGtleT17aW5kZXh9IHBvc2l0aW9uPXtjb3VudHJ5LmxhdGxuZ30+XG4gICAgICAgICAgPFBvcHVwPntjb3VudHJ5Lm5hbWV9PC9Qb3B1cD5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICApKX1cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwiTWFwIiwiY291bnRyaWVzIiwiY2VudGVyIiwiem9vbSIsImNsYXNzTmFtZSIsInVybCIsImF0dHJpYnV0aW9uIiwibWFwIiwiY291bnRyeSIsImluZGV4IiwicG9zaXRpb24iLCJsYXRsbmciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map.tsx\n"));

/***/ })

});