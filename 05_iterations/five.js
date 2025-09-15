const codeing=['js','java','cpp','pyhton','ruby']

codeing.forEach(function (value){
    // console.log(value);
}) // foreach loop wants function call back , the function call back don't have the name .

codeing.forEach((itme)=>{
    // console.log(itme);
})

//  we can pass the function refrence to the foreach loop  .

 function printMe(item){
    console.log(item);
 }

 codeing.forEach(printMe);//here only pass the refrence only.

 codeing.forEach((item,index,arr)=>{
    console.log(item , index ,arr);
    
 })


 const myCodeing =[
    {
        languageName:'javascript',
        languageFile:'js'
    },
    {
        languageName:'java',
        languageFile:'java'
    },
    {
        languageName:'python',
        languageFile:'py'
    },
    
 ]

 myCodeing.forEach((item)=>{
    console.log(`${item.languageName} and ${item.languageFile}`);
    
 })