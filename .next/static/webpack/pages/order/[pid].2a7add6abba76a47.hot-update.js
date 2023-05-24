"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/[pid]",{

/***/ "./src/pages/order/[pid].tsx":
/*!***********************************!*\
  !*** ./src/pages/order/[pid].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Order; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Order() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        products: [],\n        subtotal: 0\n    });\n    const [paid, setPaid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) {\n            return;\n        }\n        const setValues = async ()=>{\n            const { pid  } = router.query;\n            try {\n                if (pid) {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8002/cart/\".concat(pid));\n                    setCart(response.data);\n                }\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        setValues();\n    }, [\n        router.isReady\n    ]);\n    const payNow = ()=>{\n        setPaid(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                \"Amount: \",\n                                cart.subtotal,\n                                \"$\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        !paid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-2 w-80 bg-primary-100 p-3 text-white\",\n                            onClick: ()=>payNow(),\n                            children: \"Pay Now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 31\n                        }, this),\n                        paid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2 w-80 text-center text-primary-100 p-3\",\n                            children: \"Order Completed Successfully\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 30\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sauravsuman/Documents/work/misc/QrPayment/src/pages/order/[pid].tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(Order, \"tT9nRya2abjaQPyXGxQuFn6Kn08=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Order;\nvar _c;\n$RefreshReg$(_c, \"Order\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3JkZXIvW3BpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ3pCO0FBQ2I7QUFFa0I7QUFFN0IsU0FBU00sUUFBUTs7SUFFNUIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM3QlEsVUFBVSxFQUFFO1FBQ1pDLFVBQVU7SUFDZDtJQUNBLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSSxDQUFDTSxPQUFPTyxPQUFPLEVBQUU7WUFDakI7UUFDSixDQUFDO1FBQ0QsTUFBTUMsWUFBWSxVQUFZO1lBQzFCLE1BQU0sRUFBRUMsSUFBRyxFQUFFLEdBQUdULE9BQU9VLEtBQUs7WUFDNUIsSUFBSTtnQkFDQSxJQUFJRCxLQUFLO29CQUNMLE1BQU1FLFdBQVcsTUFBTWQsaURBQVMsQ0FBQyw4QkFBa0MsT0FBSlk7b0JBQy9EUCxRQUFRUyxTQUFTRSxJQUFJO2dCQUN6QixDQUFDO1lBQ0wsRUFDQSxPQUFPQyxLQUFLO2dCQUNSQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2hCO1FBQ0o7UUFDQU47SUFDSixHQUFHO1FBQUNSLE9BQU9PLE9BQU87S0FBQztJQUVuQixNQUFNVSxTQUFTLElBQU07UUFDakJYLFFBQVEsSUFBSTtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3JCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNvQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQWM7Z0NBQVNsQixLQUFLRyxRQUFRO2dDQUFDOzs7Ozs7O3dCQUNuRCxDQUFDQyxzQkFBUSw4REFBQ2U7NEJBQU9ELFdBQVU7NEJBQTBDRSxTQUFTLElBQU1KO3NDQUFVOzs7Ozs7d0JBQzlGWixzQkFBUSw4REFBQ2E7NEJBQUlDLFdBQVU7c0NBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RixDQUFDO0dBNUN1QnBCOztRQUVMSCxrREFBU0E7OztLQUZKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvb3JkZXIvW3BpZF0udHN4P2NiMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcigpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgIHN1YnRvdGFsOiAwXG4gICAgfSk7XG4gICAgY29uc3QgW3BhaWQsIHNldFBhaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNldFZhbHVlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAyL2NhcnQvJHtwaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRWYWx1ZXMoKTtcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKVxuXG4gICAgY29uc3QgcGF5Tm93ID0gKCkgPT4ge1xuICAgICAgICBzZXRQYWlkKHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFtb3VudDoge2NhcnQuc3VidG90YWx9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IXBhaWQgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yIHctODAgYmctcHJpbWFyeS0xMDAgcC0zIHRleHQtd2hpdGVcIiBvbkNsaWNrPXsoKSA9PiBwYXlOb3coKX0+UGF5IE5vdzwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAge3BhaWQgJiYgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHctODAgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5LTEwMCBwLTNcIj5PcmRlciBDb21wbGV0ZWQgU3VjY2Vzc2Z1bGx5PC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJIZWFkZXIiLCJPcmRlciIsInJvdXRlciIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdHMiLCJzdWJ0b3RhbCIsInBhaWQiLCJzZXRQYWlkIiwiaXNSZWFkeSIsInNldFZhbHVlcyIsInBpZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInBheU5vdyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/order/[pid].tsx\n"));

/***/ })

});