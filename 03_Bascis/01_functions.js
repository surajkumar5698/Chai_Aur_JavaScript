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

