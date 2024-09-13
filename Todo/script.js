// Helper to save the task list to localStorage

const array = [];
// const array = new Array();

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Helper to get tasks from localStorage
function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

// Function to add a task
function inputFieldfn() {
  const entryField = document.getElementById("entry-field");
  const task = entryField.value.trim();

  if (task) {
    // Get tasks from localStorage
    const tasks = getTasksFromLocalStorage();

    // Add the new task
    tasks.push(task);

    // Save updated tasks to localStorage
    saveTasksToLocalStorage(tasks);

    // Clear input field and re-render tasks
    entryField.value = "";
    renderTasks();
  }
}

// Function to remove a task
function removeTask(index) {
  // Get tasks from localStorage
  const tasks = getTasksFromLocalStorage();

  // Remove the task at the given index
  tasks.splice(index, 1);

  // Save updated tasks to localStorage
  saveTasksToLocalStorage(tasks);

  // Re-render tasks
  renderTasks();
}

// Function to render tasks from localStorage
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the list

  // Get tasks from localStorage
  const tasks = getTasksFromLocalStorage();

  // Loop through tasks and display each one
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <i class="fa-solid fa-trash" onclick="removeTask(${index})"></i>
    `;
    taskList.appendChild(li);
  });
}

// Function to clear all tasks
function clearData() {
  // Clear tasks from localStorage
  localStorage.removeItem("tasks");

  // Re-render tasks
  renderTasks();
}

// On page load, render tasks
window.onload = function () {
  renderTasks();
};
