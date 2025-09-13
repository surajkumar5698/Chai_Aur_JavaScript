//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));
// this are all mehtod and work with other to and mdn also 

// to declear a specife date so we can do that

let myCreatedDate = new Date(2025 ,0,13);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
// in this date month is started with 0 .
 
let newCreatedDate= new Date(2025,0,13,5,3);
console.log(newCreatedDate);
console.log(newCreatedDate.toLocaleString());

// to get specfic date and time  like mmddyy, yyddmm

let dateformate = new Date('2025-01-13');
console.log(dateformate.toLocaleString());
// here month count start with 01;

let dateformate2 = new Date('4-22-2025');
console.log(dateformate2.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);  // this come from 1jan1970  

console.log(dateformate2.getTime());

console.log(Math.floor(Date.now()/1000)); // this will prvide seconds.

let newDate = new Date();

console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday :"long"
})
console.log(newDate.weekday);














