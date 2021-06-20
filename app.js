// function sayhello(nameOfPerson, age) {
//     console.log("Hello My name is " + nameOfPerson + " and I'm " + age);
// }

// sayhello("blair", 30);
// sayhello("hyun", 25 );
// sayhello("min", 30);


// function plus(a, b) { 
//     console.log(a+b);
// }
// function divide(a,b) {
//     console.log(a/b);
// }
// plus(8, 60); 
// divide(98, 20);


const player = {
    name : "blair",
    sayHello: function(otherPersonsName) {
      console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("Min"); 
player.sayHello("Jisu"); 