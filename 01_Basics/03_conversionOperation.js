// let score = 36
// let score = "36"
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

//"36" => 356
//"36abc" => NaN
//true => 1; false => 0

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

