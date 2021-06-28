const age = parseInt( prompt("How old are you?"));


if(isNaN(age) || age < 0 ){
console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("Yor are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <=80){
    console.log("You should exercise.");
} else if (age >= 80) {
    console.log("You can do whatever you want.");
} else if (age === 100) {
    console.log("wow you are wise")
} 

// || 연산자 : or의 의미. 조건문의 조건중 하나라도 true 이면 해당 조건문 실행.
// && 연산자 : and의 의미. 조건문의 모든 조건이 true 이면 해당 조건문 실행.

