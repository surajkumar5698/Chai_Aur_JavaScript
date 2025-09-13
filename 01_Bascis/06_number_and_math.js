const score =100;
console.log(score);
// the javascript auto define type score as number

const balance = new Number(100);
console.log(balance);
// this expcitly define number type .

console.log(balance.toString().length);

console.log(balance.toFixed(2)); //this fix the decimal value ;

const anotherNumber = 123.875;
console.log(anotherNumber.toPrecision(4));  //this will give prefrence to before decimal after that decimal . 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
// by default is usa way covert the tings ;

// ****************Maths********************
console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(78,1,2,85,63,42,0));
console.log(Math.max(78,1,2,85,63,42,0));

console.log(Math.random()); // this provide  number between 0-1 only;










