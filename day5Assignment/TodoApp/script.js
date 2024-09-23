const todoContainer = document.querySelector(".tbody");
const addNewTaskBtn = document.getElementById("addNewTask");
const taskNameInput = document.getElementById("taskName");
const statusSelect = document.getElementById("status");
const updateModal = document.getElementById("updateModel");
const cancelBtn = document.getElementById("cancel");
const updateTaskBtn = document.getElementById("updateTask");

let updateElementIndex = null;

const loadTodos = () =>
  JSON.parse(localStorage.getItem("todoList")) || [
    { id: 1, task: "Finish React project", status: "completed" },
    { id: 2, task: "Submit job application", status: "completed" },
    { id: 3, task: "Buy groceries", status: "pending" },
    { id: 4, task: "Workout for 30 minutes", status: "pending" },
    { id: 5, task: "Read a book for 1 hour", status: "ongoing" },
  ];
const saveTodos = (todos) =>
  localStorage.setItem("todoList", JSON.stringify(todos));

const getStatusColor = (status) =>
  ({
    completed: "green",
    pending: "red",
    ongoing: "yellow",
  }[status] || "gray");

const showModal = (buttonText) => {
  updateModal.style.display = "flex";
  updateTaskBtn.innerText = buttonText;
};

const hideModal = () => {
  taskNameInput.value = "";
  statusSelect.value = "";
  updateModal.style.display = "none";
  updateElementIndex = null;
};

const renderTodoList = () => {
  todoContainer.innerHTML = "";
  const todos = loadTodos();

  todos.forEach((todo, index) => {
    const tr = document.createElement("tr");

    const taskNameCell = document.createElement("td");
    taskNameCell.textContent = todo.task;

    const statusCell = document.createElement("td");
    statusCell.innerText = todo.status.toUpperCase();
    statusCell.style.backgroundColor = getStatusColor(todo.status);
    statusCell.style.color = "#ffffff";

    const editCell = document.createElement("td");
    editCell.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    editCell.classList.add("update");
    editCell.addEventListener("click", () => handleEdit(index));

    const deleteCell = document.createElement("td");
    deleteCell.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteCell.classList.add("delete");
    deleteCell.addEventListener("click", () => handleDelete(index));

    tr.append(taskNameCell, statusCell, editCell, deleteCell);
    todoContainer.appendChild(tr);
  });
};

const handleDelete = (index) => {
  const todos = loadTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodoList();
};

const handleEdit = (index) => {
  const todos = loadTodos();
  const todo = todos[index];
  showModal("Update");
  taskNameInput.value = todo?.task;
  statusSelect.value = todo?.status;
  updateElementIndex = index;
};

const handleUpdateOrCreate = (e) => {
  e.preventDefault();
  const todos = loadTodos();

  if (updateElementIndex !== null) {
    todos[updateElementIndex] = {
      task: taskNameInput.value,
      status: statusSelect.value,
    };
  } else {
    todos.unshift({
      task: taskNameInput.value,
      status: statusSelect.value,
    });
  }

  saveTodos(todos);
  renderTodoList();
  hideModal();
};

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
});

updateTaskBtn.addEventListener("click", handleUpdateOrCreate);

addNewTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showModal("Create");
});

renderTodoList();
