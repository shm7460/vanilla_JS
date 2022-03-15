// 4.3

// const loginform = document.getElementById("login-form");
// const loginInput = loginform.querySelector("input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
// }

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// loginform.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// 4.4;
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const greeting = document.getElementById("greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// // 4.5
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const greeting = document.getElementById("greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem("username", username);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// 4.6;
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const greeting = document.getElementById("greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreeting(username);
// }

// function paintGreeting(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   paintGreeting(savedUsername);
// }
