const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue"; 
}

function handleMouseenter() {
    h1.innerText = "mouse is here!";
}

function handleMouseleave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All good");
}

h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; ===> 위와 같은 기능 
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);