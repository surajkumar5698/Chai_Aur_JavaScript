let name ="suraj";
let repoCOunt =50;

console.log(name + repoCOunt + "value"); // this syntext is outdated 

console.log(`my name is ${name} and my repoCount is  ${repoCOunt}`);

//that is bascis about string string cocatnation 

// another way to define  string variable ;
let myName = new String("suraj kumar");
console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);

console.log(myName.charCodeAt());
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('a'));

const newString = myName.substring(0 ,4);
console.log(newString);

const anotherString = myName.slice(-8 ,4);
console.log(anotherString);

const nameTrim= "     Suraj   Kumar  ";
console.log(nameTrim);

console.log(nameTrim.trim());

 const url= "https://suraj.com/suraj%20kumar";

 console.log(url.replace('%20','-'));

 console.log(url.includes('suraj'));
 
 











