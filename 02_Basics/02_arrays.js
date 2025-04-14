const marvel = ["ironman", "captain america", "thor"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc) //dc gets inserted as a whole element within marvel array i.e. dc becomes an element of marvel

// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][1]);

// const mightyHeroes = marvel.concat(dc)
// console.log(mightyHeroes);

// NOTE: push() method modifies the existing array but concat() method returns a new array


// spread operator(...) (better & alternative method than concat()) (spread operator returns a new array)
const mightyHeroes = [...marvel,...dc] //this is better because it can merge more than two arrays within one new array
console.log(mightyHeroes);


// flat method
const arr = [1, 2, 3, [4, 5, 6], 5, 6, [8, 4, [true, false]]]
const newArray = arr.flat(2) //It will spread the subarrays within an given array upto the level of given depth
console.log(newArray);
//If you are not sure about the depth then just give Infinity then it will take upto the ultimate level

// Array.isArray() and Array.from() methods
console.log(Array.isArray("Ritam")); //checks whether the passed value is an array or not
console.log(Array.from("Ritam")); //converts the passed value into an array
console.log(Array.from([1, 2, 3], (x) => x + x)); //map function

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) //merges the variables values and converts them into an array