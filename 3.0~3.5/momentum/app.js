// // 3.1
// // title의 내용을 변경함
// document.title = "Hello From JS!";
// // h1태그 id를 title로 정의한다는뜻
// const title = document.getElementById("grab");
// title.innerText = "Got you";
// console.log(title.id);
// console.log(title.className);
// console.dir(title);

// 3.2
// classname 가져오는 방법
// const title = document.getElementsByClassName("hey");
// console.log(title);
// tag 가져오는 방법
// const title = document.getElementsByTagName("h1");
// console.log(title);
// class 명으로 가져오기
// const title = document.querySelector(".hey:nth-child(2) h1");
// console.log(title);
// console.log((title.innerText = "히힛"));

// 3.3~3.4
// const title = document.querySelector("div.hey h1:first-child");
// function handleTitleClick() {
//   title.style.color = "blue";
//   title.innerText = "Hello!";
// }
// function handleMouseEnter() {
//   title.style.color = "green";
//   title.innerText = "Mouse is here!";
// }
// function handleMouseleave() {
//   title.style.color = "tomato";
//   title.innerText = "Welcome";
// }
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseleave);

// 3.5
const title = document.querySelector("div.hey h1:first-child");
function handleTitleClick() {
  title.style.color = "blue";
  title.innerText = "Hello!";
}
function handleMouseEnter() {
  title.style.color = "green";
  title.innerText = "Mouse is here!";
}
function handleMouseleave() {
  title.style.color = "tomato";
  title.innerText = "Welcome";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "orange";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseleave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
