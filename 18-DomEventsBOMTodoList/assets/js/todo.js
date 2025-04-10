// const taskInput = document.getElementById("taskInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");
// const deleteAllBtn = document.getElementById("deleteAllBtn");

// addTaskBtn.addEventListener("click", () => {
//   const taskText = taskInput.value.trim();

//   if (taskText === "") return;

//   const taskWrapper = document.createElement("div");
//   taskWrapper.classList.add("task-wrapper");
//   taskWrapper.style.display = "flex";
//   taskWrapper.style.alignItems = "center";
//   taskWrapper.style.gap = "10px";
//   taskWrapper.style.marginTop = "10px";

//   const taskItem = document.createElement("input");
//   taskItem.type = "text";
//   taskItem.disabled = true;
//   taskItem.classList.add("task-item");
//   taskItem.value = taskText;

//   const doneBtn = document.createElement("button");
//   doneBtn.textContent = "Done";
//   doneBtn.className = "delete-btn"; 
//   doneBtn.style.backgroundColor = "#4caf50";
//   doneBtn.addEventListener("click", () => {
//     taskItem.classList.toggle("done");
//   });

//   taskWrapper.appendChild(taskItem);
//   taskWrapper.appendChild(doneBtn);
//   taskList.appendChild(taskWrapper);

//   taskInput.value = "";
// });

// deleteAllBtn.addEventListener("click", () => {
//   taskList.innerHTML = "";
// });










const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.done ? 'green' : 'red'}`;

        const taskText = document.createElement('span');
        taskText.textContent = `${index + 1}. ${task.text}`;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.done ? 'Undo' : 'Done';
        toggleBtn.onclick = () => {
            task.done = !task.done;
            renderTasks();
        };

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            const newText = prompt('Edit your task:', task.text);
            if (newText) {
                task.text = newText;
                renderTasks();
            }
        };

        actionsDiv.appendChild(toggleBtn);
        actionsDiv.appendChild(editBtn);

        if (task.done) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => {
                tasks.splice(index, 1);
                renderTasks();
            };
            actionsDiv.appendChild(deleteBtn);
        }

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(actionsDiv);
        taskList.appendChild(taskDiv);
    });
}

addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text, done: false });
        taskInput.value = '';
        renderTasks();
    }
};

clearAllBtn.onclick = () => {
    tasks = [];
    renderTasks();
};

renderTasks();
