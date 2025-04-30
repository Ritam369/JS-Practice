//Falsy Values

//false, 0, -0, bigInt 0n, "", null, undefined, NaN



//Truthy Values

//"0", 'false', " ", true, [], {}, function(){}//Empty function

let userEmail = []

if (userEmail.length == 0) {
    console.log("Array is empty");
}

let emptyObj = {}

if (Object.keys(emptyObj).length == 0) { //Object.keys returns an array of keys of the object
    console.log("Object is empty");
}



//Nullish Coalescing Operator (??): null undefined
// It checks whether the value is null/undefined or not, if null then take the other value

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 3
// val1 = undefined ?? 16
val1 = null ?? 10 ?? 12 //Aways takes the first value

console.log(val1);
