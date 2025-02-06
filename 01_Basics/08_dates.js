// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Day Month Date Year
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); //Date in MM/DD/YYYY format
// console.log(myDate.toLocaleString()); // Date(MM/DD/YYYY) and time
// console.log(myDate.toLocaleTimeString()); //Only time asche (Indian time nah)

// console.log(typeof myDate);

let myCreatedDate1 = new Date(2024, 2, 8) //parameters - Year, Month(0 indexed format), date
console.log(myCreatedDate1.toDateString());
let myCreatedDate2 = new Date(2024, 2, 8, 21, 20) //parameters - year, month(0 indexed format), date, hours, minutes
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-17") //jehetu given format YYYY-MM-DD toh taii 0-indexed month er concept ekhane lagbe nah
console.log(myCreatedDate3.toLocaleString());

