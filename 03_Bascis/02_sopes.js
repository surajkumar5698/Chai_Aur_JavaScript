var  c=300; // if we try to print c the ouput is still 30 that the problem with var .
let a =300;
if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log(`inner :${a}`);
}
console.log(a);

// console.log(a);//a is not defined
// console.log(b);// b is not defined
console.log(c);// but c give the value  that why say var is no scop.

function one(){  // closer concept if nested function is there then the parent function variable accessable to innner function but inner function variable not accessable to parent /outer.
    let userName ="suraj";
    function two(){
        const website ="youtube"
        console.log(userName);
        }
    //  console.log(website);// that will give u error say no website is not define;
        two();
}
one();

if(true) {
 const userName= "suraj kumar";
  if(userName=== "suraj kumar"){
        const website=" youtube";
      console.log(userName , website);
        
  }   
//   console.log(website);// website is not defined 
  
}
// console.log(user);//ReferenceError: user is not defined

// **************Interesting*************

console.log(addOne(5)); // it will run fine before function .

function addOne(num){
    return num+1;
}

// addOne(5); // it will run  fine after function 

// addTwo (5); // it will give u the error can't access before the function decleration;
const addTwo = function(num){
    return num+2
}

addTwo(5); // it will run fine after the function .

// this example is kind of hosting;