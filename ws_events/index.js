'use strict';

function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    const button = document.querySelector('#button0');
    button.addEventListener('click',targetTextToConsole);
}