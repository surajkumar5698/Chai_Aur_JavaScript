const button = document.querySelectorAll('.button')
const body =document.querySelector('body')

button.forEach(function (buttonVal){
    console.log(buttonVal);
    console.log('hello suraj');
buttonVal.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
  switch (e.target.id) {
    case 'grey':
       body.style.backgroundColor= e.target.id; 
        break;
    case 'white':
       body.style.backgroundColor= e.target.id; 
        break;
    case 'blue':
       body.style.backgroundColor= e.target.id; 
        break;
    case 'yellow':
       body.style.backgroundColor= e.target.id; 
        break;
  
  }

})
    
})