let username: string = "ahmed";
let age: number = 19;
let isSingle: boolean = true;
let anyType;

type USER_TYPE = {
  name: string;
  age: number;
  salary?: number;
  anyValue ?: any;
};

const userData: USER_TYPE = {
  name: "ahmed",
  age: 19,
  salary: 3000,
  anyValue: "xasxsa",
};

userData.anyValue = {};

function printUser(data: USER_TYPE) {
  console.log(data);
}


printUser({
  name: "ali",
  age: 15,
  salary: 3000,
  anyValue: '652'
});

const anyArr = []

anyArr.push(10)
anyArr.push('10')
anyArr.push(true)
anyArr.push(false)
anyArr.push({})
anyArr.push([])

const typedArr: string[] = []
typedArr.push('ahmed')
typedArr.push('15')

let multiTypedVar: string | number


multiTypedVar = 'ahmed'
multiTypedVar = 15
// multiTypedVar = true X
// multiTypedVar = {} X
// multiTypedVar = [] X

let multiTypedArr: string[] | number[]
multiTypedArr = [10, 151, 511, 15]
multiTypedArr = ['adcs', 'cdsad', 'cda']

let multiTypedCompArr: (string | number)[]
multiTypedCompArr = [1515, 'casdkch']


function sumAsString(a: number, b: number, print ?: boolean): string {
  const result = a + b

  if (print) {
    console.log(result)
  }
  return result.toString();
}


sumAsString(10, 20)






