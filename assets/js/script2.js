              //Variables

var tasksToDoEl = document.querySelector("#tasks-to-do");

var formEl = document.querySelector('#task-form');

var taskIdCounter = 0;

              //Functions

var taskFormHandler = function(event){
  
  event.preventDefault();
  
  var taskNameInput = document.querySelector("input[name='task-name']").value; 
  var taskTypeInput = document.querySelector("select[name='task-type']").value; 
  
  if(!taskNameInput || !taskTypeInput){
      alert("There is information missing, please double check!");
      return false;
  }
  //Package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  }
  // send that packaged data to createTaskEl
  createTaskEl(taskDataObj);

  formEl.reset(); //when done with adding a task it clears the fields as in resets them
   
}
var createTaskEl = function(taskDataObj){
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item";

    listItemEl.setAttribute("data-task-id", taskIdCounter);
    
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskDataObj.name+"</h3><span class='task-type'>" +taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl); 
    
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter for next unique id
    taskIdCounter++;

}

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
//This is the edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

//This is the delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

//Lastly we create a selector
var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name","status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(statusSelectEl);


var statusChoices = ["To Do", "In Progress", "Completed"];

for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
  
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

return actionContainerEl;
};



formEl.addEventListener('submit', taskFormHandler);

