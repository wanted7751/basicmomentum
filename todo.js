const toDoForm = document.querySelector(".js-toDoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

console.log(toDoInput);

const TODOS_LS = "toDos"

function paintTodo(text){
    const li = document.createElement("li");
    const delteBtn = document.createElement("button");
    delteBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delteBtn);
    toDoList.appendChild(li)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null){
        console.log("null")
    }else{
        console.log("in something");
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();