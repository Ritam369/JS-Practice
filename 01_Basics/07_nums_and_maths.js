const score = 500
console.log(score); //500

const balance = new Number(100)
console.log(balance); //[Number: 100] //Specially mentioned in output as a number

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3)); //point er por jotogulo ghor chaii parameter e setaii pass korbo

const num = 26.6359
console.log(num.toPrecision(4)); //string return kore
//parameter e joto pass korbo toto ghor obdhi precisely (round-off) print hbe string hisabe

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //US standard
console.log(hundreds.toLocaleString('en-IN')); //Indian Standard

// ++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //Object
//Print this in browser console!!
console.log(Math.abs(-5)); //Only negative value converts to positive value
console.log(Math.round(2.69)); //Round-off
console.log(Math.ceil(2.12)); //ceiling value
console.log(Math.floor(2.96)); //floor value
console.log(Math.sqrt(22));

console.log(Math.min(5,6,8,2,4)); //given Array theke minimum value ber korte laage
console.log(Math.max(5,6,8,2,4)); //given Array theke maximum value ber korte laage

console.log(Math.random()); //0 and 1 er majhe randomly number tulbe
console.log(Math.floor(Math.random()*10)+1);

const max = 20
const min = 10

console.log(Math.floor((Math.random() * (max-min+1)) + min))


