// var

// console.log(email)

// var email = 'ib@gmail.com'

// if (email) {
//     var email = 'ahmed@gmail.com'
//     console.log(email)
// }

// console.log(email)

// let

// let userName = 'ahmed'

// if (userName) {
//     let userName = 'mohammed'
//     console.log(userName)
// }

// console.log(userName)
// const

// const userName = 'ahmed'

// userName = 'mohammed' // Can't Reassign constant variables

// const in objects ({} || [])

const userInfo = {
  email: "ib@gmail.com",
  phone: "238452648268425",
};

// console.log(userInfo)

userInfo.phone = "01018181327";

// console.log(userInfo)

// userInfo = { email: "ib@gmail.com" , phone: '9387457346598'};

const newUserInfo = userInfo;
// console.log(newUserInfo)

newUserInfo.email = "ahmed@gmail.com";

// console.log(userInfo)
// console.log(newUserInfo)

const email = "ahmed@gmail.com";

let newEmail = email;

newEmail = "ib@gmail.com";

// console.log(email)
// console.log(newEmail)
// const users = ['ahmed', 'ali', 'gamal']

// console.log(users)

// users[0] = 'mario'

// console.log(users)

// users = ['mario', 'ali', 'gamal']

// ****************************************************** //
// ******************* arrow function ******************* //
// ****************************************************** //

// const sayHi = function () {
//     console.log('hi')
// }

// const sayHello = () => {
//     console.log('hello')
// }

// function multi (x) {
//     return x * x
// }

// const Multi = x => x * x

// const result = Multi(5)
// console.log(result)

// function modify(userData, cb) {
//   userData.id = new Date().getTime();

//   cb(userData);
// }

// const userData = {email: 'ahmed@gmail.com', name: 'Ahmed'}

// modify(userData, (newData) => console.log(newData))

// modify(userData, function (newData) {
//     console.log(newData)
// })


// const user = {
//   id: 1,
//   email: "iib@gmail.com",
//   salary: 1000,


//   printDetails: function () {
//     const details = {
//         print: () => {
//             console.log(this)
//         }
//     }

//     details.print()
//   }
// };

// user.printDetails();

// ****************************************************** //
// ********************* FOR LOOPS ********************** //
// ****************************************************** //

// Normal For

const users = [
    {
        id: 1,
        email: 'ib@gmail.com',
        name: "ibrahem"
    },
    {
        id: 2,
        email: 'ah@gmail.com',
        name: "ahmed"
    },
    {
        id: 3,
        email: 'ali@gmail.com',
        name: "ali"
    },
]

const user = {
  id: 1,
  email: "ib@gmail.com",
  name: "ibrahem",
};

// for (let i =0; i < users.length; i ++) {
//     console.log(users[i])
// }

// console.log("// ****************************************************** //")

// FOR OF

// for (let item of user) {
//     console.log(user)
// }

// console.log("// ****************************************************** //")

// FOR IN

// for (let item in user) {
//     console.log(user[item])
// }

// console.log("// ****************************************************** //")

// FOREACH

// users.forEach((userInfo, i, collection) => {
//     console.log(userInfo)
//     console.log("// ****************************************************** //")
//     console.log(i)
//     console.log("// ****************************************************** //")
//     console.log(collection)

// })


// ****************************************************** //
// ********************** CLASSES *********************** //
// ****************************************************** //


// const nissan = {
//     name: 'Nissan',
//     model: 2019,
//     price: 210000,
//     print: function () {
//         console.log(this.name + ' Model: ' + this.model + ' Price: ' + this.price)
//     }
// }

// const kia = {
//   name: "Kia",
//   model: 2021,
//   price: 250000,
//   print: function () {
//     console.log(this.name + " Model: " + this.model + " Price: " + this.price);
//   },
// };




// function CAR (name, model, price) {
    

//     const obj = {
//         print: function() {
//             this.name = name;
//             this.model = model;
//             this.price = price;
            
//             console.log(this.name + " Model: " + this.model + " Price: " + this.price)
//         }
//     }

//     return obj;
// }

// const bmw = CAR('BMW', 2020, 1900000)

// bmw.print()



class Car {

    name;
    model;
    price;

    constructor(carName, carModel, carPrice) {
        this.name = carName;
        this.model = carModel;
        this.price = carPrice;
    }

    print() {
        console.log(
          this.name + " Model: " + this.model + " Price: " + this.price
        );
    }
}

const nissan = new Car('Nissan', 2019, 210000)

// nissan.print()

const kia = new Car('Kia', 2021, 250000)
// kia.print()

// ****************************************************** //
// ********************** PROMISE *********************** //
// ****************************************************** //

const buyACar = new Promise((resolve, reject) => {
    const score = 90;
    
    setTimeout(() => {
        if (score > 95) {
            resolve({ status: 200, msg: 'You Could Buy A Car Now' })
        } else {
            reject({status: 400, msg: 'You Can Not Buy A Car'})
        }
    }, 3000)
})

buyACar.then((result) => {
    console.log(result)
}).catch((err) => console.log(err))


// ****************************************************** //
// ********************** SYMBOL ************************ //
// ****************************************************** //

// ****************************************************** //
// ************* FUNCTION REST PARAMETERS *************** //
// ****************************************************** //

// ****************************************************** //
// ******************* ARRAY METHODS ******************** //
// ****************************************************** //

// Array.find()

// Array.findIndex()

// Array.filter()

// ADDITIONAL THINGS

// setTimeout

// setTimeout(() => {
//     console.log('After 5 Sec')
// }, 5000)

// setInterval

// let counter = 0

// const interval = setInterval(() => {
//     counter++
//     console.log('After ' + counter + ' Sec')

//     if (counter >= 10) {
//       clearInterval(interval);
//     }
// }, 1000)




