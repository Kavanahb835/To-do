const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskDateTime = taskTime.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} - ${taskDateTime || "No time set"}</span>
        <div class="task-actions">
            <button class="complete">✔</button>
            <button class="edit">✏</button>
            <button class="delete">🗑</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    taskTime.value = "";

    li.querySelector(".complete").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".edit").addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null) {
            li.querySelector("span").innerText = `${newText} - ${taskDateTime}`;
        }
    });

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });
});