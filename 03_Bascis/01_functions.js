function sayMyName(){
    console.log('s');
    console.log('u');
    console.log('r');
    console.log('a');
    console.log('j');
    
}
 sayMyName // this function refarance only ;

sayMyName();

function addTwoNumber(num1, num2){ //this two values are call perametter
    console.log(num1+num2);
}

addTwoNumber(4,3); // this two vlaues are call arguments 

function addTwoNum(num1 ,num2){
    let result = num1+num2;
    return result;
    console.log("suraj");// Unreachable code detected this never run because after return function not run anything;
    
}

let result= addTwoNum(4,6);
console.log(result); // two get the value is return we must have to return  the value from function;

function loginUserMessage(user){
    if(user===undefined){
        return `Please enter a user name`;
        return
    }
    return `${user} just login`;
}

// console.log(loginUserMessage("Gudiya"));
console.log(loginUserMessage());// if function ask for agrumnet if we not provid then it will return undefine.


function calculateCartPrice(val1, val2 ,...num){//when user pass multipul values then the rest operater(...) is use and it will return a array of that value. val1 and val2 get first and second value and other  go rest operater ;
    return num;
}

console.log(calculateCartPrice(200,330,56,100,450));


const user ={
    userName:"suraj",
    price:199
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

// handleObject(user);
//  we dirctly pass the object also like that 

handleObject({
    userName:"gudiya",
    price:399
})

const myArr =[200,400,600,523];

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArr));
// we can also pass array directly 

console.log(returnSecondValue([100,200,563,45,100]));

