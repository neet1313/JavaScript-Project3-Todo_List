// ====================== Selectors ==========================
var plusButton = document.querySelector(".button-todo");
var todoList = document.querySelector(".todo-list");
var inputTodo = document.querySelector(".input-todo");
// ====================== Selectors ==========================


//================== Event Listeners====================
plusButton.addEventListener("click", addToDO);
todoList.addEventListener("click", deleteList);
//================== Event Listeners====================


//===================================== Functions =======================================

/*------- Creating a div in which list, tick button and trash button are there ------*/
function addToDO(event) {
  event.preventDefault(); //Prevent from submitting the form and page refreshing

  //Adding a Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDivClass');

  //Creating a list
  const todoListElement = document.createElement("li");
  todoListElement.classList.add("todoListElementClass");
  todoListElement.innerText = inputTodo.value;
  todoListElement.contentEditable = true;
  todoDiv.appendChild(todoListElement);

  //Creating Check plus Button
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkButtonClass");
  checkButton.innerHTML = '<i class="fas fa-check-circle fa-lg"></i>';
  todoDiv.appendChild(checkButton);

  //Creating Trash Button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trashButtonClass");
  trashButton.innerHTML = '<i class="fas fa-trash fa-lg"></i>';
  todoDiv.appendChild(trashButton);

  //Attaching "todoDivClass" to "todoContainer_todoList"
  todoList.appendChild(todoDiv);

  //Clearing input from the List
  inputTodo.value = "";
}
/*------- Creating a div in which list, tick button and trash button are there ------*/


/*--------- What the tick and Trash Buttons will do ---------------*/
function deleteList(event) {
  let liClass = (event.target);

  //Finding if the clicked element is the dustbin Button
  if (liClass.classList[0] === "trashButtonClass") {
    //Selecting the parent of the list element
    const todoDiv = liClass.parentElement;
    // Animation
    todoDiv.classList.add("listDeleteAnimation");
    //Wait for transition to end and Removing the list
    todoDiv.addEventListener("transitionend", () => {
      todoDiv.remove();
    });
  }
  // If the clicked element is the Tick Button
  else if (liClass.classList[0] === "checkButtonClass") {
    const todoDiv = liClass.parentElement;
    //Toggle between 2 Classes in the parent
    todoDiv.classList.toggle("strikeThough");
  }
}
/*--------- What the tick and Trash Buttons will do ---------------*/

//===================================== Functions =======================================
