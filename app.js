const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
   
   h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; ===> 위와 같은 기능 
