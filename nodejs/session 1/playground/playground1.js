// const variable = 'Variable Value'

// console.log(variable)

// const arr = ['ahmed', 'mohammed', 'ali', 'ehsan']

// arr.forEach((name) => console.log(name))


function plus(x, y) {
    console.log(x + y)
    return x + y;
}

function minus(x, y) {
    console.log(x-y)
    return x - y;
}

minus(15, 10)


// plus(10, 13)


// const functions = {
//     plus,
//     minus
// }

// module.exports = functions

module.exports = {
    plus,
    minus
}