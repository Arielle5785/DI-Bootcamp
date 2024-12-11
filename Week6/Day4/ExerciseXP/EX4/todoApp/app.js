import todoList from "./todo.js";

const myTodoList = new todoList();

myTodoList.addTask("Learn JavaScript");
myTodoList.addTask("Build a Todo App");
myTodoList.addTask("Write Documentation");

myTodoList.markComplete(0);
myTodoList.listTasks();