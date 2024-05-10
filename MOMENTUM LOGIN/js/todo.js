const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function TodoDelete(event){
    const li  = event.target.parentElement;
    li.remove();                                                   // li.id - string
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));   // li.id = false 나오도록
    saveToDos();                                                   // 저장
}


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id; //각각의 obj에 id값 부여
    const span = document.createElement("span");
    span.innerText = newToDo.text;  // obj중에서 text 값만 가져오기 위해 .text붙임
    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click", TodoDelete);

    li.appendChild(span); // li가 span 이라는 자식을 가지게 됨.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; // newToDo에 미리 저장
    toDoInput.value = "";            // 그 후 비워줌
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos1 = localStorage.getItem(TODOS_KEY);

if(saveToDos1 !== null){     
    const parsedToDos = JSON.parse(saveToDos1); // localStorage에서 온 string을 가지고 javjascript object로 변화
    toDos = parsedToDos;                        // 초기화 방지
    parsedToDos.forEach(paintToDo);
}
                     