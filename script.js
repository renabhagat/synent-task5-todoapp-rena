function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">
            ${taskText}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);
    saveTasks();

    input.value = "";
}

function toggleComplete(task){
    task.classList.toggle("completed");
    saveTasks();
}
function deleteTask(button){
    button.parentElement.remove();
    saveTasks();
}
function saveTasks() {
    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}
function loadTasks() {
    document.getElementById("taskList").innerHTML =
        localStorage.getItem("tasks") || "";
}
loadTasks();