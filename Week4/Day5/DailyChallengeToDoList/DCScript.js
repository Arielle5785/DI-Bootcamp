let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const submitButton = document.getElementById("submitTaskButton");
    const clearButton = document.getElementById("clearCompletedButton");
    taskForm.addEventListener("submit", (e) => e.preventDefault());
    submitButton.addEventListener("click", addTask);
    clearButton.addEventListener("click", clearCompletedTasks);
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const listTasks = document.querySelector(".listTasks");
  const taskText = taskInput.value.trim();
    if (taskText === "") {
     alert("Please enter a valid task: ");
     return;
    }
  tasks.push(taskText);
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through"; // Strike through the text
      label.style.color = "gray"; // Optional: Change text color for completed tasks
    } else {
      label.style.textDecoration = "none"; // Remove strike-through
      label.style.color = "black"; // Reset text color
    }
  });

  // Create the label for the checkbox
  const label = document.createElement("label");
  label.textContent = taskText;

  // Append elements to the task div
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);

  // Append the task div to the listTasks div
  listTasks.appendChild(taskDiv);

  // Clear the input field
  taskInput.value = "";
}

// Function to clear completed tasks
function clearCompletedTasks() {
  const listTasks = document.querySelector(".listTasks");
  const taskElements = document.querySelectorAll(".task");

  taskElements.forEach((task) => {
    const checkbox = task.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      listTasks.removeChild(task); // Remove the task from the DOM
    }
  });
}