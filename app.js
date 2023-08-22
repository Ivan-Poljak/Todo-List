//Variables
const input = document.getElementById("task");
const submitBtn = document.getElementById("submit");
const list = document.querySelector(".list");
const message = document.querySelector(".message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

//Adds task to list
function addTask() {
  if (input.value) {
    const task = document.createElement("li");
    const div = document.createElement("div");
    task.innerText = input.value;
    list.appendChild(task);
    task.appendChild(div);

    //Adds interactivity to li element
    task.addEventListener("click", (element) => {
      if (element.target != task) {
        return;
      } else {
        task.classList.toggle("checked");
      }
    });

    //Edit icon
    const editIcon = document.createElement("i");
    editIcon.classList = "fas fa-edit";
    div.appendChild(editIcon);

    //Adds interactivity to edit icon (edits)
    editIcon.addEventListener("click", (e) => {
      submitBtn.value = "Edit";
      input.value = e.target.parentElement.parentElement.innerText;

      if (submitBtn.value == "Edit") {
        submitBtn.addEventListener("click", () => {
          if (e.target.parentElement) {
            e.target.parentElement.parentElement.remove();
            e.target.parentElement.parentElement.innerText = input.value;

            submitBtn.value = "Submit";
          }
        });
      }
    });

    //Trash icon
    const trashIcon = editIcon.cloneNode(true);
    trashIcon.classList = "fas fa-trash-alt";
    div.appendChild(trashIcon);

    //Adds interactivity to trash icon (removes)
    trashIcon.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      message.innerHTML = "Task deleted successfully";
      message.style.display = "block";
      message.style.padding = "1rem 0";
      message.style.color = "rgba(32, 126, 32, 0.781)";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    });

    //Resets form
    input.value = "";
  } else {
    message.innerHTML = "Enter the task!";
    message.style.display = "block";
    message.style.padding = "1rem 0";
    message.style.color = "rgba(255, 0, 0, 0.856)";
    setTimeout(function () {
      message.style.display = "none";
    }, 2000);
  }
}
