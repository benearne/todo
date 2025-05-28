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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Todo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.complete = false;\n        this.projectLink = null;\n    }\n\n    announceTodo() {\n        console.log(`The todo with the title ${this.title} is due ${this.dueDate} and has the priority ${this.priority}.`)\n    }\n}\n\nclass Project {\n    constructor(title, description, category) {\n        this.title = title;\n        this.description = description;\n        this.category = category;\n        this.listOfOpenTodos = [];\n        this.listOfFinishedTodos = [];\n    }\n\n    announceProject() {\n        console.log(`The Project with the title ${this.title} and has the category ${this.category}. There are ${this.listOfOpenTodos.length} open tasks and ${this.listOfFinishedTodos.length} finished tasks in this project`)\n    }\n}\n\nfunction addTodoToPoject (todo, project) {\n    project.listOfOpenTodos.push(todo);\n    todo.project = project;\n}\n\nfunction completeTodo (todo) {\n    todo.complete = true;\n\n    const project = todo.project;\n    if (!project) {\n        console.error(\"This Todo is not assigned to a project\")\n    }\n\n    const index = project.listOfOpenTodos.indexOf(todo);\n    if (index !== -1) {\n        const element = project.listOfOpenTodos.splice(index);\n        project.listOfFinishedTodos.push(element);\n    }\n}\n\nfunction changeTodoTitle (todo, title) {\n    todo.title = title;\n}\n\nfunction changeTodoDescription (todo, description) {\n    todo.description = description;\n}\n\nfunction changeTodoDueDate (todo, dueDate) {\n    todo.dueDate = dueDate;\n}\n\nfunction changeTodoPriority (todo, priority) {\n    todo.priority = priority;\n}\n\nfunction deleteAllFinishedTodos (project) {\n    project.listOfFinishedTodos.length = 0;\n}\n\nfunction display (project) {\n    const newdiv = document.createElement(\"div\");\n    newdiv.textContent = project.title;\n    const list = document.getElementById(\"todolist\");\n    list.appendChild(newdiv);\n}\n\n\n\n\nconst testTodo = new Todo(\"go sleep\", \"reminder\", \"12.12.2025\", \"green\")\nconst defaultProject = new Project(\"Tasks\", \"\", \"green\");\n\naddTodoToPoject(testTodo, defaultProject);\ncompleteTodo(testTodo);\n\nchangeTodoTitle(testTodo, \"new title\")\nconsole.log(testTodo)\n\ndisplay(defaultProject)\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;