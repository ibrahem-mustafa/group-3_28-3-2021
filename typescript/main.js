var username = "ahmed";
var age = 19;
var isSingle = true;
var anyType;
var userData = {
    name: "ahmed",
    age: 19,
    salary: 3000,
    anyValue: "xasxsa"
};
userData.anyValue = {};
function printUser(data) {
    console.log(data);
}
printUser({
    name: "ali",
    age: 15,
    salary: 3000,
    anyValue: '652'
});
var anyArr = [];
anyArr.push(10);
anyArr.push('10');
anyArr.push(true);
anyArr.push(false);
anyArr.push({});
anyArr.push([]);
var typedArr = [];
typedArr.push('ahmed');
typedArr.push('15');
var multiTypedVar;
multiTypedVar = 'ahmed';
multiTypedVar = 15;
// multiTypedVar = true X
// multiTypedVar = {} X
// multiTypedVar = [] X
var multiTypedArr;
multiTypedArr = [10, 151, 511, 15];
multiTypedArr = ['adcs', 'cdsad', 'cda'];
var multiTypedCompArr;
multiTypedCompArr = [1515, 'casdkch'];
function sumAsString(a, b, print) {
    var result = a + b;
    if (print) {
        console.log(result);
    }
    return result.toString();
}
sumAsString(10, 20);
