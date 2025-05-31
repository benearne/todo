export class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.complete = false;
        this.project = project;
    }
}

export class Project {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.listOfOpenTodos= [];
        this.listOfFinishedTodos = [];
    }
}