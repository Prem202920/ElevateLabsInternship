// Select elements
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Store tasks in array as objects
let tasks = [];

// Add task when button clicked
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();
    const dateValue = taskDate.value;

    // Prevent empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Store task as object
    const taskObj = {
        text: taskText,
        date: dateValue
    };

    tasks.push(taskObj);
    renderTasks();

    // Clear inputs
    taskInput.value = "";
    taskDate.value = "";
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.textContent = task.text;

        // Mark completed
        span.addEventListener("click", () => {
            span.classList.toggle("completed");
        });

        // Date display
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("task-date");
        dateSpan.textContent = task.date ? `📅 ${task.date}` : "";

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(dateSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
