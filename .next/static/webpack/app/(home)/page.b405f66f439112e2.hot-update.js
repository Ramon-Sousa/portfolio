"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./app/_components/Footer.tsx":
/*!************************************!*\
  !*** ./app/_components/Footer.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/linkedin.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Coffee!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/coffee.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Footer() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Função para obter a hora atual no fuso horário de Brasília\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateTime = ()=>{\n            const options = {\n                timeZone: \"America/Sao_Paulo\",\n                hour: \"2-digit\",\n                minute: \"2-digit\",\n                second: \"2-digit\"\n            };\n            const currentTime = new Intl.DateTimeFormat(\"pt-BR\", options).format(new Date());\n            setTime(currentTime);\n        };\n        updateTime(); // Atualiza imediatamente\n        const intervalId = setInterval(updateTime, 1000); // Atualiza a cada segundo\n        return ()=>clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full px-4 pb-14\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex flex-col sm:flex-row items-center justify-between p-8 bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-800 border border-slate-900 rounded-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/assets/new-logo-2x1.svg\",\n                    className: \"h-8 sm:h-12 mb-4 sm:mb-0\",\n                    alt: \"portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col sm:flex-row items-center gap-10 justify-between text-base font-normal text-gray-200 dark:text-gray-800\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"flex items-center gap-2\",\n                            href: \"https://www.linkedin.com/in/ramon-sousa-pereira/\",\n                            target: \"_blank\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                \"LinkedIn\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"flex items-center gap-2\",\n                            href: \"https://github.com/Ramon-Sousa\",\n                            target: \"_blank\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                \"GitHub\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center sm:text-left\",\n                            children: \"contato@ramondesigner.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:inline-flex items-center text-gray-500 dark:text-gray-400 text-xs gap-3 text-center uppercase\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            size: 32\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\",\n                            children: \"FRANCA • BR \".concat(time)\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Footer.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Footer, \"3E61YQYY7mkZtcY7PnY8FWF2Vhg=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Gb290ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDSjtBQUNsQjtBQUNTO0FBQ3ZCLFNBQVNPOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFTO0lBRXpDLDZEQUE2RDtJQUM3REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxhQUFhO1lBQ2pCLE1BQU1DLFVBQXNDO2dCQUMxQ0MsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsUUFBUTtZQUNWO1lBQ0EsTUFBTUMsY0FBYyxJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBU1AsU0FBU1EsTUFBTSxDQUNsRSxJQUFJQztZQUVOWCxRQUFRTztRQUNWO1FBRUFOLGNBQWMseUJBQXlCO1FBQ3ZDLE1BQU1XLGFBQWFDLFlBQVlaLFlBQVksT0FBTywwQkFBMEI7UUFFNUUsT0FBTyxJQUFNYSxjQUFjRixhQUFhLDhDQUE4QztJQUN4RixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNDO29CQUNDQyxLQUFJO29CQUNKRixXQUFVO29CQUNWRyxLQUFJOzs7Ozs7OEJBSU4sOERBQUNKO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3RCLGlEQUFJQTs0QkFDSHNCLFdBQVU7NEJBQ1ZJLE1BQUs7NEJBQ0xDLFFBQU87OzhDQUVQLDhEQUFDNUIsMkZBQVFBOzs7OztnQ0FBRzs7Ozs7OztzQ0FHZCw4REFBQ0MsaURBQUlBOzRCQUNIc0IsV0FBVTs0QkFDVkksTUFBSzs0QkFDTEMsUUFBTzs7OENBRVAsOERBQUM3QiwyRkFBTUE7Ozs7O2dDQUFHOzs7Ozs7O3NDQUdaLDhEQUFDdUI7NEJBQUlDLFdBQVU7c0NBQTJCOzs7Ozs7Ozs7Ozs7OEJBUzVDLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNyQixrRkFBTUE7NEJBQUMyQixNQUFNOzs7Ozs7c0NBQ2QsOERBQUNDOzRCQUFFUCxXQUFVO3NDQUFJLGVBQW9CLE9BQUxqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUM7R0FyRXdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvRm9vdGVyLnRzeD82YzE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R2l0aHViLCBMaW5rZWRpbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvZmZlZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAvLyBGdW7Dp8OjbyBwYXJhIG9idGVyIGEgaG9yYSBhdHVhbCBubyBmdXNvIGhvcsOhcmlvIGRlIEJyYXPDrWxpYVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgdGltZVpvbmU6IFwiQW1lcmljYS9TYW9fUGF1bG9cIixcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcInB0LUJSXCIsIG9wdGlvbnMpLmZvcm1hdChcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICAgKTtcbiAgICAgIHNldFRpbWUoY3VycmVudFRpbWUpO1xuICAgIH07XG5cbiAgICB1cGRhdGVUaW1lKCk7IC8vIEF0dWFsaXphIGltZWRpYXRhbWVudGVcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgMTAwMCk7IC8vIEF0dWFsaXphIGEgY2FkYSBzZWd1bmRvXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gTGltcGEgbyBpbnRlcnZhbG8gYW8gZGVzbW9udGFyIG8gY29tcG9uZW50ZVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBwYi0xNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtOCBiZy1ncmF5LTkwMCBkYXJrOmJnLWdyYXktMjAwIHRleHQtZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktODAwIGJvcmRlciBib3JkZXItc2xhdGUtOTAwIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy9uZXctbG9nby0yeDEuc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTggc206aC0xMiBtYi00IHNtOm1iLTBcIlxuICAgICAgICAgIGFsdD1cInBvcnRmb2xpb1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFJlZGVzIFNvY2lhaXMgZSBDb250YXRvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0xMCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmFtb24tc291c2EtcGVyZWlyYS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua2VkaW4gLz5cbiAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JhbW9uLVNvdXNhXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpdGh1YiAvPlxuICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICBjb250YXRvQHJhbW9uZGVzaWduZXIuY29tXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRleHRvIENlbnRyYWwgKi99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1ub3dyYXAgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktODAwIHRleHQtY2VudGVyIHNtOnRleHQtbGVmdCBtYi00IHNtOm1iLTAgc206cHgtNlwiPlxuICAgICAgICAgIFZhbW9zIHRyYWJhbGhhciBqdW50b3M/XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHRleHQteHMgZ2FwLTMgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgPENvZmZlZSBzaXplPXszMn0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57YEZSQU5DQSDigKIgQlIgJHt0aW1lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdpdGh1YiIsIkxpbmtlZGluIiwiTGluayIsIkNvZmZlZSIsIkZvb3RlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRpbWUiLCJzZXRUaW1lIiwidXBkYXRlVGltZSIsIm9wdGlvbnMiLCJ0aW1lWm9uZSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJjdXJyZW50VGltZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsIkRhdGUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaHJlZiIsInRhcmdldCIsInNpemUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/Footer.tsx\n"));

/***/ })

});