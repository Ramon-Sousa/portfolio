"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-classify-character";
exports.ids = ["vendor-chunks/micromark-util-classify-character"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-classify-character/dev/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-util-classify-character/dev/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   classifyCharacter: () => (/* binding */ classifyCharacter)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n */\n\n\n\n\n/**\n * Classify whether a code represents whitespace, punctuation, or something\n * else.\n *\n * Used for attention (emphasis, strong), whose sequences can open or close\n * based on the class of surrounding characters.\n *\n * > 👉 **Note**: eof (`null`) is seen as whitespace.\n *\n * @param {Code} code\n *   Code.\n * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}\n *   Group.\n */\nfunction classifyCharacter(code) {\n  if (\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code) ||\n    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodeWhitespace)(code)\n  ) {\n    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupWhitespace\n  }\n\n  if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodePunctuation)(code)) {\n    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupPunctuation\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDs7QUFNaUM7QUFDcUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsd0RBQUs7QUFDbEIsSUFBSSxtRkFBeUI7QUFDN0IsSUFBSSwyRUFBaUI7QUFDckI7QUFDQSxXQUFXLDREQUFTO0FBQ3BCOztBQUVBLE1BQU0sNEVBQWtCO0FBQ3hCLFdBQVcsNERBQVM7QUFDcEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXIvZGV2L2luZGV4LmpzP2IyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqL1xuXG5pbXBvcnQge1xuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICB1bmljb2RlUHVuY3R1YXRpb24sXG4gIHVuaWNvZGVXaGl0ZXNwYWNlXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIENsYXNzaWZ5IHdoZXRoZXIgYSBjb2RlIHJlcHJlc2VudHMgd2hpdGVzcGFjZSwgcHVuY3R1YXRpb24sIG9yIHNvbWV0aGluZ1xuICogZWxzZS5cbiAqXG4gKiBVc2VkIGZvciBhdHRlbnRpb24gKGVtcGhhc2lzLCBzdHJvbmcpLCB3aG9zZSBzZXF1ZW5jZXMgY2FuIG9wZW4gb3IgY2xvc2VcbiAqIGJhc2VkIG9uIHRoZSBjbGFzcyBvZiBzdXJyb3VuZGluZyBjaGFyYWN0ZXJzLlxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogZW9mIChgbnVsbGApIGlzIHNlZW4gYXMgd2hpdGVzcGFjZS5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHt0eXBlb2YgY29uc3RhbnRzLmNoYXJhY3Rlckdyb3VwV2hpdGVzcGFjZSB8IHR5cGVvZiBjb25zdGFudHMuY2hhcmFjdGVyR3JvdXBQdW5jdHVhdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgR3JvdXAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKSB7XG4gIGlmIChcbiAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpIHx8XG4gICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSlcbiAgKSB7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5jaGFyYWN0ZXJHcm91cFdoaXRlc3BhY2VcbiAgfVxuXG4gIGlmICh1bmljb2RlUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICByZXR1cm4gY29uc3RhbnRzLmNoYXJhY3Rlckdyb3VwUHVuY3R1YXRpb25cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-classify-character/dev/index.js\n");

/***/ })

};
;