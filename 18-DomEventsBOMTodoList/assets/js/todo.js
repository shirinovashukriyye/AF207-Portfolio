const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task-wrapper");
  taskWrapper.style.display = "flex";
  taskWrapper.style.alignItems = "center";
  taskWrapper.style.gap = "10px";
  taskWrapper.style.marginTop = "10px";

  const taskItem = document.createElement("input");
  taskItem.type = "text";
  taskItem.disabled = true;
  taskItem.classList.add("task-item");
  taskItem.value = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "delete-btn"; 
  doneBtn.style.backgroundColor = "#4caf50";
  doneBtn.addEventListener("click", () => {
    taskItem.classList.toggle("done");
  });

  taskWrapper.appendChild(taskItem);
  taskWrapper.appendChild(doneBtn);
  taskList.appendChild(taskWrapper);

  taskInput.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});

