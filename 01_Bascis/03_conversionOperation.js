let score = "33abcc";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);

/*note
if someone type score value "33abc" that give the typeof number but when i print so got NAN 

if we score define as null then output is 0.

if we score define as undefine the ouput is nan.
*/

let isloggedIn =1;
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

// that will convert into true and , in javascript  true=1 , false=0 ;

// "" =>false;
// "suraj" => true;

let someNumer= 33;

let stringNumber=String(someNumer);
console.log(typeof(stringNumber));

// that will convet into string

//*****************Operations*****************
let str1 = "hello";
let str2 =" suraj kumar";
let str3 = str1+ str2;
console.log(str3);

console.log("1"+2);
console.log(1 + "2");
console.log("1" +2+2);
console.log(1+2+"2");

let gameCounter =100;
++gameCounter ;
console.log(gameCounter);
// read about prefix and postfix  from mdn.

