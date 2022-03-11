// 3.6
// const title = document.querySelector("div.hey h1:first-child");
// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }

// title.addEventListener("click", handleTitleClick);

// 3.7;

// const title = document.querySelector("div.hey h1:first-child");
// function handleTitleClick() {
//   const clickedClass = "active";
//   if (title.className === clickedClass) {
//     title.className = "";
//   } else {
//     title.className = clickedClass;
//   }
// }

// title.addEventListener("click", handleTitleClick);

3.8;
// const title = document.querySelector("div.hey h1:first-child");

// function handleTitleClick() {
//   const clickedClass = "active";
//   if (title.classList.contains(clickedClass)) {
//     title.classList.remove(clickedClass);
//   } else {
//     title.classList.add(clickedClass);
//   }
// }
// title.addEventListener("click", handleTitleClick);

const title = document.querySelector("div.hey h1:first-child");

function handleTitleClick() {
  title.classList.toggle("active");
}
title.addEventListener("click", handleTitleClick);
