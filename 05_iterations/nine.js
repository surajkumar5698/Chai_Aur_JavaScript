const myNums=[1,2,3]

const total = myNums.reduce(function (accumulator , currentValue){
    console.log(`accumulator val ${accumulator} and currentvalue ${currentValue}`);
    
    return accumulator+currentValue;
},0) // accumulator need start or initial value to where to start , which we pass after currly brecss. accumulator add with currentValue  next vlaue is sum of that.

console.log(total);

// useing arrow function .

const totalSum = myNums.reduce((accumulator,currentValue)=>accumulator+currentValue,3);

console.log(totalSum);

const shoppingCart =[
    {
        itemName :"js course",
        price : 2999
    },
    {
        itemName :"mobile dev course",
        price : 6999
    },
    {
        itemName :"datascince course",
        price : 12999
    },
]

const priceToPay =shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(priceToPay);
