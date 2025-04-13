//Singleton
//Making of objects using constructor method

// const user = new Object() //singleton object
const user = {} //non-singleton object
user.id = "123abc"
user.name = "Ritam"
user.isLoggedIn = false
// console.log(user)

// Nested-objects

const regularUser = {
    name : {
        fullName : {
            fname : "Ritam",
            lname : "Saha"
        }
    },
    mail : "ritam@google.com"
}
// console.log(regularUser.name.fullName.fname);


//Object assign method (Less used method)
//Synatx --> Object.assign(target, source1, source2, /* …, */ sourceN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign(obj1,obj2) //this means we are assigning obj2 to obj1 i.e. obj1=obj1+obj2
const obj3 = Object.assign({},obj1,obj2) //Good practice //this means we are assigning both obj1 and obj2 to an empty object given at the first parameter
// console.log(obj3);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true


//Spread operator(...)

const obj4 = {...obj1,...obj2}
// console.log(obj4);


//How to print only keys or only values of an object??
// console.log(Object.keys(user)); //It returns an array of the keys
// console.log(Object.values(user)); //It returns an array of the values
// console.log(Object.entries(user)); //It converts each key-value pair to an array and merge them within an new array
// console.log(Object.keys(user).length); //to find the length of the object
// console.log(user.hasOwnProperty("status"));
// console.log(user.hasOwnProperty("id"));
//hasOwnProperty() is used to check whether the key is inside the object or not


// ++++++++++++++++++++++++++++++++++++++++++++ JSON and Object de-structure +++++++++++++++++++++++++++++++++

const course = {
    courseName : "JS in Hindi",
    price : 399,
    instrutor : "Hitesh Sir"
}

// course.instrutor //this the general process to access elements of an object
// Another process is used to do the same which is more efficient known as object de-structure


// const {instrutor} = course //key element should always be same
// console.log(instrutor)
//if I had to change the key name, then have to follow the following syntax

const {instrutor : sir} = course
console.log(sir);



// APIs format

// {
//     "courseName" : "JS Hindi",
//     "price" : 399,
//     "isLoggedIn" : true
// } //JSON format --> object but having no name


//Another way to write APIs using array

// [
//     {},
//     {},
//     {}
// ]