/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  /* border: 0px red solid; */\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --body-bg: #cbd5e1;\r\n  --account-bg: #f8fafc;\r\n  --outline: #0a0a0a;\r\n  --project-bg: #f8fafc;\r\n  --task-editor-bg: #f8fafc;\r\n  --task-editor__input-boder: #d4d4d4;\r\n  --input-bottomline: #0a0a0a;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--body-bg);\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  filter: brightness(85%);\r\n}\r\n\r\nbutton:active {\r\n  scale: 0.98;\r\n}\r\n\r\n.header-account,\r\n.project-card,\r\n.add-project-card__button,\r\n#task-editor__form,\r\n.save-task__button {\r\n  border: 1px solid var(--outline);\r\n  box-shadow: 2px 2px;\r\n}\r\n\r\n.header {\r\n  width: fit-content;\r\n  display: flex;\r\n}\r\n\r\n.header-account {\r\n  width: fit-content;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border-radius: 30px;\r\n  margin: 10px 20px;\r\n  padding: 10px 15px;\r\n\r\n  background-color: var(--account-bg);\r\n}\r\n\r\n.main-container {\r\n  padding: 20px 40px;\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.add-project-card__button{\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    background-color: var(--project-bg);\r\n    filter: brightness(0.9);\r\n}\r\n\r\n.project-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  height: fit-content;\r\n\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background-color: var(--project-bg);\r\n}\r\n\r\n.project-card__header {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project-card__title {\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  border-bottom: 1px solid var(--input-bottomline);\r\n  background-color: var(--project-bg);\r\n}\r\n\r\n.project-card__delete-button {\r\n  background-color: var(--project-bg);\r\n  border: none;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n#task-editor {\r\n  z-index: 100;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  position: fixed;\r\n  justify-content: center;\r\n\r\n  backdrop-filter: brightness(60%);\r\n}\r\n\r\n#task-editor__form {\r\n  height: fit-content;\r\n  width: 40%;\r\n  min-width: 330px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 20px;\r\n\r\n  border-radius: 10px;\r\n  background-color: var(--task-editor-bg);\r\n}\r\n\r\n#task-editor__form input {\r\n  padding: 5px;\r\n}\r\n\r\n#task-editor__form textarea {\r\n  height: 200px;\r\n  width: 100%;\r\n  resize: none;\r\n  overflow-y: auto;\r\n}\r\n\r\n.task-editor__head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.task-editor__title {\r\n  border: none;\r\n  border-bottom: 1px solid var(--input-bottomline);\r\n  background-color: var(--task-editor-bg);\r\n  font-weight: 600;\r\n}\r\n\r\n.task-editor__other-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.is-important__container {\r\n  display: flex;\r\n  align-items: start;\r\n  gap: 5px;\r\n}\r\n\r\n.is-important {\r\n  width: 16px;\r\n  aspect-ratio: 1;\r\n}\r\n\r\n.save-task__button {\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  background-color: var(--task-editor-bg);\r\n}\r\n\r\n.task-card{\r\n    display: flex;\r\n    border: 1px solid var(--outline);\r\n}\r\n\r\n.task-card button{\r\n    border: none;\r\n    background-color: var(--project-bg);\r\n\r\n}\r\n.task-card__button{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-card__due{\r\n    font-size: 0.8rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\n// localStorage.clear();\r\n\r\naddEventListener(\"DOMContentLoaded\", () => {\r\n  const mainContainer = document.querySelector(\".main-container\");\r\n  const projectApp = new _project__WEBPACK_IMPORTED_MODULE_1__.ProjectApp(mainContainer);\r\n  projectApp.renderProjects();\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectApp: () => (/* binding */ ProjectApp)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\r\n\r\n\r\nclass Project {\r\n  constructor(title = \"New Project\", taskList = new _tasks__WEBPACK_IMPORTED_MODULE_0__.TaskList()) {\r\n    this.title = title;\r\n    this.taskList = taskList;\r\n  }\r\n\r\n  rename(projectTitle) {\r\n    this.title = projectTitle;\r\n  }\r\n\r\n  addTask() {\r\n    this.taskList.add();\r\n  }\r\n\r\n  deleteTask(taskIndex) {\r\n    this.taskList.delete(taskIndex);\r\n  }\r\n\r\n  getTask(taskIndex) {\r\n    return this.taskList.getTask(taskIndex);\r\n  }\r\n\r\n  editTask(taskIndex, task) {\r\n    this.taskList.edit(taskIndex, task);\r\n  }\r\n\r\n  renderTaskCard() {\r\n    return this.taskList.renderCard();\r\n  }\r\n}\r\n\r\nclass ProjectList {\r\n  constructor() {\r\n    this.projects = [];\r\n    if (localStorage.getItem(\"projects\")) {\r\n      console.log(\"hello1\");\r\n      const projectList = JSON.parse(localStorage.getItem(\"projects\"));\r\n      projectList.forEach((storageProject) => {\r\n        const project = new Project(storageProject.title);\r\n        storageProject.taskList.tasks.forEach((storageTask) => {\r\n          const task = [\r\n            storageTask.title,\r\n            storageTask.description,\r\n            storageTask.dueDate,\r\n            storageTask.isImportant,\r\n          ];\r\n          project.taskList.load(task);\r\n        });\r\n        this.projects.push(project);\r\n      });\r\n    } else {\r\n      console.log(\"hello2\");\r\n      this.updateCache();\r\n    }\r\n  }\r\n\r\n  addProject() {\r\n    const project = new Project();\r\n    this.projects.push(project);\r\n    this.updateCache();\r\n    console.clear();\r\n    console.log(this.projects);\r\n  }\r\n\r\n  deleteProject(projectIndex) {\r\n    this.projects.splice(projectIndex, 1);\r\n    this.updateCache();\r\n  }\r\n\r\n  renameProject(newName, projectIndex) {\r\n    this.projects[projectIndex].rename(newName);\r\n    this.updateCache();\r\n    console.clear();\r\n    console.log(this.projects);\r\n  }\r\n\r\n  getAllProjects() {\r\n    return this.projects;\r\n  }\r\n\r\n  addTask(projectIndex) {\r\n    this.projects[projectIndex].addTask();\r\n    this.updateCache();\r\n    console.log(this.projects);\r\n  }\r\n\r\n  deleteTask(projectIndex, taskIndex) {\r\n    this.projects[projectIndex].deleteTask(taskIndex);\r\n    this.updateCache();\r\n  }\r\n\r\n  getTask(projectIndex, taskIndex) {\r\n    return this.projects[projectIndex].getTask(taskIndex);\r\n  }\r\n\r\n  editTask(projectIndex, taskIndex, task) {\r\n    this.projects[projectIndex].editTask(taskIndex, task);\r\n    this.updateCache();\r\n  }\r\n\r\n  getProjectTasks(projectIndex) {\r\n    return this.projects[projectIndex].getTaskList();\r\n  }\r\n\r\n  updateCache() {\r\n    localStorage.setItem(\"projects\", JSON.stringify(this.projects));\r\n  }\r\n}\r\n\r\nclass ProjectCardRenderer {\r\n  createProjectCard(project, i) {\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"project-card\";\r\n    card.dataset.projectIndex = i;\r\n\r\n    const cardHeader = document.createElement(\"div\");\r\n    cardHeader.classList.add(\"project-card__header\");\r\n\r\n    const projectTitle = document.createElement(\"input\");\r\n    projectTitle.className = \"project-card__title\";\r\n    projectTitle.value = project.title;\r\n\r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.classList.add(\"project-card__delete-button\");\r\n    const deleteButtonIcon = document.createElement(\"img\");\r\n    deleteButtonIcon.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    deleteButton.appendChild(deleteButtonIcon);\r\n\r\n    cardHeader.appendChild(projectTitle);\r\n    cardHeader.appendChild(deleteButton);\r\n\r\n    const addTaskButton = document.createElement(\"button\");\r\n    addTaskButton.className = \"task__add-button\";\r\n    addTaskButton.textContent = \"+ Add Task\";\r\n\r\n    const tasksList = project.renderTaskCard();\r\n\r\n    const addTaskDiv = document.createElement(\"div\");\r\n    addTaskDiv.className = \"project-card__add-task\";\r\n    addTaskDiv.appendChild(addTaskButton);\r\n\r\n    card.appendChild(cardHeader);\r\n    card.appendChild(tasksList);\r\n    card.appendChild(addTaskDiv);\r\n\r\n    return card;\r\n  }\r\n\r\n  createAddProjectCard() {\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"add-project-card\";\r\n\r\n    const addButton = document.createElement(\"button\");\r\n    addButton.className = \"add-project-card__button\";\r\n    addButton.textContent = \"+ Add Project\";\r\n\r\n    card.appendChild(addButton);\r\n    return card;\r\n  }\r\n}\r\n\r\nclass ProjectApp {\r\n  constructor(mainContainer) {\r\n    this.mainContainer = mainContainer;\r\n    this.projectList = new ProjectList();\r\n    this.projectCardRenderer = new ProjectCardRenderer();\r\n\r\n    // create template project\r\n    // this.projectList.addProject();\r\n    // this.renderProjects();\r\n  }\r\n\r\n  renderProjects() {\r\n    this.mainContainer.innerHTML = \"\";\r\n\r\n    this.projectList.getAllProjects().forEach((project, i) => {\r\n      const projectCard = this.projectCardRenderer.createProjectCard(\r\n        project,\r\n        i\r\n      );\r\n      this.mainContainer.appendChild(projectCard);\r\n    });\r\n\r\n    const addProjectCard = this.projectCardRenderer.createAddProjectCard();\r\n\r\n    this.mainContainer.appendChild(addProjectCard);\r\n    this.buttonHandler();\r\n  }\r\n\r\n  buttonHandler() {\r\n    document\r\n      .querySelector(\".add-project-card__button\")\r\n      .addEventListener(\"click\", () => {\r\n        this.projectList.addProject();\r\n        this.renderProjects();\r\n      });\r\n\r\n    document.querySelectorAll(\".project-card__title\").forEach((title) => {\r\n      title.addEventListener(\"change\", (e) => {\r\n        const value = e.target.value;\r\n        const index = e.target.closest(\".project-card\").dataset.projectIndex;\r\n        this.projectList.renameProject(value, index);\r\n      });\r\n    });\r\n\r\n    document\r\n      .querySelectorAll(\".project-card__delete-button\")\r\n      .forEach((button) => {\r\n        button.addEventListener(\"click\", (e) => {\r\n          const index = e.target.closest(\".project-card\").dataset.projectIndex;\r\n          this.projectList.deleteProject(index);\r\n          this.renderProjects();\r\n        });\r\n      });\r\n\r\n    document.querySelectorAll(\".task-card__button\").forEach((button) => {\r\n      button.addEventListener(\"click\", (e) => {\r\n        const projectIndex =\r\n          e.target.closest(\".project-card\").dataset.projectIndex;\r\n        const taskIndex =\r\n          e.target.closest(\".task-card__button\").dataset.taskIndex;\r\n\r\n        const task = this.projectList.getTask(projectIndex, taskIndex);\r\n\r\n        const taskEditor = document.createElement(\"div\");\r\n        taskEditor.setAttribute(\"id\", \"task-editor\");\r\n\r\n        const taskEditorCard = document.createElement(\"form\");\r\n        taskEditorCard.setAttribute(\"id\", \"task-editor__form\");\r\n        taskEditorCard.setAttribute(\"name\", \"task-editor__form\");\r\n\r\n        const taskTitle = document.createElement(\"input\");\r\n        taskTitle.classList.add(\"task-editor__title\");\r\n        taskTitle.value = task.title;\r\n\r\n        const taskDescription = document.createElement(\"textarea\");\r\n        taskDescription.placeholder = \"Add more detail about the task.\";\r\n        taskDescription.value = task.description;\r\n\r\n        // other detail\r\n        const taskOtherDetail = document.createElement(\"div\");\r\n        taskOtherDetail.classList.add(\"task-editor__other-detail\");\r\n\r\n        const taskDueDateContainer = document.createElement(\"div\");\r\n        taskDueDateContainer.classList.add(\"task-due__container\");\r\n\r\n        const taskDueDateLabel = document.createElement(\"div\");\r\n        taskDueDateLabel.textContent = \"Due Date\";\r\n\r\n        const taskDueDate = document.createElement(\"input\");\r\n        taskDueDate.type = \"date\";\r\n        taskDueDate.value = task.dueDate;\r\n\r\n        taskDueDateContainer.appendChild(taskDueDateLabel);\r\n        taskDueDateContainer.appendChild(taskDueDate);\r\n\r\n        const isImportantContainer = document.createElement(\"div\");\r\n        isImportantContainer.classList.add(\"is-important__container\");\r\n\r\n        const isImportant = document.createElement(\"input\");\r\n        isImportant.classList.add(\"is-important\");\r\n        isImportant.type = \"checkbox\";\r\n        isImportant.checked = task.isImportant;\r\n\r\n        const isImportantLabel = document.createElement(\"label\");\r\n        isImportantLabel.textContent = \"Important\";\r\n\r\n        isImportantContainer.appendChild(isImportant);\r\n        isImportantContainer.appendChild(isImportantLabel);\r\n\r\n        taskOtherDetail.appendChild(taskDueDateContainer);\r\n        taskOtherDetail.appendChild(isImportantContainer);\r\n\r\n        const saveButton = document.createElement(\"button\");\r\n        saveButton.classList.add(\"save-task__button\");\r\n        saveButton.textContent = \"save\";\r\n        saveButton.setAttribute(\"form\", \"task-editor__form\");\r\n        saveButton.type = \"submit\";\r\n\r\n        taskEditorCard.appendChild(taskTitle);\r\n        taskEditorCard.appendChild(taskDescription);\r\n        // taskEditorCard.appendChild(taskDueDate);\r\n        taskEditorCard.appendChild(taskOtherDetail);\r\n        taskEditorCard.appendChild(saveButton);\r\n\r\n        taskEditor.appendChild(taskEditorCard);\r\n\r\n        document.body.insertAdjacentElement(\"afterbegin\", taskEditor);\r\n\r\n        taskEditorCard.addEventListener(\"submit\", (e) => {\r\n          e.preventDefault;\r\n          const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n            taskTitle.value,\r\n            taskDescription.value,\r\n            taskDueDate.value,\r\n            isImportant.checked\r\n          );\r\n          this.projectList.editTask(projectIndex, taskIndex, newTask);\r\n          taskEditor.remove();\r\n          this.renderProjects();\r\n        });\r\n      });\r\n    });\r\n\r\n    document.querySelectorAll(\".delete-task__button\").forEach((button) => {\r\n      button.addEventListener(\"click\", (e) => {\r\n        const projectIndex =\r\n          e.target.closest(\".project-card\").dataset.projectIndex;\r\n        const taskIndex = e.target.dataset.taskIndex;\r\n        this.projectList.deleteTask(projectIndex, taskIndex);\r\n        this.renderProjects();\r\n      });\r\n    });\r\n\r\n    document.querySelectorAll(\".project-card__add-task\").forEach((button) => {\r\n      button.addEventListener(\"click\", (e) => {\r\n        const index = e.target.closest(\".project-card\").dataset.projectIndex;\r\n        this.projectList.addTask(index);\r\n        this.renderProjects();\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\nconst storage = new (class {\r\n  save(a, b) {\r\n    localStorage.setItem(a, b);\r\n  }\r\n\r\n  load(objectClass) {\r\n    localStorage.getItem(objectClass);\r\n  }\r\n\r\n  remove() {\r\n    localStorage.removeItem(\"test\");\r\n  }\r\n\r\n  check(objectClass) {\r\n    return localStorage(objectClass);\r\n  }\r\n\r\n  storageAvailable(type) {\r\n    let storage;\r\n    try {\r\n      storage = window[type];\r\n      const x = \"__storage_test__\";\r\n      storage.setItem(x, x);\r\n      storage.removeItem(x);\r\n      return true;\r\n    } catch (e) {\r\n      return (\r\n        e instanceof DOMException &&\r\n        // everything except Firefox\r\n        (e.code === 22 ||\r\n          // Firefox\r\n          e.code === 1014 ||\r\n          // test name field too, because code might not be present\r\n          // everything except Firefox\r\n          e.name === \"QuotaExceededError\" ||\r\n          // Firefox\r\n          e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\r\n        // acknowledge QuotaExceededError only if there's something already stored\r\n        storage &&\r\n        storage.length !== 0\r\n      );\r\n    }\r\n  }\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskList: () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\r\n\r\nclass Task {\r\n  constructor(\r\n    title = \"Task Title\",\r\n    description = \"\",\r\n    dueDate = \"-\",\r\n    isImportant = true\r\n  ) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.isImportant = isImportant;\r\n  }\r\n}\r\n\r\nclass TaskCard {\r\n  create(taskCardContainer, task, i) {\r\n    const taskCard = document.createElement(\"div\");\r\n    taskCard.classList.add(\"task-card\");\r\n\r\n    const taskCardButton = document.createElement(\"button\");\r\n    taskCardButton.classList.add(\"task-card__button\");\r\n    taskCardButton.dataset.taskIndex = i;\r\n\r\n    const taskCardTitle = document.createElement(\"div\");\r\n    taskCardTitle.classList.add(\"task-card__title\");\r\n    taskCardTitle.textContent = task.title;\r\n\r\n    const taskCardDue = document.createElement(\"div\");\r\n    taskCardDue.classList.add(\"task-card__due\");\r\n    const dueDate = task.dueDate.toString().split(\"-\");\r\n    const formatDueDate = `${dueDate[2]}-${dueDate[1]}-${dueDate[0]}`;\r\n    taskCardDue.textContent = formatDueDate;\r\n\r\n    taskCardButton.appendChild(taskCardTitle);\r\n    taskCardButton.appendChild(taskCardDue);\r\n\r\n    const deleteTaskButton = document.createElement(\"button\");\r\n    deleteTaskButton.classList.add(\"delete-task__button\");\r\n    const deleteButtonIcon = document.createElement(\"img\");\r\n    deleteButtonIcon.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    deleteTaskButton.appendChild(deleteButtonIcon);\r\n\r\n    taskCard.appendChild(taskCardButton);\r\n    taskCard.appendChild(deleteTaskButton);\r\n    taskCardContainer.appendChild(taskCard);\r\n  }\r\n}\r\n\r\nclass TaskList {\r\n  constructor(tasks = []) {\r\n    this.tasks = tasks;\r\n\r\n    // create template task\r\n    // this.add();\r\n  }\r\n\r\n  add(taskDetail) {\r\n    const task = new Task(taskDetail);\r\n    this.tasks.push(task);\r\n  }\r\n\r\n  load(taskDetail) {\r\n    const [title, description, dueDate, isImportant] = taskDetail;\r\n    console.log(taskDetail);\r\n    const task = new Task(title, description, dueDate, isImportant);\r\n    this.tasks.push(task);\r\n  }\r\n\r\n  delete(taskIndex) {\r\n    this.tasks.splice(taskIndex, 1);\r\n  }\r\n\r\n  getAllTasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  getTask(index) {\r\n    return this.tasks[index];\r\n  }\r\n\r\n  edit(index, task) {\r\n    this.tasks[index] = task;\r\n  }\r\n\r\n  renderCard() {\r\n    const taskCardContainer = document.createElement(\"div\");\r\n    taskCardContainer.classList.add(\"task-container\");\r\n\r\n    this.tasks.forEach((task, i) => {\r\n      new TaskCard().create(taskCardContainer, task, i);\r\n    });\r\n    return taskCardContainer;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5a11263604d5cb3e292.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/delete.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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