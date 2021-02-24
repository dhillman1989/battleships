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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/PlayerFactory */ \"./src/factories/PlayerFactory.js\");\n/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/GameboardFactory */ \"./src/factories/GameboardFactory.js\");\n/* harmony import */ var _factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/ShipFactory */ \"./src/factories/ShipFactory.js\");\n/* harmony import */ var _factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ \"./src/components/Popup.js\");\n\n\n\n\n\nvar Game = function Game() {\n  var player1 = new (_factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0___default())();\n  var gameboard1 = new (_factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1___default())(player1);\n  var ship1 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship34234\", \"vertical\", 3, player1);\n  var ship2 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship3454354356234234\", \"vertical\", 2, player1);\n  var ship3 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship384534588834\", \"horizontal\", 4, player1);\n  var ship4 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship3888834\", \"horizontal\", 1, player1);\n  var ship5 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship38833333333334\", \"horizontal\", 3, player1); ///player2 places ships on board 2\n\n  var player2 = new (_factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0___default())();\n  var gameboard2 = new (_factories_GameboardFactory__WEBPACK_IMPORTED_MODULE_1___default())(player2);\n  var ship21 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship34234\", \"vertical\", 3, player2);\n  var ship22 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship3456234234\", \"vertical\", 2, player2);\n  var ship23 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship3888834\", \"horizontal\", 4, player2);\n  var ship24 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship388fd4534534\", \"horizontal\", 1, player2);\n  var ship25 = new (_factories_ShipFactory__WEBPACK_IMPORTED_MODULE_2___default())(\"ship38833333333334\", \"horizontal\", 3, player2);\n\n  var renderSetupBoard = function renderSetupBoard(currGameboard) {\n    var setupBoard = document.querySelector(\".gameboard__grid--defending\");\n    var setupBoardGrid = currGameboard.grid.map(function (row, y) {\n      return \"<div class=\\\"gameboard__grid-row\\\">\".concat(row.map(function (tile, x) {\n        return \"<div \".concat(tile.ship ? \"data-ship=\".concat(tile.ship) : null, \" data-coordx=\").concat(x, \" data-coordy=\").concat(y, \" class=\\\"gameboard__grid-tile \").concat(tile != 0 ? \"gameboard__grid-occupied\" : null, \" \").concat(currGameboard.attacksList.filter(function (a) {\n          return a[0] == x && a[1] == y;\n        }).length > 0 ? \"gameboard__grid-shot \".concat(tile.ship && \"gameboard__grid-hit\") : null, \"\\\"></div>\");\n      }).join(\"\"), \"</div>\");\n    }).join(\"\"); ///RENDER setup grid to dom\n\n    setupBoard.innerHTML = setupBoardGrid; //add eventListners to setup Grid\n\n    var keyevent = function keyevent(e) {\n      if (e.keyCode === 32) {\n        if (currGameboard.axis == \"vertical\") {\n          currGameboard.setAxis(\"horizontal\");\n        } else if (currGameboard.axis == \"horizontal\") {\n          currGameboard.setAxis(\"vertical\");\n        }\n\n        console.log(currGameboard);\n      }\n\n      document.removeEventListener(\"keypress\", keyevent, false);\n      console.log(\"removed lsitener\");\n    };\n\n    document.addEventListener(\"keypress\", keyevent);\n    var tiles = document.querySelectorAll(\".gameboard__grid-tile\");\n    tiles.forEach(function (t) {\n      return t.addEventListener(\"click\", function (e) {\n        console.log(currGameboard);\n        currGameboard.placeShip(ship1, parseInt(e.target.dataset.coordx), parseInt(e.target.dataset.coordy));\n        renderSetupBoard(gameboard1);\n      });\n    });\n  }; ///map gameboard to UI\n\n\n  var renderBoards = function renderBoards(activeGameboard, enemyGameboard) {\n    var turnTaken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var enemyBoard = document.querySelector(\".gameboard__grid--attacking\");\n    var enemyBoardGrid = enemyGameboard.grid.map(function (row, y) {\n      return \"<div class=\\\"gameboard__grid-row\\\">\".concat(row.map(function (tile, x) {\n        return \"<div id=\\\"sq\".concat(y * 10 + x + 1, \"\\\" \").concat(tile.ship ? \"data-ship=\".concat(JSON.stringify(tile.ship)) : null, \" data-coordx=\").concat(x, \" data-coordy=\").concat(y, \" class=\\\"gameboard__grid-tile \").concat(enemyGameboard.attacksList.filter(function (a) {\n          return a[0] == x && a[1] == y;\n        }).length > 0 ? \"gameboard__grid-shot \".concat(tile.ship && \"gameboard__grid-hit\") : null, \"\\\"></div>\");\n      }).join(\"\"), \"</div>\");\n    }).join(\"\");\n    var playerBoard = document.querySelector(\".gameboard__grid--defending\");\n    var playerBoardGrid = activeGameboard.grid.map(function (row, y) {\n      return \"<div class=\\\"gameboard__grid-row\\\">\".concat(row.map(function (tile, x) {\n        return \"<div \".concat(tile.ship ? \"data-ship=\".concat(tile.ship) : null, \" data-coordx=\").concat(x, \" data-coordy=\").concat(y, \" class=\\\"gameboard__grid-tile \").concat(tile != 0 ? \"gameboard__grid-occupied\" : null, \" \").concat(activeGameboard.attacksList.filter(function (a) {\n          return a[0] == x && a[1] == y;\n        }).length > 0 ? \"gameboard__grid-shot \".concat(tile.ship && \"gameboard__grid-hit\") : null, \"\\\"></div>\");\n      }).join(\"\"), \"</div>\");\n    }).join(\"\"); ///RENDER GRIDS IN THE DOM\n\n    playerBoard.innerHTML = playerBoardGrid;\n    enemyBoard.innerHTML = enemyBoardGrid; ///add event listeners\n\n    var tiles = enemyBoard.querySelectorAll(\".gameboard__grid-tile\");\n    tiles.forEach(function (tile) {\n      return tile.addEventListener(\"click\", function (e) {\n        if (!turnTaken && enemyGameboard.attacksList.filter(function (a) {\n          return a[0] == e.target.dataset.coordx && a[1] == e.target.dataset.coordy;\n        }).length == 0) {\n          player1.attack(e.target.dataset.coordx, e.target.dataset.coordy, enemyGameboard);\n          renderBoards(activeGameboard, enemyGameboard, turnTaken = true);\n\n          if (enemyGameboard.owner.sunkenShips.length == 5) {\n            return (0,_Popup__WEBPACK_IMPORTED_MODULE_3__.default)(\"OPPONENT ANIHALATED, YOU WIN!\");\n          }\n\n          var squareId = e.target.id;\n          var targetSquare = document.querySelector(\"#\".concat(squareId));\n          var targetShip = targetSquare.dataset.ship ? JSON.parse(targetSquare.dataset.ship) : null;\n          console.log(targetShip);\n          return targetShip ? (0,_Popup__WEBPACK_IMPORTED_MODULE_3__.default)(\"\".concat(targetShip.isSunk ? \"SANK SHIP\" : \"HIT\"), activeGameboard, enemyGameboard, renderBoards) : (0,_Popup__WEBPACK_IMPORTED_MODULE_3__.default)(\"MISS\", activeGameboard, enemyGameboard, renderBoards);\n        }\n      });\n    });\n  };\n\n  renderSetupBoard(gameboard1); ///renderBoards(gameboard1, gameboard2);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/Game.js?");

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Popup = function Popup(message, activeGameboard, enemyGameboard, renderBoards) {\n  var app = document.querySelector(\".app\");\n\n  var showPassScreen = function showPassScreen(activeboard, opponentboard) {\n    var passScreen = document.createElement(\"div\");\n    passScreen.classList.add(\"pass-screen\");\n    passScreen.innerHTML = \"<button id=\\\"passgameConfirm\\\">PASS TO OPPONENT</button>\";\n    app.appendChild(passScreen);\n    document.querySelector(\"#passgameConfirm\").addEventListener(\"click\", function () {\n      renderBoards(enemyGameboard, activeGameboard);\n      app.removeChild(popup);\n      app.removeChild(passScreen);\n    });\n  };\n\n  var popup = document.createElement(\"div\");\n  popup.classList.add(\"popup\");\n  popup.innerHTML = \"\\n      <h1>\".concat(message, \"</h1>\\n      <button id=\\\"passgame\\\">PASS GAME</button>\\n\");\n  app.appendChild(popup);\n  document.querySelector(\"#passgame\").addEventListener(\"click\", function () {\n    showPassScreen(activeGameboard, enemyGameboard);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/Popup.js?");

/***/ }),

/***/ "./src/factories/GameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/GameboardFactory.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GameboardFactory = function GameboardFactory(player) {\n  var _this = this;\n\n  _classCallCheck(this, GameboardFactory);\n\n  this.owner = player;\n  this.grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];\n  this.axis = \"vertical\";\n\n  this.setAxis = function (newAxis) {\n    _this.axis = newAxis;\n  };\n\n  this.placeShip = function (ship, x, y) {\n    if (_this.axis === \"vertical\") {\n      for (var i = 0; i < ship.length; i++) {\n        _this.grid[y + i][x] = {\n          ship: ship,\n          num: 1 + i\n        };\n      }\n    }\n\n    if (_this.axis === \"horizontal\") {\n      for (var _i = 0; _i < ship.length; _i++) {\n        _this.grid[y][x + _i] = {\n          ship: ship,\n          num: 1 + _i\n        };\n      }\n    }\n  };\n\n  this.attacksList = [];\n\n  this.receiveAttack = function (x, y) {\n    _this.attacksList.push([x, y]);\n\n    if (_this.grid[y][x] !== 0) {\n      _this.grid[y][x].ship.hit(_this.grid[y][x].num);\n    }\n  };\n};\n\nmodule.exports = GameboardFactory;\n\n//# sourceURL=webpack://my-webpack-project/./src/factories/GameboardFactory.js?");

/***/ }),

/***/ "./src/factories/PlayerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/PlayerFactory.js ***!
  \****************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n\nvar PlayerFactory = function PlayerFactory() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"human\";\n\n  _classCallCheck(this, PlayerFactory);\n\n  this.type = type;\n  this.fleet = [].concat(fleet);\n  this.sunkenShips = [];\n\n  this.attack = function (x, y, enemyboard) {\n    enemyboard.receiveAttack(x, y);\n  };\n};\n\nmodule.exports = PlayerFactory;\n\n//# sourceURL=webpack://my-webpack-project/./src/factories/PlayerFactory.js?");

/***/ }),

/***/ "./src/factories/ShipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/ShipFactory.js ***!
  \**************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ShipFactory = function ShipFactory(id, axis, length, player) {\n  _classCallCheck(this, ShipFactory);\n\n  this.owner = player;\n  this.id = id;\n  this.axis = axis;\n  this.length = length;\n  this.hitPoints = [];\n  this.isSunk = false;\n\n  this.hit = function (num) {\n    this.hitPoints.push(num);\n\n    if (this.hitPoints.length === this.length) {\n      this.isSunk = true;\n      this.owner.sunkenShips.push(this.id);\n    }\n  };\n};\n\nmodule.exports = ShipFactory;\n\n//# sourceURL=webpack://my-webpack-project/./src/factories/ShipFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.js\");\n\n(0,_components_Game__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/sass/main.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/sass/main.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  background-color: #ccffff;\\n  font-size: 62.5%;\\n  font-family: arial; }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  min-height: 100vh;\\n  font-size: 1.6rem; }\\n\\n.app {\\n  text-align: center; }\\n\\nh1 {\\n  font-size: 3rem; }\\n\\n.gameboard {\\n  display: flex;\\n  margin: 0 auto;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column; }\\n  .gameboard__grid {\\n    margin: 0.5rem;\\n    width: 32rem;\\n    height: 32rem;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: black;\\n    justify-content: space-evenly;\\n    align-items: center; }\\n    .gameboard__grid--defending {\\n      opacity: 0.5; }\\n  .gameboard__grid-row {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch; }\\n  .gameboard__grid-tile {\\n    width: 3rem;\\n    height: 3rem;\\n    background-color: #c2c2c2; }\\n  .gameboard__grid-shot {\\n    border: 0.5rem solid #357535; }\\n  .gameboard__grid-hit {\\n    border: 0.5rem solid orangered; }\\n  .gameboard__grid-occupied {\\n    background-color: #000; }\\n\\n.popup {\\n  position: fixed;\\n  bottom: 3rem;\\n  left: 0;\\n  width: 100vw;\\n  padding: 2rem;\\n  margin: 0;\\n  color: #fff;\\n  background-color: #000; }\\n\\n.pass-screen {\\n  background-color: #000;\\n  position: absolute;\\n  display: flex;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  align-items: center;\\n  justify-content: center; }\\n  .pass-screen button {\\n    background-color: #333;\\n    border: 0;\\n    outline: 0;\\n    color: #fff;\\n    padding: 2rem 3rem;\\n    font-size: 3rem;\\n    box-shadow: 2px 2px 2px 2px #111; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/sass/base/_base.scss\",\"webpack://./src/sass/typography/_typography.scss\",\"webpack://./src/sass/components/_gameboard.scss\",\"webpack://./src/sass/components/_popup.scss\",\"webpack://./src/sass/components/_pass-screen.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,yBAAoC;EACpC,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAGxB;EACE,iBAAiB;EACjB,iBAAiB,EAAA;;AAGnB;EACE,kBAAkB,EAAA;;AClBpB;EACE,eAAe,EAAA;;ACDjB;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB,EAAA;EACtB;IACE,cAAc;IACd,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB,EAAA;IACnB;MACE,YAAY,EAAA;EAIhB;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,oBAAoB,EAAA;EAGtB;IACE,WAAW;IACX,YAAY;IACZ,yBAAoC,EAAA;EAEtC;IACE,4BAAqC,EAAA;EAGvC;IACE,8BAA8B,EAAA;EAEhC;IACE,sBAAsB,EAAA;;ACzC1B;EACE,eAAe;EACf,YAAY;EACZ,OAAO;EACP,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,sBAAsB,EAAA;;ACRxB;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;EATzB;IAWI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,gCAAgC,EAAA\",\"sourcesContent\":[\"html {\\n  background-color: rgb(204, 255, 255);\\n  font-size: 62.5%;\\n  font-family: arial;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  font-size: 1.6rem;\\n}\\n\\n.app {\\n  text-align: center;\\n}\\n\",\"h1 {\\n  font-size: 3rem;\\n}\\n\",\".gameboard {\\n  display: flex;\\n  margin: 0 auto;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  &__grid {\\n    margin: 0.5rem;\\n    width: 32rem;\\n    height: 32rem;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: black;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    &--defending {\\n      opacity: 0.5;\\n    }\\n  }\\n\\n  &__grid-row {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  &__grid-tile {\\n    width: 3rem;\\n    height: 3rem;\\n    background-color: rgb(194, 194, 194);\\n  }\\n  &__grid-shot {\\n    border: 0.5rem solid rgb(53, 117, 53);\\n  }\\n\\n  &__grid-hit {\\n    border: 0.5rem solid orangered;\\n  }\\n  &__grid-occupied {\\n    background-color: #000;\\n  }\\n}\\n\",\".popup {\\n  position: fixed;\\n  bottom: 3rem;\\n  left: 0;\\n  width: 100vw;\\n  padding: 2rem;\\n  margin: 0;\\n  color: #fff;\\n  background-color: #000;\\n}\\n\",\".pass-screen {\\n  background-color: #000;\\n  position: absolute;\\n  display: flex;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  align-items: center;\\n  justify-content: center;\\n  & button {\\n    background-color: #333;\\n    border: 0;\\n    outline: 0;\\n    color: #fff;\\n    padding: 2rem 3rem;\\n    font-size: 3rem;\\n    box-shadow: 2px 2px 2px 2px #111;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (typeof btoa === \"function\") {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/cssWithMappingToString.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./main.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/sass/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/main.scss");
/******/ 	
/******/ })()
;