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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Basis-Layout */\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: #f4f4f4;\n  color: #222;\n  padding: 2rem;\n  line-height: 1.5;\n}\n\nh1, h2 {\n  font-weight: 600;\n  margin: 1.5rem 0 0.5rem;\n}\n\n#todolist {\n  max-width: 600px;\n  margin: auto;\n}\n\n/* ToDo-Element */\nli.todo_element {\n  background-color: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  transition: box-shadow 0.2s ease;\n}\n\nli.todo_element:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n\n.info {\n  font-size: 0.85rem;\n  color: #777;\n  margin-top: 0.2rem;\n}\n\n/* Buttons */\nbutton {\n  appearance: none;\n  border: none;\n  border-radius: 4px;\n  padding: 0.6rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: #444;\n  color: #fff;\n  transition: background-color 0.2s ease;\n}\n\nbutton:hover {\n  background-color: #000;\n}\n\n.complete_bttn {\n  margin-top: 0.5rem;\n  background-color: #2ecc71;\n}\n\n.complete_bttn:hover {\n  background-color: #27ae60;\n}\n\n#new_todo,\n#new_project {\n  background-color: #3498db;\n  margin-bottom: 1rem;\n}\n\n#new_todo:hover,\n#new_project:hover {\n  background-color: #2980b9;\n}\n\n/* Formulare */\nform {\n  display: none;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 2rem;\n  max-width: 600px;\n  margin: 2rem auto;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n}\n\nform input,\nform textarea,\nform select {\n  width: 100%;\n  padding: 0.75rem;\n  margin-bottom: 1.2rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 1rem;\n  background: #fafafa;\n  transition: border 0.2s ease;\n}\n\nform input:focus,\nform textarea:focus,\nform select:focus {\n  border-color: #3498db;\n  outline: none;\n  background: #fff;\n}\n\n/* Responsives Verhalten */\n@media (max-width: 500px) {\n  body {\n    padding: 1rem;\n  }\n\n  form {\n    padding: 1rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority, project) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = new Date(dueDate);\n        this.priority = priority;\n        this.complete = false;\n        this.project = project;\n        this.id = crypto.randomUUID();\n    }\n}\n\nclass Project {\n    constructor(title, description, category) {\n        this.title = title;\n        this.description = description;\n        this.category = category;\n        this.listOfOpenTodos= [];\n        this.listOfFinishedTodos = [];\n    }\n}\n\n//# sourceURL=webpack://todo/./src/classes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst allProjects = [];\nconst allTodos = [];\n\nconst defaultProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Default\", \"This is a descriptopn\", \"green\");\naddToProjectList(defaultProject);\n\n\nconst todo1 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"Wash the dishes\", \"There's a lot in the kitchen\", \"2025-05-18\", \"low\", false, defaultProject);\nconst todo2 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"second test todo\", \"This is a description\", \"2025-05-18\", \"middle\", false, defaultProject);\n\naddToDoToProject(todo1, defaultProject);\naddToDoToProject(todo2, defaultProject);\n\nupdateProjectDropdown();\n\nfunction addToProjectList(project) {\n    allProjects.push(project)\n}\n\nfunction addToDoToProject(todo, project) {\n    if (project === \"\") {\n        project = defaultProject;\n    }\n    project.listOfOpenTodos.push(todo);\n    todo.project = project;\n    allTodos.push(todo);\n}\n\nfunction completeTodo(todo) {\n    todo.complete = true;\n\n    const project = todo.project;\n    if (!project) {\n        console.error(\"This Todo is not assigned to a project\")\n    };\n\n    const index = project.listOfOpenTodos.indexOf(todo);\n    if (index !== -1) {\n        const element = project.listOfOpenTodos.splice(index, 1)[0];\n        project.listOfFinishedTodos.push(element);\n    };\n\n    displayAll();\n}\n\nfunction changeTodoTitle(todo, title) {\n    todo.title = title;\n}\n\nfunction changeTodoDescription(todo, description) {\n    todo.description = description;\n}\n\nfunction changeTodoDueDate(todo, dueDate) {\n    todo.dueDate = dueDate;\n}\n\nfunction changeTodoPriority(todo, priority) {\n    todo.priority = priority;\n}\n\nfunction deleteAllFinishedTodos(project) {\n    project.listOfFinishedTodos.length = 0;\n}\n\nfunction findTodoByID(id) {\n    return allTodos.find(todo => todo.id === id);\n}\n\nfunction findProjectByTitle(title) {\n    return allProjects.find(project => project.title === title) || defaultProject;\n}\n\nfunction updateProjectDropdown() {\n    const dropdown = document.getElementById(\"project\");\n\n    // Erst leeren\n    dropdown.innerHTML = \"\";\n\n    // Für jedes Projekt eine Option hinzufügen\n    for (const project of allProjects) {\n        const option = document.createElement(\"option\");\n        option.value = project.title;\n        option.textContent = project.title;\n        dropdown.appendChild(option);\n    }\n}\n\n//display\n\nfunction display(project) {\n\n    const list = document.getElementById(\"todolist\");\n\n    // header\n    const header = document.createElement(\"h1\");\n    header.textContent = project.title;\n    list.appendChild(header);\n\n    // unfinished list\n    const openLabel = document.createElement(\"h2\");\n    openLabel.textContent = \"open tasks\";\n    list.appendChild(openLabel);\n\n    if (project.listOfOpenTodos.length === 0) {\n        openLabel.textContent = \"No open tasks\";\n    }\n\n    // hide if empty\n    // header.style.display = \"block\";\n    // openLabel.style.display = \"block\";\n    // if (project.listOfFinishedTodos.length === 0 && project.listOfOpenTodos.length === 0) {\n    //     header.style.display = \"none\";\n    //     openLabel.style.display = \"none\";\n    // }\n\n    const topOp = document.createElement(\"ul\");\n    list.appendChild(topOp);\n\n    // each open todo\n    for (const task of project.listOfOpenTodos) {\n        const title = document.createElement(\"li\");\n        title.textContent = task.title;\n        title.classList.add(\"todo_element\")\n        topOp.appendChild(title);\n\n        const date = document.createElement(\"div\");\n        date.textContent = task.dueDate;\n        date.classList.add(\"info\")\n        title.appendChild(date);\n\n        const prio = document.createElement(\"div\");\n        prio.textContent = task.priority;\n        prio.classList.add(\"info\")\n        title.appendChild(prio);\n\n        // complete Button\n        const completeBttn = document.createElement(\"button\");\n        completeBttn.textContent = \"completed\";\n        completeBttn.classList.add(\"complete_bttn\");\n        completeBttn.setAttribute(\"data-id\", task.id);\n        title.appendChild(completeBttn);\n    };\n    \n    // event listeners for complete buttns\n    const compBttns = document.querySelectorAll(\".complete_bttn\");\n    compBttns.forEach(bttn => {\n        bttn.addEventListener(\"click\", (event) => {\n            const id = event.target.dataset.id;\n            const todo = findTodoByID(id);\n            completeTodo(todo);\n        })\n    });\n\n    // finished list\n    const finishedLabel = document.createElement(\"h2\");\n    finishedLabel.textContent = \"finished tasks\";\n    list.appendChild(finishedLabel);\n\n    finishedLabel.style.display = \"none\";\n    if (project.listOfFinishedTodos.length !== 0) {\n        finishedLabel.style.display = \"block\";\n    }\n\n    const topFin = document.createElement(\"ul\");\n    list.appendChild(topFin);\n\n    // each finished todo\n    for (const task of project.listOfFinishedTodos) {\n        const title = document.createElement(\"li\");\n        title.textContent = task.title;\n        title.classList.add(\"todo_element\")\n        topFin.appendChild(title);\n\n        const date = document.createElement(\"div\");\n        date.textContent = task.dueDate;\n        date.classList.add(\"info\")\n        title.appendChild(date);\n\n        const prio = document.createElement(\"div\");\n        prio.textContent = task.priority;\n        prio.classList.add(\"info\")\n        title.appendChild(prio);\n    };\n\n    const removeFinBttn = document.createElement(\"button\");\n    removeFinBttn.textContent = \"remove all\";\n    list.appendChild(removeFinBttn);\n\n    removeFinBttn.style.display = \"none\";\n    if (project.listOfFinishedTodos.length !== 0) {\n        removeFinBttn.style.display = \"block\";\n    }\n\n    removeFinBttn.addEventListener(\"click\", () => {\n        deleteAllFinishedTodos(project);\n        displayAll();\n    });\n};\n\n// show all projects\nfunction displayAll() {\n    // remove everything\n    const list = document.getElementById(\"todolist\");\n    list.innerHTML = \"\";\n    // display every project\n    list.innerHTML = \"\";\n    for (const project of allProjects) {\n        display(project);\n    }\n}\n\ndisplayAll();\n\n\n// Todo Form\nconst formTodo = document.getElementById(\"todoForm\");\n\nformTodo.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const title = document.getElementById(\"title\").value.trim();\n    const description = document.getElementById(\"description\").value.trim();\n    const dueDate = document.getElementById(\"dueDate\").value;\n    const priority = document.getElementById(\"priority\").value;\n    const projectName = document.getElementById(\"project\").value;\n\n    if (title === \"\") {\n        alert(\"Title required!\");\n        return;\n    }\n    const selectedProject = findProjectByTitle(projectName);\n    const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority, false, selectedProject);\n\n    addToDoToProject(newTodo, selectedProject);\n\n    displayAll();\n    formTodo.reset();\n    formTodo.style.display = \"none\";\n})\n\n\nconst newtodoBttn = document.getElementById(\"new_todo\");\nnewtodoBttn.addEventListener(\"click\", function () {\n    formTodo.style.display = \"block\";\n})\n\n// Project Form\nconst formProject = document.getElementById(\"projectForm\")\n\nformProject.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const title = document.getElementById(\"titlePr\").value.trim();\n    const description = document.getElementById(\"descriptionPr\").value.trim();\n    const category = document.getElementById(\"categoryPr\").value;\n\n    if (title === \"\") {\n        alert(\"Title required!\");\n        return;\n    };\n    \n    const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description, category);\n    addToProjectList(newProject);\n    updateProjectDropdown(); \n    displayAll();\n    formProject.reset();\n    formProject.style.display = \"none\";\n})\n\nconst newProjectBttn = document.getElementById(\"new_project\");\nnewProjectBttn.addEventListener(\"click\", function () {\n    formProject.style.display = \"block\";\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

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