const toDoForm = document.querySelector(".js-toDoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"


let toDos = [

];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos
    // toDos를 변경해줘야 하는대 위에 const toDos로 되어있으면 안되기 때문에 let 으로 변경설정하였다. 
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // 뿌려줄때는 로컬에 저장된게 각 객체로 되니 string화 하는것이며
    // 로컬에 다시 저장할때는 객체화 시켜서 객체를 각 빼내서 정보만 저장한다? 다시봐야할듯 하다 .약간 혼동된다.
}


function paintTodo(text){
    const li = document.createElement("li");
    const delteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delteBtn.innerHTML = "❌";
    delteBtn.addEventListener("click", deleteToDo)
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
    // 
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
        //console.log(loadedToDos[0]);
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos);
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