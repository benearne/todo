import { findTodoByTitle, findProjectByTitle, completeTodo } from "./index.js"

export function display(project) {

    // remove everything
    const list = document.getElementById("todolist");
    list.innerHTML = "";

    // header
    const header = document.createElement("h1");
    header.textContent = project.title;
    list.appendChild(header);

    // unfinished list
    const openLabel = document.createElement("h2");
    openLabel.textContent = "open tasks:";
    list.appendChild(openLabel);

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
        completeBttn.setAttribute("data-title", task.title)
        title.appendChild(completeBttn);
    };
    
    // event listeners for complete buttns
    const compBttns = document.querySelectorAll(".complete_bttn");
    compBttns.forEach(bttn => {
        bttn.addEventListener("click", (event) => {
            const title = event.target.dataset.title;
            const todo = findTodoByTitle(title);
            completeTodo(todo);
        })
    });

    // finished list
    const finishedLabel = document.createElement("h2");
    finishedLabel.textContent = "finished tasks:";
    list.appendChild(finishedLabel);

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
};