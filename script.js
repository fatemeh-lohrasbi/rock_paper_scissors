'use strict';

const computer_choice_display = document.getElementById("computer_choice");
const user_choice_display = document.getElementById("user_choice");
const result_display = document.getElementById("result");
const all_choices = document.querySelectorAll("button");
let user_choice;
let computer_choice;
let result;

all_choices.forEach(element => element.addEventListener('click', (e) => {
    user_choice = e.target.id;
    user_choice_display.innerHTML = user_choice;
    generateComputerChoice();
    get_result();
}))

function generateComputerChoice() {
    const random_num = Math.floor(Math.random() * 3 + 1);

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

function get_result() {
    if (computer_choice === user_choice) {
        result = "it is a draw! 🤝";
    }
    if (computer_choice === 'rock' && user_choice === 'scissors') {
        result = "you lost! 😥";
    }
    if (computer_choice === 'scissors' && user_choice === 'rock') {
        result = "you win! 😍";
    }
    if (computer_choice === 'rock' && user_choice === 'paper') {
        result = "you win! 😍";
    }
    if (computer_choice === 'paper' && user_choice === 'rock') {
        result = "you lost! 😥";
    }
    if (computer_choice === 'paper' && user_choice === 'scissors') {
        result = "you win! 😍";
    }
    if (computer_choice === 'scissors' && user_choice === 'paper') {
        result = "you lost! 😥";
    }
    result_display.innerHTML = result;
}


