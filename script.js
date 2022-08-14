'use strict';

const computer_choice_display = document.getElementById("computer_choice");
const user_choice_display = document.getElementById("user_choice");
const result = document.getElementById("result");
const all_choices = document.querySelectorAll("button");
let user_choice;
let computer_choice;

all_choices.forEach(element => element.addEventListener('click',(e)=>{
    user_choice = e.target.id;
    user_choice_display.innerHTML= user_choice;
}))


