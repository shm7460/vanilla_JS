const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// todos라는 변수명을 TODOS_KEY로 통합하기
const TODOS_KEY = "todos";
// newToDo내용들을 업데이트해서 배열해서 넣기
let toDos = [];

// 리스트 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼 삭제하는 함수
function deletToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
// newToDo만들어지는 함수
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
// 제출할때마다 새로고침 안되게 하기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// 문자열을 js가 이해할수있는 배열로만들기
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //   각배열에게 함수를 실행시켜준다
  parsedToDos.forEach(paintToDo);
}
