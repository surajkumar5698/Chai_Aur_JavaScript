// for of loop 

const arr =[1,2,56,6,5,3,4]
for (const num of arr) {
    console.log(num);
}

// string iteration useing for of

const greeting ="hello world !";
for (const greet of greeting) {
    if(greet.includes(" ")){
        break;
    }
    console.log(`vlaue of ${greet}`);
}

//maps

const map = new Map();// map hold only 
map.set('IN' ,"India");
map.set('USA' ,"united states of amrerica");
map.set('FR' ,"france");
map.set('IN' ,"India");

console.log(map);

for (const [key ,value] of map) {//array destucter
    console.log(`${key} and vlaue is ${value }`);
    
}

const myObject ={
    game1 :'NFS',
    game2: 'spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key ,':-',value);
    
// } its not work like this object like this not eterable.

