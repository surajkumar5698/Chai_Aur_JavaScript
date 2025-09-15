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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
