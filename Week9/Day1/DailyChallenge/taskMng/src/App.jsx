import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/Task Filter";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all, completed, active

  // Add a new task
  const addTask = (taskName, taskDate) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
      date: taskDate,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit task
  const editTask = (id, name) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="container">
      <h1>Task Manager App</h1>
      <TaskInput addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
