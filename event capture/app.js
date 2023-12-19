const divs = document.querySelectorAll('div');
const btn = document.getElementById('btn');

function clickEvent(e){
 console.log(this.classList.value);
 // e.stopPropagation(); 
}

divs.forEach(div => div.addEventListener('click', clickEvent,{
 capture : true }))

 function clickEvent(){
  console.log('Clicked !!!!');
 }


btn.addEventListener('click', clickEvent,{once : true})