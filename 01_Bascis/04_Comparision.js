console.log("2" >1);
console.log("02" >1);

console.log (null >0);
console.log(null == 0);
console.log(null >= 0); /// not use this type of comparision its create confusion;

// null >= 0 give as true value . 
// the ression is that equlitiy check == and comparision > >= < <= work differently . comparision convert null to a number , treating it as 0 thats why (3) null >= 0 true and (1) null >0 false;


