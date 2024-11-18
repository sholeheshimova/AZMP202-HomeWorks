let tasks = [];

// Yeni tapsiriq elave etmek ucun
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

// Tapsiriqlari göstermək ucun
function displayTasks(filter = 'all') {
    const taskList = document.querySelector(".task-list"); 
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        if (filter === 'completed' && !task.completed) return;
        if (filter === 'pending' && task.completed) return;

        const taskItem = document.createElement("div");
        taskItem.className = "task-item" + (task.completed ? " completed" : "");

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleComplete(index);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(task.text));

        const icons = document.createElement("div");
        icons.className = "icons";

        const deleteBtn = document.createElement("i");
        deleteBtn.className = "fa-solid fa-trash-can";
        deleteBtn.style.color = "red";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.onclick = () => confirmDeleteTask(index);

        icons.appendChild(deleteBtn);

        taskItem.appendChild(label);
        taskItem.appendChild(icons);
        taskList.appendChild(taskItem);
    });
}

// Tapsirigin tamamlanma veziyyetini deyismək ucun
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Tapsiriqlari filtrlemek ucun
function filterTasks(type) {
    displayTasks(type);
}

// Bütün tapsiriqlari temizlemek ucun
function clearTasks() {
    tasks = [];
    displayTasks();
}

// Tapsirigi silmek ucun  sweetalert istifade edirik
function confirmDeleteTask(index) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // Tapsirigi silir
            tasks.splice(index, 1);
            displayTasks();
            
            // Silindiyi mesajı gosderir
            Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success"
            });
        }
    });
}


document.querySelector(".addBtn").addEventListener("click", addTask);
