const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("todo-form input"); 위 코드와 동일한내용. 코드법만 다름. 
const toDoList = document.getElementById("todo-list");

function painToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    painToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDosubmit);