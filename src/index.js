import { Todo, Project } from "./classes.js"
import './style.css';

const allProjects = [];
const allTodos = [];

const defaultProject = new Project("Default", "This is a descriptopn", "green");
addToProjectList(defaultProject);


const todo1 = new Todo("Wash the dishes", "There's a lot in the kitchen", "2025-05-18", "low", false, defaultProject);
const todo2 = new Todo("second test todo", "This is a description", "2025-05-18", "middle", false, defaultProject);

addToDoToProject(todo1, defaultProject);
addToDoToProject(todo2, defaultProject);

updateProjectDropdown();

function addToProjectList(project) {
    allProjects.push(project)
}

function addToDoToProject(todo, project) {
    if (project === "") {
        project = defaultProject;
    }
    project.listOfOpenTodos.push(todo);
    todo.project = project;
    allTodos.push(todo);
}

function completeTodo(todo) {
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

    displayAll();
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

function findTodoByID(id) {
    return allTodos.find(todo => todo.id === id);
}

function findProjectByTitle(title) {
    return allProjects.find(project => project.title === title) || defaultProject;
}

function updateProjectDropdown() {
    const dropdown = document.getElementById("project");

    // Erst leeren
    dropdown.innerHTML = "";

    // Für jedes Projekt eine Option hinzufügen
    for (const project of allProjects) {
        const option = document.createElement("option");
        option.value = project.title;
        option.textContent = project.title;
        dropdown.appendChild(option);
    }
}

//display

function display(project) {

    const list = document.getElementById("todolist");

    // header
    const header = document.createElement("h1");
    header.textContent = project.title;
    list.appendChild(header);

    // unfinished list
    const openLabel = document.createElement("h2");
    openLabel.textContent = "open tasks";
    list.appendChild(openLabel);

    if (project.listOfOpenTodos.length === 0) {
        openLabel.textContent = "No open tasks";
    }

    // hide if empty
    // header.style.display = "block";
    // openLabel.style.display = "block";
    // if (project.listOfFinishedTodos.length === 0 && project.listOfOpenTodos.length === 0) {
    //     header.style.display = "none";
    //     openLabel.style.display = "none";
    // }

    const topOp = document.createElement("ul");
    list.appendChild(topOp);

    // each open todo
    for (const task of project.listOfOpenTodos) {
        const title = document.createElement("li");
        title.textContent = task.title;
        title.classList.add("todo_element")
        topOp.appendChild(title);

        const date = document.createElement("div");
        date.textContent = task.dueDate;
        date.classList.add("info")
        title.appendChild(date);

        const prio = document.createElement("div");
        prio.textContent = task.priority;
        prio.classList.add("info")
        title.appendChild(prio);

        // complete Button
        const completeBttn = document.createElement("button");
        completeBttn.textContent = "completed";
        completeBttn.classList.add("complete_bttn");
        completeBttn.setAttribute("data-id", task.id);
        title.appendChild(completeBttn);
    };
    
    // event listeners for complete buttns
    const compBttns = document.querySelectorAll(".complete_bttn");
    compBttns.forEach(bttn => {
        bttn.addEventListener("click", (event) => {
            const id = event.target.dataset.id;
            const todo = findTodoByID(id);
            completeTodo(todo);
        })
    });

    // finished list
    const finishedLabel = document.createElement("h2");
    finishedLabel.textContent = "finished tasks";
    list.appendChild(finishedLabel);

    finishedLabel.style.display = "none";
    if (project.listOfFinishedTodos.length !== 0) {
        finishedLabel.style.display = "block";
    }

    const topFin = document.createElement("ul");
    list.appendChild(topFin);

    // each finished todo
    for (const task of project.listOfFinishedTodos) {
        const title = document.createElement("li");
        title.textContent = task.title;
        title.classList.add("todo_element")
        topFin.appendChild(title);

        const date = document.createElement("div");
        date.textContent = task.dueDate;
        date.classList.add("info")
        title.appendChild(date);

        const prio = document.createElement("div");
        prio.textContent = task.priority;
        prio.classList.add("info")
        title.appendChild(prio);
    };

    const removeFinBttn = document.createElement("button");
    removeFinBttn.textContent = "remove all";
    list.appendChild(removeFinBttn);

    removeFinBttn.style.display = "none";
    if (project.listOfFinishedTodos.length !== 0) {
        removeFinBttn.style.display = "block";
    }

    removeFinBttn.addEventListener("click", () => {
        deleteAllFinishedTodos(project);
        displayAll();
    });
};

// show all projects
function displayAll() {
    // remove everything
    const list = document.getElementById("todolist");
    list.innerHTML = "";
    // display every project
    list.innerHTML = "";
    for (const project of allProjects) {
        display(project);
    }
}

displayAll();


// Todo Form
const formTodo = document.getElementById("todoForm");

formTodo.addEventListener("submit", function (event) {
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
    const newTodo = new Todo(title, description, dueDate, priority, false, selectedProject);

    addToDoToProject(newTodo, selectedProject);

    displayAll();
    formTodo.reset();
    formTodo.style.display = "none";
})


const newtodoBttn = document.getElementById("new_todo");
newtodoBttn.addEventListener("click", function () {
    formTodo.style.display = "block";
})

// Project Form
const formProject = document.getElementById("projectForm")

formProject.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("titlePr").value.trim();
    const description = document.getElementById("descriptionPr").value.trim();
    const category = document.getElementById("categoryPr").value;

    if (title === "") {
        alert("Title required!");
        return;
    };
    
    const newProject = new Project(title, description, category);
    addToProjectList(newProject);
    updateProjectDropdown(); 
    displayAll();
    formProject.reset();
    formProject.style.display = "none";
})

const newProjectBttn = document.getElementById("new_project");
newProjectBttn.addEventListener("click", function () {
    formProject.style.display = "block";
})





