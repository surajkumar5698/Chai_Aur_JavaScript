const codeing=['js','java','cpp','pyhton','ruby']

const values =codeing.forEach((item)=>{
    // console.log(item);
    return item;
})

console.log(values);// foreach never  return implictly and explicitly.

const myNum =[1,2,3,4,5,6,7,8,9,10]

const value = myNum.filter((item)=>{
    return item>4;
})// implcitly return the useing perthes()in callback function.

console.log(value);

const newNums =[];
const myNum2 =[1,2,3,4,5,6,7,8,9,10]
myNum2.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})

console.log(newNums);


