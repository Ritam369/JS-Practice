// let score = 36 //number
// let score = "36" //string
// let score = "36abc"
// let score = null
// let score = undefined
// let score = false
let score = "Ritam"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN => Not a Number 

//"36" => 36
//"36abc" => NaN
//true => 1; false => 0
//0 => null

// let isLoggedIn = 0
// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Ritam"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
    0 => false; 1 => true
    "" => false
    "Ritam" => true
*/

let someNumber = 12
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************ Operations ***************************************

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+4);
// console.log(2-4);
// console.log(2*4);
// console.log(2**4);
// console.log(2/4);
// console.log(2%4);

console.log(1 + "2");//12
console.log("1" + 2);//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(true);
console.log(+true);//1
// console.log(true+); //Not Possible!!
console.log(+"");//0