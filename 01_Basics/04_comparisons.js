console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/*
    The reason is that an equality check == and comparisons >, <, <=, >= work differently
    Comparisons convert null to a number, treating it as 0
    Thus, null >= 0 is true but null == 0 false
 */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === -> strict checking
// It checks not only the values but also check their datatypes (Conversion doesnot happen by default)

console.log("2" === 2);
console.log("2" == 2);
