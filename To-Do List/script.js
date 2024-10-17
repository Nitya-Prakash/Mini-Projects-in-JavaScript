let inputField = document.querySelector(".inputField");
let textareaField = document.querySelector(".textareaField");
let addButton = document.querySelector(".addbtn");
let tasks = document.querySelector(".tasks");


addButton.addEventListener("click", () => {
    let taskName = inputField.value;
    let taskDesc = textareaField.value;
    if (taskName == "") {
        alert("Please Enter Your Task Name")
    } else {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task1");

        let taskDetails = document.createElement("div");
        taskDetails.classList.add("aboutTask");

        let taskTitle = document.createElement("h3");
        taskTitle.textContent = taskName;

        let taskDescription = document.createElement("h4");
        taskDescription.textContent = taskDesc;

        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDescription);

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteBtn");
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", () => {
            taskDiv.remove();
        })

        taskDiv.appendChild(taskDetails);
        taskDiv.appendChild(deleteButton);

        tasks.appendChild(taskDiv);

        inputField.value = "";
        textareaField.value = "";
    }
});
