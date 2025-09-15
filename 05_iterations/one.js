// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    if(element ===5){
        // console.log(`5 is best number`)
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer for is  : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    //  console.log(`${i} * ${j}  = ${i * j}`);
        
    }
}
const myArr =["flash",'batman','superman']
 console.log(myArr.length);
 
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    
    console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(element===5){
        console.log(`Detected 5` );
        // break;// this  stop the iteration and go outside from loop.
        continue // skip the one condition and continue with others.
    }
    console.log(element);
    
}



