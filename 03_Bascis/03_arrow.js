const user ={
    userName :"suraj",
    price:999,
    welcomeMessage:function (){
        console.log(`${this.userName} , wlecome to website`);

        // console.log(`${userName} , welcome`);//this line of code give error say userName is not define.
        
        console.log(this);// this print  the corrent context .
        
    }

}

user.welcomeMessage();
user.userName="Gudiya";
user.welcomeMessage();

console.log(this);// in node it will give corrent cotext empty object {} , but in browser it give window object , thats why  we will asscess the window event and property.

function chai(){
    const userName ="suraj kumar";
    console.log(this.userName);// output is undefined  ,  (this.userName)  this work like this only in object.
}
chai()

const chai2 = function (){
    const userName ="suraj kumar";
    console.log(this.userName);
}

chai2();

const chai3 = () =>{ // this arrow function and  this agian print undefined .
    const userName ="suraj kumar";
    console.log(this.userName);
}

chai3();
// ***************Arrow Function*************

const addTwo =(num1,num2)=>{
    return num1+num2
}// if we use carlybress then we have to return its  important .

const add =(num1,num2) => num1+num2 // if define like this then no need to type return its call implict return .

const add1 =(num1, num2) =>(num1+num2);// this also same .
