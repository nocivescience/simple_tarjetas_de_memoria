const btn1El=document.getElementById('btn-1');
const btn2El=document.getElementById('btn-2');
const elementEl=document.querySelector('#element');
btn2El.addEventListener('click',()=>{
    btn1El.classList.toggle('disappear');
    elementEl.classList.toggle('disappear');
})