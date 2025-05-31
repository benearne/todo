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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority, project) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = new Date(dueDate);\n        this.priority = priority;\n        this.complete = false;\n        this.project = project;\n    }\n}\n\nclass Project {\n    constructor(title, description, category) {\n        this.title = title;\n        this.description = description;\n        this.category = category;\n        this.listOfOpenTodos= [];\n        this.listOfFinishedTodos = [];\n    }\n}\n\n//# sourceURL=webpack://todo/./src/classes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findProjectByTitle: () => (/* binding */ findProjectByTitle),\n/* harmony export */   findTodoByTitle: () => (/* binding */ findTodoByTitle)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n\n\nconst allProjects = [];\nconst defaultProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Default\", \"\", \"green\");\naddProjectList(defaultProject);\n\n\nconst todo1 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"Wash the dishes\", \"There's a lot in the kitchen\", \"2025-05-18\", \"low\", false, defaultProject);\nconst todo2 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"second test todo\", \"This is a description\", \"2025-05-18\", \"middle\", false, defaultProject);\n\naddTodoToPoject(todo1, defaultProject);\naddTodoToPoject(todo2, defaultProject);\n\nupdateProjectDropdown();\n\nfunction addProjectList(project) {\n    allProjects.push(project)\n}\n\nfunction addTodoToPoject(todo, project) {\n    if (project === \"\") {\n        project = defaultProject;\n    }\n    project.listOfOpenTodos.push(todo);\n    todo.project = project;\n}\n\nfunction completeTodo(todo) {\n    todo.complete = true;\n\n    const project = todo.project;\n    if (!project) {\n        console.error(\"This Todo is not assigned to a project\")\n    };\n\n    const index = project.listOfOpenTodos.indexOf(todo);\n    if (index !== -1) {\n        const element = project.listOfOpenTodos.splice(index, 1)[0];\n        project.listOfFinishedTodos.push(element);\n    };\n\n    display(project);\n}\n\nfunction changeTodoTitle(todo, title) {\n    todo.title = title;\n}\n\nfunction changeTodoDescription(todo, description) {\n    todo.description = description;\n}\n\nfunction changeTodoDueDate(todo, dueDate) {\n    todo.dueDate = dueDate;\n}\n\nfunction changeTodoPriority(todo, priority) {\n    todo.priority = priority;\n}\n\nfunction deleteAllFinishedTodos(project) {\n    project.listOfFinishedTodos.length = 0;\n}\n\nfunction findTodoByTitle(title) {\n    return defaultProject.listOfOpenTodos.find(todo => todo.title === title);\n}\n\nfunction findProjectByTitle(title) {\n    return allProjects.find(project => project.title === title) || defaultProject;\n}\n\nfunction updateProjectDropdown() {\n    const dropdown = document.getElementById(\"project\");\n\n    // Erst leeren\n    dropdown.innerHTML = \"\";\n\n    // Für jedes Projekt eine Option hinzufügen\n    for (const project of allProjects) {\n        const option = document.createElement(\"option\");\n        option.value = project.title;\n        option.textContent = project.title;\n        dropdown.appendChild(option);\n    }\n}\n\n//display\n\nfunction display(project) {\n\n    // remove everything\n    const list = document.getElementById(\"todolist\");\n    list.innerHTML = \"\";\n\n    console.log(project.listOfOpenTodos)\n\n    // header\n    const header = document.createElement(\"h1\");\n    header.textContent = project.title;\n    list.appendChild(header);\n\n    // unfinished list\n    const openLabel = document.createElement(\"h2\");\n    openLabel.textContent = \"open tasks:\";\n    list.appendChild(openLabel);\n\n    if (project.listOfOpenTodos.length === 0) {\n        openLabel.textContent = \"No open tasks\";\n    }\n\n    // hide if empty\n    header.style.display = \"block\";\n    openLabel.style.display = \"block\";\n    if (project.listOfFinishedTodos.length === 0 && project.listOfOpenTodos.length === 0) {\n        header.style.display = \"none\";\n        openLabel.style.display = \"none\";\n    }\n\n    const topOp = document.createElement(\"ul\");\n    list.appendChild(topOp);\n\n    // each open todo\n    for (const task of project.listOfOpenTodos) {\n        const title = document.createElement(\"li\");\n        title.textContent = task.title;\n        title.classList.add(\"todo_element\")\n        topOp.appendChild(title);\n\n        const date = document.createElement(\"div\");\n        date.textContent = task.dueDate;\n        date.classList.add(\"info\")\n        title.appendChild(date);\n\n        const prio = document.createElement(\"div\");\n        prio.textContent = task.priority;\n        prio.classList.add(\"info\")\n        title.appendChild(prio);\n\n        // complete Button\n        const completeBttn = document.createElement(\"button\");\n        completeBttn.textContent = \"completed\";\n        completeBttn.classList.add(\"complete_bttn\");\n        completeBttn.setAttribute(\"data-title\", task.title)\n        title.appendChild(completeBttn);\n    };\n    \n    // event listeners for complete buttns\n    const compBttns = document.querySelectorAll(\".complete_bttn\");\n    compBttns.forEach(bttn => {\n        bttn.addEventListener(\"click\", (event) => {\n            const title = event.target.dataset.title;\n            const todo = findTodoByTitle(title);\n            completeTodo(todo);\n        })\n    });\n\n    // finished list\n    const finishedLabel = document.createElement(\"h2\");\n    finishedLabel.textContent = \"finished tasks:\";\n    list.appendChild(finishedLabel);\n\n    finishedLabel.style.display = \"none\";\n    if (project.listOfFinishedTodos.length !== 0) {\n        finishedLabel.style.display = \"block\";\n    }\n\n    const topFin = document.createElement(\"ul\");\n    list.appendChild(topFin);\n\n    // each finished todo\n    for (const task of project.listOfFinishedTodos) {\n        const title = document.createElement(\"li\");\n        title.textContent = task.title;\n        title.classList.add(\"todo_element\")\n        topFin.appendChild(title);\n\n        const date = document.createElement(\"div\");\n        date.textContent = task.dueDate;\n        date.classList.add(\"info\")\n        title.appendChild(date);\n\n        const prio = document.createElement(\"div\");\n        prio.textContent = task.priority;\n        prio.classList.add(\"info\")\n        title.appendChild(prio);\n    };\n\n    const removeFinBttn = document.createElement(\"button\");\n    removeFinBttn.textContent = \"remove all\";\n    list.appendChild(removeFinBttn);\n\n    removeFinBttn.style.display = \"none\";\n    if (project.listOfFinishedTodos.length !== 0) {\n        removeFinBttn.style.display = \"block\";\n    }\n\n    removeFinBttn.addEventListener(\"click\", () => {\n        deleteAllFinishedTodos(project);\n        display(project);\n    });\n};\n\n\n// Todo Form\nconst formTodo = document.getElementById(\"todoForm\");\n\nformTodo.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const title = document.getElementById(\"title\").value.trim();\n    const description = document.getElementById(\"description\").value.trim();\n    const dueDate = document.getElementById(\"dueDate\").value;\n    const priority = document.getElementById(\"priority\").value;\n    const projectName = document.getElementById(\"project\").value;\n\n    if (title === \"\") {\n        alert(\"Title required!\");\n        return;\n    }\n    const selectedProject = findProjectByTitle(projectName);\n    const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority, selectedProject);\n\n    addTodoToPoject(newTodo, selectedProject);\n\n    display(selectedProject);\n    formTodo.reset();\n    formTodo.style.display = \"none\";\n})\n\n\nconst newtodoBttn = document.getElementById(\"new_todo\");\nnewtodoBttn.addEventListener(\"click\", function () {\n    formTodo.style.display = \"block\";\n})\n\n// Project Form\nconst formProject = document.getElementById(\"projectForm\")\n\nformProject.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const title = document.getElementById(\"titlePr\").value.trim();\n    const description = document.getElementById(\"descriptionPr\").value.trim();\n    const category = document.getElementById(\"categoryPr\").value;\n\n    if (title === \"\") {\n        alert(\"Title required!\");\n        return;\n    };\n    \n    const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description, category);\n    addProjectList(newProject);\n    updateProjectDropdown(); \n    formProject.reset();\n    formProject.style.display = \"none\";\n})\n\nconst newProjectBttn = document.getElementById(\"new_project\");\nnewProjectBttn.addEventListener(\"click\", function () {\n    formProject.style.display = \"block\";\n})\n\n\n// show all proejects\nfor (const project of allProjects) {\n    display(project);\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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