//Immediately Invoked Function Expression (IIFE)


//Here's the way to make iife function
//    ()()
// the first parentheses is for function definition means the whole function would be wrappd within parentheses
// the second parentheses is for execution

//Here's an example!!

(function coffee(){ //named iife
    console.log(`DB Connected!!`);
})(); //Always should be ended with ;

//Now the question is why it is required?!!
//Sometimes the variables which are declared in the global scope!! they may cause many types of problems
// to solve this issue, iife is used.

/*
1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
4.We can use parameter inside first parentheses.
5. To write two or multiple IIFE one should be end with semicolon ; 
*/

//iife as arrow function

// (() => {
//     console.log(`DB Connected Again`);
// })();

//if we want to send parameter the?? Here's the solution-->
((name) => { //simple iife
    console.log(`DB Connected Again for ${name}`);
})("Ritam");

