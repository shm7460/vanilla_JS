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
