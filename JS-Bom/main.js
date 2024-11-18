let tasks = [];

// Yeni tapşırıq əlavə etmək funksiyası
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

// Tapşırıqları göstərmək funksiyası
function displayTasks(filter = 'all') {
    const taskList = document.querySelector(".task-list"); // `.task-list` class-ına görə seçirik
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

// Tapşırığın tamamlanma vəziyyətini dəyişmək funksiyası
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Tapşırıqları filtrləmək funksiyası
function filterTasks(type) {
    displayTasks(type);
}

// Bütün tapşırıqları təmizləmək funksiyası
function clearTasks() {
    tasks = [];
    displayTasks();
}

// Tapşırığı silmə funksiyası (SweetAlert ilə)
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
            // Tapşırığı silir
            tasks.splice(index, 1);
            displayTasks();
            
            // Silindiyi mesajı göstərir
            Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success"
            });
        }
    });
}

// Event Listener: `Add` düyməsinə kliklə tapşırıq əlavə edir
document.querySelector(".addBtn").addEventListener("click", addTask);
