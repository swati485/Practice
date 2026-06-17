 var btn1=document.querySelector('#btn1');
var h5=document.querySelector('h5');
var btn2=document.querySelector('#btn2');
var check=0;

 btn1.addEventListener('click',function(){
    h5.innerHTML='Followed';
    h5.style.color="rgb(92, 81, 194)";
 })   
 
 btn2.addEventListener('click',function(){
    h5.innerHTML='Unfollowed';
    h5.style.color="rgb(50, 186, 72)";
 })