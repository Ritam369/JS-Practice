//Arrays (In JS, array is resizable and can contain a mix of different data-types)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [10, 20, 30, true, "Ritam"]
const newArr = new Array("Ritam", "Saha")
console.log(myArr);
console.log(newArr);

// Array methods::

myArr.push(false) //to insert an element
// console.log(myArr);

myArr.pop() //to delete an element (LIFO)
// console.log(myArr);

myArr.unshift(69) //Array etr elements guloke shift koriye parameter e given value ta array er surute dhukbe... parameter e joto value debo sobgulo sei order e array er surute dhukbe
// console.log(myArr);

myArr.shift() //Array er first element ke delete kore debe
// console.log(myArr); 

// console.log(myArr.includes(49));
// console.log(myArr.indexOf(true));
// console.log(myArr.indexOf("Saha")); //Array te exist nah korle (-1) return korbe

const arr = myArr.join() //converts the array into string (comma sparated string elements)
// console.log(arr);
// console.log(typeof arr);

//slice() and splice() methods

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) //from starting index to the before index of given range and do not delete any element from the real array (just take the copy)
console.log(myn1);


console.log("B ", myArr);
const myn2 = myArr.splice(1,3) //from starting index to given range and delete spliced array from the real array
console.log(myn2);


console.log("C ", myArr);
console.log(myArr)

//Key differences between slice() and splice()
// splice includes the given ending index and delete the spliced element from the real array