//immediatley Invoked function expression(IIFE)
(function chai(){
    //named iife  
    console.log(`DB Conneted`);
})(); //  iife syntxt we wrap the function is paranties , and unother paranties.and after the paranties put semicolne. 

(()=>{
    console.log(`DB Connected two`);
    
})();

// iife use to run function immediatley and protect form global variable polution.

// if we want to pass argument to the function in iife .

((name)=>{
    console.log(`DB connected three ${name.name} and the is : ${name.id}`);
    
})({name:"suraj kumar" , id :"45216"});