"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/[slug]/page",{

/***/ "(app-pages-browser)/./app/_components/Navbar.tsx":
/*!************************************!*\
  !*** ./app/_components/Navbar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/linkedin.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/Toggle */ \"(app-pages-browser)/./app/_components/Toggle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    const socials = [\n        {\n            link: \"/projects\",\n            label: \"Projetos\"\n        },\n        {\n            link: \"/about\",\n            label: \"Sobre mim\"\n        }\n    ];\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Função para obter a hora atual no fuso horário de Brasília\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateTime = ()=>{\n            const options = {\n                timeZone: \"America/Sao_Paulo\",\n                hour: \"2-digit\",\n                minute: \"2-digit\",\n                second: \"2-digit\"\n            };\n            const currentTime = new Intl.DateTimeFormat(\"pt-BR\", options).format(new Date());\n            setTime(currentTime);\n        };\n        updateTime(); // Atualiza imediatamente\n        const intervalId = setInterval(updateTime, 1000); // Atualiza a cada segundo\n        return ()=>clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"py-2 border-b border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 sticky top-0 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/\",\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/new-logo-2x1.svg\",\n                        className: \"h-10 sm:h-11\",\n                        alt: \"portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setIsOpen(!isOpen),\n                            className: \"text-gray-300 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none lg:hidden\" // Only show on mobile\n                            ,\n                            children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                size: 24\n                            }, void 0, false, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                size: 24\n                            }, void 0, false, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" absolute right-0 top-full mt-2 border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded shadow-md z-20 w-[240px]\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"py-2\",\n                                children: [\n                                    socials.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: social.link,\n                                                className: \"px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 inline-block\",\n                                                onClick: ()=>setIsOpen(false),\n                                                children: social.label\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"lg:inline-flex items-center gap-3 justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toggle__WEBPACK_IMPORTED_MODULE_2__.ModeToggle, {}, void 0, false, {\n                                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden sm:w-full sm:justify-end lg:flex lg:items-center lg:space-x-6\",\n                    children: [\n                        socials.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: social.link,\n                                className: \"text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-md font-light\",\n                                children: social.label\n                            }, index, false, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"\\xb7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/ramon-sousa-pereira/\",\n                            target: \"blank\",\n                            className: \"text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-5\",\n                                strokeWidth: 1\n                            }, void 0, false, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/Ramon-Sousa\",\n                            target: \"blank\",\n                            className: \"text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-md\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"w-5\",\n                                strokeWidth: 1\n                            }, void 0, false, {\n                                fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:inline-flex items-center  ml-8 gap-3 border-l border-gray-600 pl-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toggle__WEBPACK_IMPORTED_MODULE_2__.ModeToggle, {}, void 0, false, {\n                        fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ramon/Documents/Projects/portfolio/app/_components/Navbar.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"3E61YQYY7mkZtcY7PnY8FWF2Vhg=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ007QUFDTjtBQUVuRCxTQUFTUTs7SUFDUCxNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsTUFBTTtZQUFhQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsTUFBTTtZQUFVQyxPQUFPO1FBQVk7S0FDdEM7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFTO0lBRXpDLDZEQUE2RDtJQUM3REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxhQUFhO1lBQ2pCLE1BQU1DLFVBQXNDO2dCQUMxQ0MsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsUUFBUTtZQUNWO1lBQ0EsTUFBTUMsY0FBYyxJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBU1AsU0FBU1EsTUFBTSxDQUNsRSxJQUFJQztZQUVOWCxRQUFRTztRQUNWO1FBRUFOLGNBQWMseUJBQXlCO1FBQ3ZDLE1BQU1XLGFBQWFDLFlBQVlaLFlBQVksT0FBTywwQkFBMEI7UUFFNUUsT0FBTyxJQUFNYSxjQUFjRixhQUFhLDhDQUE4QztJQUN4RixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBRWIsOERBQUNFO29CQUFFQyxNQUFLO29CQUFJSCxXQUFVOzhCQUNwQiw0RUFBQ0k7d0JBQ0NDLEtBQUk7d0JBQ0pMLFdBQVU7d0JBQ1ZNLEtBQUk7Ozs7Ozs7Ozs7OzhCQUtSLDhEQUFDTDtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUNDQyxTQUFTLElBQU0xQixVQUFVLENBQUNEOzRCQUMxQm1CLFdBQVUsNkdBQTZHLHNCQUFzQjs7c0NBRTVJbkIsdUJBQVMsOERBQUNQLGtHQUFDQTtnQ0FBQ21DLE1BQU07Ozs7O3FEQUFTLDhEQUFDcEMsa0dBQUlBO2dDQUFDb0MsTUFBTTs7Ozs7Ozs7Ozs7c0NBSTFDLDhEQUFDUjs0QkFDQ0QsV0FBVyxHQUVWLE9BRENuQixTQUFTLFVBQVUsVUFDcEI7c0NBRUQsNEVBQUM2QjtnQ0FBR1YsV0FBVTs7b0NBQ1h0QixRQUFRaUMsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ0M7c0RBQ0MsNEVBQUNaO2dEQUNDQyxNQUFNUyxPQUFPakMsSUFBSTtnREFDakJxQixXQUFVO2dEQUNWUSxTQUFTLElBQU0xQixVQUFVOzBEQUV4QjhCLE9BQU9oQyxLQUFLOzs7Ozs7MkNBTlJpQzs7Ozs7a0RBVVgsOERBQUNaO3dDQUFJRCxXQUFVO2tEQUNuQiw0RUFBQ3hCLDBEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9iLDhEQUFDeUI7b0JBQUlELFdBQVU7O3dCQUNadEIsUUFBUWlDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNYO2dDQUVDQyxNQUFNUyxPQUFPakMsSUFBSTtnQ0FDakJxQixXQUFVOzBDQUVUWSxPQUFPaEMsS0FBSzsrQkFKUmlDOzs7OztzQ0FPVCw4REFBQ0U7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ2I7NEJBQ0NDLE1BQUs7NEJBQ0xhLFFBQU87NEJBQ1BoQixXQUFVO3NDQUVWLDRFQUFDekIsa0dBQVFBO2dDQUFDeUIsV0FBVTtnQ0FBTWlCLGFBQWE7Ozs7Ozs7Ozs7O3NDQUV6Qyw4REFBQ2Y7NEJBQ0NDLE1BQUs7NEJBQ0xhLFFBQU87NEJBQ1BoQixXQUFVO3NDQUVWLDRFQUFDNUIsa0dBQU1BO2dDQUFDNEIsV0FBVTtnQ0FBTWlCLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVd6Qyw4REFBQ2hCO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDeEIsMERBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0FySFNDO0tBQUFBO0FBdUhULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9OYXZiYXIudHN4PzE3YTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2l0aHViLCBNZW51LCBYLCBMaW5rZWRpbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tIFwiLi4vX2NvbXBvbmVudHMvVG9nZ2xlXCI7XG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3Qgc29jaWFscyA9IFtcbiAgICB7IGxpbms6IFwiL3Byb2plY3RzXCIsIGxhYmVsOiBcIlByb2pldG9zXCIgfSxcbiAgICB7IGxpbms6IFwiL2Fib3V0XCIsIGxhYmVsOiBcIlNvYnJlIG1pbVwiIH0sXG4gIF07XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAvLyBGdW7Dp8OjbyBwYXJhIG9idGVyIGEgaG9yYSBhdHVhbCBubyBmdXNvIGhvcsOhcmlvIGRlIEJyYXPDrWxpYVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgdGltZVpvbmU6IFwiQW1lcmljYS9TYW9fUGF1bG9cIixcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcInB0LUJSXCIsIG9wdGlvbnMpLmZvcm1hdChcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICAgKTtcbiAgICAgIHNldFRpbWUoY3VycmVudFRpbWUpO1xuICAgIH07XG5cbiAgICB1cGRhdGVUaW1lKCk7IC8vIEF0dWFsaXphIGltZWRpYXRhbWVudGVcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgMTAwMCk7IC8vIEF0dWFsaXphIGEgY2FkYSBzZWd1bmRvXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gTGltcGEgbyBpbnRlcnZhbG8gYW8gZGVzbW9udGFyIG8gY29tcG9uZW50ZVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInB5LTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGRhcms6Ym9yZGVyLWdyYXktOTAwIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTk1MCBzdGlja3kgdG9wLTAgei0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgIHsvKiBMb2dvIChEZXNrdG9wIGFuZCBNb2JpbGUpICovfVxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9uZXctbG9nby0yeDEuc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgc206aC0xMVwiXG4gICAgICAgICAgICBhbHQ9XCJwb3J0Zm9saW9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cblxuICAgICAgICB7LyogSGFtYnVyZ2VyIE1lbnUgKERlc2t0b3AgYW5kIE1vYmlsZSkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgbGc6aGlkZGVuXCIgLy8gT25seSBzaG93IG9uIG1vYmlsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc09wZW4gPyA8WCBzaXplPXsyNH0gLz4gOiA8TWVudSBzaXplPXsyNH0gLz59XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiBMaW5rcyAoU2hvd24gd2hlbiBvcGVuIG9uIG1vYmlsZSkgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgaXNPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSBhYnNvbHV0ZSByaWdodC0wIHRvcC1mdWxsIG10LTIgYm9yZGVyIGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS05MDAgYm9yZGVyLWdyYXktMjAwIGRhcms6Ym9yZGVyLWdyYXktODAwIHJvdW5kZWQgc2hhZG93LW1kIHotMjAgdy1bMjQwcHhdYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgICB7c29jaWFscy5tYXAoKHNvY2lhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWwubGlua31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS00MDAgZGFyazpob3Zlcjp0ZXh0LWdyYXktMjAwIGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzb2NpYWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPE1vZGVUb2dnbGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTmF2aWdhdGlvbiBMaW5rcyAoU2hvd24gb24gZGVza3RvcCkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOnctZnVsbCBzbTpqdXN0aWZ5LWVuZCBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzpzcGFjZS14LTZcIj5cbiAgICAgICAgICB7c29jaWFscy5tYXAoKHNvY2lhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5saW5rfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTIwMCB0ZXh0LW1kIGZvbnQtbGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c29jaWFsLmxhYmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxwPsK3PC9wPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JhbW9uLXNvdXNhLXBlcmVpcmEvXCJcbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS00MDAgZGFyazpob3Zlcjp0ZXh0LWdyYXktMjAwIHRleHQtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XCJ3LTVcIiBzdHJva2VXaWR0aD17MX0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmFtb24tU291c2FcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0yMDAgdGV4dC1tZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTVcIiBzdHJva2VXaWR0aD17MX0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIb3LDoXJpbyBkZSBCcmFzw61saWEgKi99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgdGV4dC14cyBtbC04IGdhcC0zIGJvcmRlci1sIGJvcmRlci1ncmF5LTYwMCBwbC04XCI+XG4gICAgICAgICAgPENvZmZlZSBzaXplPXszMn0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlXCI+e2BGUkFOQ0Eg4oCiIEJSICR7dGltZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgIHsvKiBUb2dnbGUgcGFyYSB0cm9jYSBkZSBUZW1hICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgIG1sLTggZ2FwLTMgYm9yZGVyLWwgYm9yZGVyLWdyYXktNjAwIHBsLThcIj5cbiAgICAgICAgICA8TW9kZVRvZ2dsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdpdGh1YiIsIk1lbnUiLCJYIiwiTGlua2VkaW4iLCJNb2RlVG9nZ2xlIiwiTmF2YmFyIiwic29jaWFscyIsImxpbmsiLCJsYWJlbCIsImlzT3BlbiIsInNldElzT3BlbiIsInRpbWUiLCJzZXRUaW1lIiwidXBkYXRlVGltZSIsIm9wdGlvbnMiLCJ0aW1lWm9uZSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJjdXJyZW50VGltZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsIkRhdGUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsInVsIiwibWFwIiwic29jaWFsIiwiaW5kZXgiLCJsaSIsInAiLCJ0YXJnZXQiLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/Navbar.tsx\n"));

/***/ })

});