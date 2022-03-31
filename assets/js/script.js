              //Variables

//This variable is linking it to the specific Id'd button on the page
//var buttonEl = document.querySelector('#save-task');
//This variable is linking it directly  to the id <ul> or aka list element within html
var tasksToDoEl = document.querySelector("#tasks-to-do");
//This variable links the whole <form> because we gave it a specific id of task-form to
//the variable formEl. We used this instead of the variable because the button element in the browser
//only listens to the button but ignore everything else, such as drop down menu and such
//we need this to be able to record everything 
var formEl = document.querySelector('#task-form');





//This will act as the function under which something happens when the button is clicked. It is with the-
//variable buttonEl which we linked to the button on the html page
//buttonEl.addEventListener("click",function(){
    //this variable is used to create an element with the html page, we named it listItemEl
  //  var listItemEl = document.createElement("li");
    // we linked the variable we created to a class, so that it automatically falls under the same-
    // css styling of that class
  //  listItemEl.className = "task-item";
    // this element used was to add text content, in this case we added the content to the variable we linked 
    // earlier to the <ul>list within the html. but it will not show up without it being appended
  //  listItemEl.textContent = "This is a new task.";
    // The last step is to add the content to a specific place we want to, in this case since we added content to 
    //tasksToDoEl, we then take that content and added it to the listItem, which in this case fucntions as the formatter
    // of the document. It took the content, put it into a <li> element, then added it to a class for css formatting
    // and lastly it added it to the bottom of the <li> since that is the appendchild function
  //  tasksToDoEl.appendChild(listItemEl);
//});





// what we did here is we used the function above and copied it and named it createTaskHandler.
//The purpose is to make it easier to call upon it with the eventlistner function bellow. So instead 
// of writing the whole code in the event listner when just established the function, gave it a variable name,
// and linked it to the click

var createTaskHandler = function(event){
  //we added a preventDefault event, which means in the event the page wants to refresh it self
  //it will stop. So it will stop its natural default action of refreshing everytime we submit
  event.preventDefault();
  //we assigned the input in our html a variable so that we can assign it some functionality
  //we also assign the name attribute to be more specific 
  //lastly we used .value function, this is to allow us the ability to extract what every value is found within that input
  var taskNameInput = document.querySelector("input[name='task-name']").value; //value of the user text input
  var taskTypeInput = document.querySelector("select[name='task-type']").value; //value of the user choices from drop down menu
  
    var listItemEl = document.createElement("li"); // This creates a list item attached to variable listItemEl
    listItemEl.className = "task-item";// Used ListItemEl variable to assign it a class to help with the css formatting

  //What we did below is we established that the listItemEl, that adds a list item would display the information
  //that was gathered from the taskNameInput at that moment in time.
  //  listItemEl.textContent= taskNameInput;
    
    var taskInfoEl = document.createElement("div"); //Created taskInfoEl variable so that we can create a div that will store the info in it
    taskInfoEl.className = "task-info"; // gave it a class association
    
    taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskNameInput+"</h3><span class='task-type'>" +taskTypeInput + "</span>"; //we used inner-
    //html function to add the styling as to how we would like the information to be displayed within the div
    
    listItemEl.appendChild(taskInfoEl); // we make the taskInfoEl variable append into the listItemEl variable, so that ListItemEl gets priority in
    //establishing its task
    
    tasksToDoEl.appendChild(listItemEl);
    
   
}

//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener('submit', createTaskHandler);

