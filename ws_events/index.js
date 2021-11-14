'use strict';

function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    const button = document.querySelector('#button0');
    button.addEventListener('click',targetTextToConsole);
}

function lovelyParaAttacher(){
    const thisisalovelypara = document.querySelector('#thisisalovelyparagraph');
    thisisalovelypara.addEventListener('click',lovelyToggle);
}

function lovelyButtonAttacher(){
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click',lovelyToggle);
}

function concatAttacher(){
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');
    in1.addEventListener('change',out1Handler); //can be (and should be) 'input' not 'change' i reckon
    in2.addEventListener('change',out1Handler);

}

function out1Handler(){
    const out1 = document.querySelector('#out1');
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');
    console.log(in1.value,in2.value);
    out1.textContent = (in1.value+in2.value);
}

function snitchAttacher(){
    const mousewatcher = document.querySelector('#mousewatcher');
    const snitch = document.querySelector('#snitch');
    mousewatcher.addEventListener('mouseover',snitchUpdater);
    mousewatcher.addEventListener('mouseout',snitchUpdater);
}

function reportAttacher(){
    const mousereporter = document.querySelector('#mousereporter');
    mousereporter.addEventListener('mousemove',reportUpdater);
}

function reportUpdater(event) {
    document.querySelector('#report').textContent = ("x: "+event.screenX+" y: "+event.screenY);
} 

function idValidationAttacher(){
    const newid = document.querySelector('#newid');
    newid.addEventListener('input',idValidation);
}

function idValidation(event){
    const t = event.target.value.split(" ");
    const newid = document.querySelector('#newid');
    t.length > 1 ? newid.classList.add("invalid") : newid.classList.remove("invalid")
}