class todoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push({ task, completed: false });
    }
    markComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        } else { console.log('invalid');
        }
    }
    listTasks() {
        console.log("Todo List:");
        this.tasks.forEach((taskObj, index) => {
            const status = taskObj.completed ? "OK" : "KO";
            console.log(`${index + 1}  ${taskObj.task} ${status}`);
        });
    }
}

export default todoList