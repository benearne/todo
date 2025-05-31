import { Todo, Project } from "./classes.js"
import { display } from "./display.js"

function addTodoToPoject(todo, project) {
    if (project === "") {
        project = defaultProject;
    }
    project.listOfOpenTodos.push(todo);
    todo.project = project;
}

export function completeTodo(todo) {
    todo.complete = true;

    const project = todo.project;
    if (!project) {
        console.error("This Todo is not assigned to a project")
    };

    const index = project.listOfOpenTodos.indexOf(todo);
    if (index !== -1) {
        const element = project.listOfOpenTodos.splice(index, 1)[0];
        project.listOfFinishedTodos.push(element);
    };

    console.log(todo.project.listOfOpenTodos);
    console.log(todo.project.listOfFinishedTodos);

    display(todo.project);
}

function changeTodoTitle(todo, title) {
    todo.title = title;
}

function changeTodoDescription(todo, description) {
    todo.description = description;
}

function changeTodoDueDate(todo, dueDate) {
    todo.dueDate = dueDate;
}

function changeTodoPriority(todo, priority) {
    todo.priority = priority;
}

function deleteAllFinishedTodos(project) {
    project.listOfFinishedTodos.length = 0;
}

export function findTodoByTitle(title) {
    return defaultProject.listOfOpenTodos.find(todo => todo.title === title);
}

export function findProjectByTitle(title) {
    return allProjects.find(project => project.title === title) || defaultProject;
}

const defaultProject = new Project("All Tasks", "", "green");
const allProjects = [defaultProject];

display(defaultProject)

const form = document.getElementById("todoForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const projectName = document.getElementById("project").value;

    if (title === "") {
        alert("Title required!");
        return;
    }
    const selectedProject = findProjectByTitle(projectName);
    const newTodo = new Todo(title, description, dueDate, priority, selectedProject);

    addTodoToPoject(newTodo, selectedProject);

    display(selectedProject);
    form.reset();
    form.style.display = "none";
})

const newtodoBttn = document.getElementById("new_todo");
newtodoBttn.addEventListener("click", function () {
    form.style.display = "block";
})