class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.projectLink = null;
    }

    announceTodo() {
        console.log(`The todo with the title ${this.title} is due ${this.dueDate} and has the priority ${this.priority}.`)
    }
}

class Project {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.listOfOpenTodos = [];
        this.listOfFinishedTodos = [];
    }

    announceProject() {
        console.log(`The Project with the title ${this.title} and has the category ${this.category}. There are ${this.listOfOpenTodos.length} open tasks and ${this.listOfFinishedTodos.length} finished tasks in this project`)
    }
}

function addTodoToPoject (todo, project) {
    project.listOfOpenTodos.push(todo);
    todo.project = project;
}

function completeTodo (todo) {
    todo.complete = true;

    const project = todo.project;
    if (!project) {
        console.error("This Todo is not assigned to a project")
    }

    const index = project.listOfOpenTodos.indexOf(todo);
    if (index !== -1) {
        const element = project.listOfOpenTodos.splice(index);
        project.listOfFinishedTodos.push(element);
    }
}

function changeTodoTitle (todo, title) {
    todo.title = title;
}

function changeTodoDescription (todo, description) {
    todo.description = description;
}

function changeTodoDueDate (todo, dueDate) {
    todo.dueDate = dueDate;
}

function changeTodoPriority (todo, priority) {
    todo.priority = priority;
}

function deleteAllFinishedTodos (project) {
    project.listOfFinishedTodos.length = 0;
}

function display (project) {
    const newdiv = document.createElement("div");
    newdiv.textContent = project.title;
    const list = document.getElementById("todolist");
    list.appendChild(newdiv);
}




const testTodo = new Todo("go sleep", "reminder", "12.12.2025", "green")
const defaultProject = new Project("Tasks", "", "green");

addTodoToPoject(testTodo, defaultProject);
completeTodo(testTodo);

changeTodoTitle(testTodo, "new title")
console.log(testTodo)

display(defaultProject)