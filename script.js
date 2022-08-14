'use strict';

const computer_choice_display = document.getElementById("computer_choice");
const user_choice_display = document.getElementById("user_choice");
const result = document.getElementById("result");
const all_choices = document.querySelectorAll("button");
let user_choice;
let computer_choice;

all_choices.forEach(element => element.addEventListener('click', (e) => {
    user_choice = e.target.id;
    user_choice_display.innerHTML = user_choice;
    generateComputerChoice()
}))

function generateComputerChoice() {
    const random_num = Math.floor(Math.random() * 3 + 1);
    console.log(random_num);

    switch (random_num) {
        case 1:
            computer_choice = "rock";
            break;
        case 2:
            computer_choice = "scissors";
            break;
        case 3:
            computer_choice = "paper";
    }
    computer_choice_display.innerHTML = computer_choice;
}


