//This variable is linking it to the specific Id'd button on the page
var buttonEl = document.querySelector('#save-task');
//This variable is linking it directly  to the id <ul> or aka list element within html
var tasksToDoEl = document.querySelector("#tasks-to-do");

//This will act as the function under which something happens when the button is clicked. It is with the-
//variable buttonEl which we linked to the button on the html page
buttonEl.addEventListener("click",function(){
    //this variable is used to create an element with the html page, we named it listItemEl
    var listItemEl = document.createElement("li");
    // we linked the variable we created to a class, so that it automatically falls under the same-
    // css styling of that class
    listItemEl.className = "task-item";
    // this element used was to add text content, in this case we added the content to the variable we linked 
    // earlier to the <ul>list within the html. but it will not show up without it being appended
    listItemEl.textContent = "This is a new task.";
    // The last step is to add the content to a specific place we want to, in this case since we added content to 
    //tasksToDoEl, we then take that content and added it to the listItem, which in this case fucntions as the formatter
    // of the document. It took the content, put it into a <li> element, then added it to a class for css formatting
    // and lastly it added it to the bottom of the <li> since that is the appendchild function
    tasksToDoEl.appendChild(listItemEl);
});

// what we did here is we used the function above and copied it and named it createTaskHandler.
//The purpose is to make it easier to call upon it with the eventlistner function bellow. So instead 
// of writing the whole code in the event listner when just established the function, gave it a variable name,
// and linked it to the click
var createTaskHandler = function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent="This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);
