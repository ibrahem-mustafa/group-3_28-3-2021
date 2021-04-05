// includes (string & array)

const userName = "ahmed ali";

// console.log(userName.includes('ali'))

const classes = ["main", "h2", "bla"];

// console.log(classes.includes('h3'))

// *********** EXAMPLE
// get element from dom (Document Object Model || document.*)
// get element Classes
// check if that element have a spec class
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// trim

// const phoneNumber  = ' 01013131313 '

// console.log(phoneNumber);

// *********** EXAMPLE
// const email = ' '

// if (email.trim()) {
//     console.log('Email Is Found')
// } else {
//     console.log('Email Not Found')
// }
// *********** END EXAMPLE

// substr

const userName2 = "ahmed mohammed";
// console.log(userName2.substr(0, 5))
// console.log(userName2)

// *********** EXAMPLE
const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// const p = document.querySelector("#main");
// p.textContent = paragraph.substr(0, 60) + '...';
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// repeat
const str = "*";

// console.log(str.repeat(10))

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// replace
const str2 = "hi ahmed, hhhhh";
const wordLength = 5;
// console.log(str2.replace("hhhhh", "#".repeat(wordLength)));

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// every
// const salaries = [1000, 2000, 5000, 50000, 6000];
// const allAbove5k = salaries.every( (s) => s > 5000)
// console.log(allAbove5k)

// const allAbove1k = salaries.every( (s) => s >= 1000)
// console.log(allAbove1k)

// *********** EXAMPLE
const usersAges = [21, 20, 30, 29, 17];
const allA18 = usersAges.every((num) => num >= 18);
// console.log(allA18)
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// some
// const salaries = [1000, 2000, 5000, 50000, 6000];
// const OneOrMoreAbove5k = salaries.some( (s) => s > 6000)
// console.log(OneOrMoreAbove5k);

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// reduce

// const salaries = [1000, 2000, 5000, 50000, 6000];
// let total = 0;

// salaries.forEach(function (s) {
//     total += s
// })

// console.log(total)

// // const salaries = [1000, 2000, 5000, 50000, 6000];
// // prev + current = total
// // 1000 + 2000 = 3000
// // 3000 + 5000 = 8000
// // 8000 + 50000 = 58000
// // 58000 + 6000 = 64000

// const totalWithReduce = salaries.reduce((prev, current) => prev + current,)

// console.log(totalWithReduce)

// const usersData = [
//     {
//         name: 'Ahmed',
//         salary: 5000
//     },
//     {
//         name: 'Ali',
//         salary: 3000
//     },
//     {
//         name: 'Mohammed',
//         salary: 50000
//     },
//     {
//         name: 'Magid',
//         salary: 6000
//     },
//     {
//         name: 'Mina',
//         salary: 9000
//     },
// ]

// prev + current = total
// 0 + {5000}.s = 5000
//  5000 + {3000}.s = 8000
// 8000 + {50000}.s = 58000
// 58000 + 6000 = 64000
// 64000 + 9000 = 73000

// const totalWithReduce = usersData.reduce((prev, current) => prev + current.salary, 0)

// console.log(totalWithReduce)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// map

const usersData = [
  {
    name: "Ahmed",
    salary: 5000,
  },
  {
    name: "Ali",
    salary: 3000,
  },
  {
    name: "Mohammed",
    salary: 50000,
  },
  {
    name: "Magid",
    salary: 6000,
  },
  {
    name: "Mina",
    salary: 9000,
  },
];

const salariesCollection = [];

usersData.forEach(function (s) {
  salariesCollection.push(s.salary);
});

console.log(salariesCollection);

// const fullSalaries = usersData.map( (u) => {
//     u.id = new Date().getTime();
//     return u
// } )

// []
// [10000]
// [10000, 60000]
// ...

const fullSalaries = usersData.map(function (u) {
  return u.salary * 2;
});

console.log(fullSalaries);

// |-----|
// |     | =>  ()
// |-----|
// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// concat

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [6, 7, 8, 9, 10]
// const arr3 = [11, 12, 13, 14, 15]

// const full = arr1.concat(arr2, arr3);

// console.log(full)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// splice vs slice

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log('===========================')
// console.log(arr)
// const arrSlice = arr.slice()
// console.log(arrSlice)
// console.log(arr)

// console.log('===========================')

// console.log(arr)
// const arrSplice = arr.splice(0, 5, 1, 5, 5, 6)
// console.log(arrSplice)
// console.log(arr)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

const attributes = {
  class: "main btn primaryColor",
  id: "mainBtn",
  data: "Subscribe",
};

// Object.keys

const keys = Object.keys(attributes);

// keys.forEach(key => {
//     ele.setAttribute(key, keys[key])
// })

// Object.values
const values = Object.values(attributes);
console.log(values);

// Object.entries
const entries = Object.entries(attributes);

console.log(entries);

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// async function and await

// const ok1 = new Promise((resolve, reject) => {
//   const result = false;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 1");
//     } else {
//       reject("OK 1 Failed");
//     }
//   }, 1000);
// });

// const ok2 = new Promise((resolve, reject) => {
//   const result = false;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 2");
//     } else {
//       reject("OK 2 Failed");
//     }
//   }, 3000);
// });

// const ok3 = new Promise((resolve, reject) => {
//   const result = true;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 3");
//     } else {
//       reject("OK 3 Failed");
//     }
//   }, 5000);
// });

// ok1.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// ok2.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// ok3.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })


// ok1
//   .then((result1) => {
//     console.log(result1);

//     ok2
//       .then((result2) => {
//         console.log(result2);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ok3
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// async function executePromises() {
//     try {
//         const result1 = await ok1;
//         console.log(result1);
//         const result2 = await ok2;
//         console.log(result2);
//         const result3 = await ok3;
//         console.log(result3);
//     } catch(reason) {
//         console.log(reason)
//     }
// }


// executePromises()

async function fetchTodos() {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos/");
    console.log(response)
    const data = await response.json()

    console.log(data)
} 

fetchTodos()