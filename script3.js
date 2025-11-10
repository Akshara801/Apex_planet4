// --- Navigation ---
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// --- To-Do List ---
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask() {
  if (taskInput.value.trim()) {
    tasks.push(taskInput.value.trim());
    taskInput.value = "";
    renderTasks();
  }
}
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
renderTasks();

// --- Product Listing ---
const products = [
  { name: "Smart Watch", category: "tech", rating: 5 },
  { name: "Sneakers", category: "fashion", rating: 4 },
  { name: "Headphones", category: "tech", rating: 3 },
  { name: "Jacket", category: "fashion", rating: 5 }
];
const productContainer = document.getElementById("productContainer");

function displayProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h4>${p.name}</h4><p>Category: ${p.category}</p><p>⭐ ${p.rating}</p>`;
    productContainer.appendChild(div);
  });
}
displayProducts(products);

document.getElementById("searchInput").addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(search)));
});

function filterProducts() {
  const filter = document.getElementById("filterSelect").value;
  if (filter === "all") displayProducts(products);
  else displayProducts(products.filter(p => p.category === filter));
}
