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

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/PlayerFactory */ \"./src/factories/PlayerFactory.js\");\n/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/GameboardFactory */ \"./src/factories/GameboardFactory.js\");\n/* harmony import */ var _factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Game = function Game() {\n  var player1 = new (_factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0___default())();\n  var board1 = new (_factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1___default())();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/Game.js?");

/***/ }),

/***/ "./src/factories/GameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/GameboardFactory.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Gameboard = function Gameboard() {\n  var _this = this;\n\n  _classCallCheck(this, Gameboard);\n\n  this.grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];\n  this.axis = \"vertical\";\n\n  this.setAxis = function (newAxis) {\n    _this.axis = newAxis;\n  };\n\n  this.placeShip = function (ship, x, y) {\n    if (_this.axis === \"vertical\") {\n      for (var i = 0; i < ship.length; i++) {\n        _this.grid[y + i][x] = {\n          ship: ship,\n          num: 1 + i\n        };\n      }\n    }\n\n    if (_this.axis === \"horizontal\") {\n      for (var _i = 0; _i < ship.length; _i++) {\n        _this.grid[y][x + _i] = {\n          ship: ship,\n          num: 1 + _i\n        };\n      }\n    }\n  };\n\n  this.attacksList = [];\n\n  this.receiveAttack = function (x, y) {\n    _this.attacksList.push([x, y]);\n\n    if (_this.grid[y][x] !== 0) {\n      _this.grid[y][x].ship.hit(_this.grid[y][x].num);\n    }\n  };\n};\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://my-webpack-project/./src/factories/GameboardFactory.js?");

/***/ }),

/***/ "./src/factories/PlayerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/PlayerFactory.js ***!
  \****************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n\nvar PlayerFactory = function PlayerFactory() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"human\";\n\n  _classCallCheck(this, PlayerFactory);\n\n  this.type = type;\n  this.fleet = [].concat(fleet);\n\n  this.attack = function (x, y, enemyboard) {\n    enemyboard.receiveAttack(x, y);\n  };\n};\n\nmodule.exports = PlayerFactory;\n\n//# sourceURL=webpack://my-webpack-project/./src/factories/PlayerFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.js\");\n\n(0,_components_Game__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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