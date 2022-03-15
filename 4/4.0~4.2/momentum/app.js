// // 4.0
// const loginform = document.getElementById("login-form");

// const loginInput = loginform.querySelector("input");
// const loginButton = loginform.querySelector("button");

// function onLoginBtnClick() {
//   console.log("hello", loginInput.value);
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// 4.1
// const loginform = document.getElementById("login-form");

// const loginInput = loginform.querySelector("input");
// const loginButton = loginform.querySelector("button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   console.log(username);
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// 4.2
const loginform = document.getElementById("login-form");
const loginInput = loginform.querySelector("input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginform.addEventListener("submit", onLoginSubmit);
