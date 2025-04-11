// Dates
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

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
console.log(myCreatedDate3.toLocaleString()); //o/p --> M/DD/YYYY, Time

let myCreatedDate4 = new Date("04-14-2023") //jehetu given format MM-DD-YYYY toh taii 0-indexed month er concept ekhane lagbe nah
console.log(myCreatedDate4.toLocaleString()); //o/p --> M/DD/YYYY, Time

let myTimeStamp = Date.now()

console.log(myTimeStamp); //millisecond value //A number representing the timestamp, in milliseconds, of the current time.
console.log(myCreatedDate1.getTime()); //millisecond value //The getTime() method in JavaScript returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix Epoch)
// console.log(Math.round(Date.now()/1000)); //answer will be in seconds

let newdate = new Date()
console.log(newdate.getDay()); //starts from Monday
console.log(newdate.getDate());
console.log(newdate.getFullYear());
console.log(newdate.getMonth() + 1); //jehetu month ta 0 indexed taii +1 korte holo

console.log(newdate.toLocaleString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' }));