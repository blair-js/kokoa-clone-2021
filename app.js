// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//      const username = loginInput.value;
//      if(username === "") {
//         alert("Please write your name.");
//      } else if(username.length > 15) {
//         alert("Your name is too long.");
//      }
// }
//위의 방법도 좋지만 최대한 브라우저의 기능을 활용하는 것이 좋음. 하기의 코드 참조. 

function onLoginBtnClick() {
   const username = loginInput.value;
   console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick)