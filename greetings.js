// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//      const username = loginInput.value;
//      if(username === "") {
//         alert("Please write your name.");
//      } else if(username.length > 15) {
//         alert("Your name is too long.");
//      }
// }
//위의 방법도 좋지만 최대한 브라우저의 기능을 활용하는 것이 좋음. 하기의 코드 참조. 

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   // greeting.innerText = "Hello " + username; 아래와 동일한 방법. 
   painGreetings(username); 
}

function painGreetings(username) {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME); 
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   painGreetings(savedUsername); 
}

