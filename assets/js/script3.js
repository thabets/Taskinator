//Defining Variables

var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

//Functions
var taskFormHandler = function () {
  //Prevent default is a function that keeps the DOM from refreshing everytime we press the submit button
  event.preventDefault();

  //Defining variables that will be inputed into task handler
  var taskType = document.getElementById("taskType");
  var taskName = document.querySelector("#taskName");

  //Extracting the value of the variables
  var taskTypeInput = taskType.value;
  var taskNameInput = taskName.value;

  //Passing up data as an object

  var taskDataOj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  //After putting items into taskDataObj we will want to send the argument to createTaskEl
  createTaskEl(taskDataOj);
};

var createTaskEl = function (taskDataOj) {
  //Create list item
  var taskItemEl = document.createElement("li");
  taskItemEl.className = "task-item";

  //Create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  //Adding HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataOj.name +
    "</h3><span class='task-type'>" +
    taskDataOj.type +
    "</span>";

  //appending child of the information into the item
  taskItemEl.appendChild(taskInfoEl);
  //then adding such item to the whole dom
  taskToDoEl.appendChild(taskItemEl);
};

//Submit handler

formEl.addEventListener("submit", taskFormHandler);
