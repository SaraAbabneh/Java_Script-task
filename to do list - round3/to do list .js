let productBtn = document.getElementById("producr_btn");
let productCounter = document.getElementById("product_contanier");

let data = JSON.parse(localStorage.getItem("tasks")) || [
  { id: 1, name: "Task1" },
  { id: 2, name: "Task2" },
  { id: 2, name: "Task3" },
];

function drow(items) {
  productCounter.innerHTML = "";
  items.forEach(function (ele) {
    // console.log(ele)
    productCounter.innerHTML += `   
    <div class="item">
        <span>${ele.name}</span>
        <div class="btn">
        <button data-taskid="${ele.id}" onclick="removeitem(this)">Remove</button>
        <button data-taskid="${ele.id}" onclick="showUpdateInput(this)">UPdata</button>
        </div> 
     </div>

    `;
  });
}
window.onload = function () {
  drow(data);
  // console.log(data);
};

productBtn.addEventListener("click", additem);

function additem() {
  let productinput = document.getElementById("product_input");
  if (productinput.value == "") {
    alert("enter task");
    return;
  }

  let lastid = data.length ? data[data.length - 1].id : 0;
  data.push({ id: ++lastid, name: productinput.value });

  let taskString = JSON.stringify(data);
  localStorage.setItem("tasks", taskString);

  let additem = data[data.length - 1];

  // console.log(data);

  productCounter.innerHTML += drow(data);

  // `
  // <div class="item">
  //     <span>${additem.name}</span>
  //     <div class="btn">
  //     <button data-taskid="${ele.id}" onclick="removeitem(this)">Remove</button>
  //     <button data-taskid="${ele.id}">UPdata</button>
  //     </div>
  //  </div>

  // `
  productinput.value = "";

  //  console.log(additem.id);
}
function removeitem(buttonElement) {
  let taskid = parseInt(buttonElement.getAttribute("data-taskid"));

  // console.log(taskid);

  data = data.filter((task) => task.id !== taskid);
  let taskString = JSON.stringify(data);
  localStorage.setItem("tasks", taskString);
  drow(data);
}

function showUpdateInput(buttonElement) {
  let taskid = parseInt(buttonElement.getAttribute("data-taskid"));
  let item = data.find((task) => task.id === taskid);

  if (!item) return;

  let spanElement = buttonElement.parentNode.parentNode.querySelector("span");
  let taskName = spanElement.innerText;

  spanElement.innerHTML = `
      <input type="text" class="update-input" value="${taskName}">
      <button data-taskid="${taskid}" onclick="updateTask(this)">Save</button>
      <button data-taskid="${taskid}" onclick="cancelUpdate(this)">Cancel</button>
    `;

  buttonElement.style.display = "none";
}

function updateTask(buttonElement) {
  let taskid = parseInt(buttonElement.getAttribute("data-taskid"));
  let item = data.find((task) => task.id === taskid);

  if (!item) return;

  let inputElement = buttonElement.parentNode.querySelector(".update-input");
  let updatedTaskName = inputElement.value.trim();

  if (updatedTaskName === "") {
    alert("Task name cannot be empty.");
    return;
  }

  item.name = updatedTaskName;

  let taskString = JSON.stringify(data);
  localStorage.setItem("tasks", taskString);

  drow(data);
}

function searchTasks() {
  let searchQuery = document
    .getElementById("search_input")
    .value.trim()
    .toLowerCase();
  if (searchQuery === "") {
    drow(data); // If search query is empty, display all tasks
    return;
  }

  let filteredData = data.filter((task) =>
    task.name.toLowerCase().includes(searchQuery)
  );
  drow(filteredData);
}

document.getElementById("search_btn").addEventListener("click", searchTasks);

document.getElementById("search_input").addEventListener("input", searchTasks);

document.getElementById("search_btn").addEventListener("click", searchTasks);
