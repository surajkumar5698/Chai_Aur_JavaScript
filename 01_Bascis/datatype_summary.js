//#primitive datatype  <call by vlaue>
// String, Number, Boolean, Null , Undefined, symbol ,Bigint 
 
const userName= "suraj kumar";
const userId = 7458;
const isloggedIn = false;
let outsideTemp =null;
let userEmail;

const id= Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId) ; // false 
 // when we need the unique value then symbol is used.

//Reference (non-primitive);
// array , objets, function 

const heros = ["shaktiman","naagraj","doga"];
const myObj ={
    name:"suraj",
    age:22,
}
const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof(myFunction));

