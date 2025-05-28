export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    listOfOpenTodos = [];
    listOfFinishedTodos = [];


    announceTodo() {
        console.log(`The todo with the title ${this.title} is due ${this.dueDate} and has the priority ${this.priority}. There are ${this.listOfOpenTodos.length} open tasks and ${this.listOfFinishedTodos.length} finished tasks in this project`)
    }
}