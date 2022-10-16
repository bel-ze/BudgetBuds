// Home

document.querySelector('.button1').addEventListener('click', ()=>{
    location.href = 'budgetplan.html'
})

document.querySelector('#signincircle').addEventListener('click', ()=>{
    location.href = 'signin.html'
})

document.querySelector('.button2').addEventListener('click', ()=>{
    location.href = 'signin.html'
})

//Budget Plan

$(document).ready(function(){
    $('select').niceSelect()
})