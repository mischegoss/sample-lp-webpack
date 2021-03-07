/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/box-four.js":
/*!*************************!*\
  !*** ./src/box-four.js ***!
  \*************************/
/***/ (() => {

eval("// Add style for Box 4\nconst boxFour = document.getElementById(\"box-4\");\nboxFour.style[\"background-color\"] = \"#00a86b\";\n\n//# sourceURL=webpack://Webpack_Example/./src/box-four.js?");

/***/ }),

/***/ "./src/box-one.js":
/*!************************!*\
  !*** ./src/box-one.js ***!
  \************************/
/***/ (() => {

eval("// Add styling to Box 1 \nconst boxOne = document.getElementById(\"box-1\");\nboxOne.style[\"background-color\"] = \"#1f7ace\";\n\n\n//# sourceURL=webpack://Webpack_Example/./src/box-one.js?");

/***/ }),

/***/ "./src/box-three.js":
/*!**************************!*\
  !*** ./src/box-three.js ***!
  \**************************/
/***/ (() => {

eval("// Add style to Box 3\nconst boxThree = document.getElementById(\"box-3\");\nboxThree.style[\"background-color\"] = \"#FB5235\";\n\n\n//# sourceURL=webpack://Webpack_Example/./src/box-three.js?");

/***/ }),

/***/ "./src/box-two.js":
/*!************************!*\
  !*** ./src/box-two.js ***!
  \************************/
/***/ (() => {

eval("// Add styling to Box 2\nconst boxTwo = document.getElementById(\"box-2\");\nboxTwo.style[\"background-color\"] = \"#b8860b\";\n\n\n//# sourceURL=webpack://Webpack_Example/./src/box-two.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _box_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box-one */ \"./src/box-one.js\");\n/* harmony import */ var _box_one__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_box_one__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _box_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box-two */ \"./src/box-two.js\");\n/* harmony import */ var _box_two__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_box_two__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _box_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-three */ \"./src/box-three.js\");\n/* harmony import */ var _box_three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_box_three__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _box_four__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-four */ \"./src/box-four.js\");\n/* harmony import */ var _box_four__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_box_four__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// Toggle all the boxes when button clicked\n$(document).ready(function(){\n    $(\"button\").click(function(){\n      $(\".item\").toggle();\n    });\n  });\n\n\n//# sourceURL=webpack://Webpack_Example/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;