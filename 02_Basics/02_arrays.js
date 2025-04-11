const marvel = ["ironman", "captain america", "thor"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc) //dc gets inserted as a whole element within marvel array i.e. dc becomes an element of marvel

// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][1]);

// const mightyHeroes = marvel.concat(dc)
// console.log(mightyHeroes);

// NOTE: push() method modifies the existing array but concat() method returns a new array


// spread operator(...) (better & alternative method than concat())
const mightyHeroes = [...marvel,...dc]
console.log(mightyHeroes);

// flat method

const arr = [1, 2, 3, [4, 5, 6], 5, 6, [8, 4, [true, false]]]
const newArray = arr.flat(Infinity)
console.log(newArray);