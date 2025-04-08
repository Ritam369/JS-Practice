//Datatypes are divided into two parts based on how data is stored in memory and how it is accesed. These two types are-->
// (a) Primitive data-type
// (b) Non-primitive/Reference data-type


// Primitive (Call by Value)
//7 types--> String, Number, Boolean, null(empty), undefined, symbol(to make a value unique), bigint


/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
let x = 10.3; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.*/

//Symblol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(id === anotherId);

const bigNumber = 264167465896548764687n //bigint //seshe n add kore dile seta bigint hoye jacche
console.log(bigNumber);
console.log( typeof bigNumber);


//Non-Primitive (Reference type/Call by Reference)
//Arrays, Objects, Functions
//typeof function always returns object for non-primitive datatypes.

const heroes = ["Shaktiman", "Krish", "Flying Jatt"] //Array
console.log(typeof heroes); //o/p => object
let myObj ={
    name: "Ritam",
    age: 20
}//{} er modhye ja ja thakbe sob i hocche object

//Function can be treated as variables
const myFunction = function(){  //function is declared in this way
    console.log("Hello World");
}
console.log(typeof myFunction); //o/p => function (object)

// https://262.ecma-international.org/5.1/#sec-11.4.3