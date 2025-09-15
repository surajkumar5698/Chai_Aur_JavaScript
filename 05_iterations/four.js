const myObject ={
    js: "javascript",
    cpp:"c++",
    rb :"ruby",
    swift : "swift for apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const myArr =["js","rb","py","java","cpp"]
for (const key in myArr) {
    console.log(`${key} and value ${myArr[key]}`);
}

const map = new Map();// map hold only 
map.set('IN' ,"India");
map.set('USA' ,"united states of amrerica");
map.set('FR' ,"france");
map.set('IN' ,"India");

for (const key in map) {
    // console.log(key);
    // map are not iterable in for in loop .
}