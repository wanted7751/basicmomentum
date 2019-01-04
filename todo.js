const toDoForm = document.querySelector(".js-toDoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"

const toDos = [

];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintTodo(text){
    const li = document.createElement("li");
    const delteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delteBtn.innerHTML = "❌";
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delteBtn);
    li.id= newId;
    toDoList.appendChild(li)
    const toDoobj={
        text: text,
        id: newId
    }
    toDos.push(toDoobj);
    saveToDos();
    // saveToDos 는 toDos.push(toDoobj) 이거 후에 호출 해야 한다. 안그러게되면 비어있게 된다.
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){ 
            paintTodo(toDo.text);
        })
        
    }else{
        console.log("in something");
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();