// let a = 150
// const b = 250
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 //c getting updated, not following the scope boundary
    console.log(a);
    console.log(b);
    console.log(c);    
}
// console.log(a); //This will show an error as "ReferenceError: a is not defined"
// console.log(b); //This will show an error as "ReferenceError: b is not defined"
console.log(c);

//Now the question arise, as var is working so why let and const needed?? (var is oldest)
//because var doesn't work according to block-scope
//let and const are block-scope means if the variables are declared within an scope then
//it will only work within that scope only, outside the scope it will give ReferenceError
//But!! var does not follow this rull, it doesn't follow the block-scope rule

function one() {
    const userName = "Ritam"

    function two() {
        const website = "https://ritam-saha.vercel.app/"
        console.log(userName);
    }
    // console.log(website); //This will show an error as "ReferenceError: website is not defined"
    two()
}
one();

if (true) {
    const firstName = "Ritam"
    if(firstName === "Ritam"){
        const lastName = " Saha"
        console.log(firstName + lastName);
    }
    // console.log(lastName); //This will show an error as "ReferenceError: lastName is not defined"
}
// console.log(firstName); //This will show an error as "ReferenceError: firstName is not defined"


// +++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++


console.log(addTwo(5)) //o/p --> 7
function addTwo(num){
    return num+2
}
// console.log(addTwo(5)) //o/p --> 7

// console.log(addOne(3)) //ReferenceError: Cannot access 'addOne' before initialization
//This problem asised because here the function is stored in the variable addOne, thus we can't acccess this expression before initialization
const addOne = function(num) { //Anther way to make function. This functionn is stored within a variable, this is known as expression
    return num+1
}
console.log(addOne(3)) //o/p-->4