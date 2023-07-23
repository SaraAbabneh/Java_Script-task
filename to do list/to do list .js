const addBtn = document.querySelector("#add-btn");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = task;
};

const addTask = () => {
  const taskName = newTas;
  InputDeviceInfo.value.trim();
  error.styke.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }
  const task = `
    <div class="task">
        <input type="checkbox"class="task-check">
        <span class="taskname">${taskName}</span>
        
        <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button class="delete">
        <i class="fa-solid fa-trash "></i>
        </button>
    </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount = -1;
      displayCount(taskCount);
    };
  });

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target.parrentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });
  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onChange = () => {
      checkBox.nextElementSilbling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });
  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";

  addBtn.addEventListener("click", addTask);
};
