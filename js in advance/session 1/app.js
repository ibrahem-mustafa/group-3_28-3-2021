// // Var

// var username = 'ahmed'
// var userAge = 21

// // Function

// function sayHi() {
//     console.log('hi')
// }

// // sayHi()

// var sayHello = function () {
//     console.log('Hello')
// }

// // sayHello();

// var sayName = (name) => {
//     console.log(name)
// }

// // sayName('ibrahem')


// function plus(x, y) {
//     return x + y
// }

// const result = plus(10, 15)

// // console.log(result)

// // Array

// var usersName = ['ahmed', 'ali', 'mohammed', 'mina']

// var collection = [
//     null,
//     {
//         name: 'ali',
//         salary: 20000
//     },
// ]

// // Loops

// // => For
// // for (var i =0; i < 10; i++) {
// //     console.log(i)
// // }

// // => while

// // var counter = 1;

// // while (counter < 10) {
// //     console.log(counter * 2)
// //     counter ++
// // }

// // => do while

// // do {
// //     console.log(counter)
// //     counter ++
// // } while(counter > 1 && counter < 10)

// // if condition

// var number = 12

// // if (number < 10) {
    
// //     console.log('Less than 10')
// // } else if (number < 20) {
// //     console.log('Less Than 20')
// // } else {
// //     console.log('Great')
// // }

// // Switch

// var userState = 'blocked' // active || pending || blocked

// // switch (userState) {
// //   case 'active':
// //     console.log("You Are Active, Have Fun");
// //     break;
// //   case 'pending':
// //     console.log("Your Profile Still In Review");
// //     break;
// //   case 'blocked':
// //     console.log("You Are Not Allowed To Join Us Any More");
// //     break;
// //   default:
// //     console.log("Condition Does Not Match");
// //     break;
// // }

// // recursive function

// // var counter = 0;

// // function count() {
// //     counter ++
// //     console.log(counter)

// //     if (counter < 50) {
// //         count()
// //     }
// // }

// // count()

// // try connect to the server
// // if Failed try again
// // if Failed Again Fro 4 times move on
// // if Success move on

// var connectTimes = 0;
// var connectSuccess = false;

// function connect() {
//     console.log('Try To Connect To The Server')
    
//     if (!connectSuccess && connectTimes < 4) {
//         console.log('Connection Failed, Try Again')
//         connectTimes++
//         connectSuccess = true
//         connect()
//     } else if (connectSuccess) {
//         console.log('Connected Successfully')        
//     } else {
//         console.log('Failed To Connect, I am Done')
//     }
// }

// // connect()

// // function arguments

// // function logUser(adminData) {

// //     console.log(adminData);
// // }

// // function logAnotherUser(userData) {
// //     console.log(userData)
// // }

// // logUser({name: 'ali', age: 27})

// // function sum(num1, num2) {
// //     console.log(num1+ num2)
// // } 

// // Self Invoking Function

// // [
// // 
// //   
// // 
// // ]


// // (function () {
// //   console.log("hi");
// // })();


// // saybla()


// // function sayHi() {
// //     console.log('hi')
// // }


// // sayHi()


// // sayHi()


// // this keyword

// // var sayName = function () {}

// // console.log(this.alert('Hi'))

// var carName = String("Nissan");

// // console.log(carName)




// // function sayHello() {
// //     console.log('Hello')
// // }

// // sayHello.call()


// // const fun  = {
// //     call: function () {
// //         console.log('Hello')
// //     }
// // }


// // var user = {
// //     name: 'ahmed',
// //     age: 21,
// //     sayName: function () {
// //         console.log(this.name)
// //     }
// // }

// // user.sayName()

// // Every Thing Is An Object 

// var age;



// HOISTING


// console.log(age)

// var age = 20;




// if (age === 20) {
//     var age = 30;
//     console.log(age);
// }


// function sayHi() {
//     var age = 30;
//     console.log(age);
// }

// sayHi()

// console.log(age)




// GUI => Graphical User Interface
// CLI => Command Line Interface

// API => Application programming Interface
/**         API                                                  API
 * [  TODO APPLICATION  ]   <======== API ==========>   [ACTIVITY APPLICATION]
*/


// fetch from api


fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {

        // console.log(response)
      return response.json();
  })
  .then(function (todos) {
      const todosList = document.querySelector('.todos')


      for (var i = 0; i < todos.length; i++) {
          const ele = document.createElement('li')
          ele.innerText = todos[i].title

          todosList.appendChild(ele)
      }
  });

// fetch('https:www.google.com')






