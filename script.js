'use strict';
/*10-30-22 Charles Andre Sanford 123  */
let message = document.querySelector('.message');

/*Create a Random Number */
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
/*HighScore */
let highScore = 0;
/*Body */
let body = document.querySelector('body');
/*Secret Number Display */
let displayNumber = document.querySelector('.number');
/*Highscore Display */
let highScoreDisplay = document.querySelector('.highscore');
/*Create a Score */
let score = 20;
/*Score Display */
let userScore = document.querySelector('.score');
/*User's Gues */
let guess = document.querySelector('.guess');


document.querySelector('.check').addEventListener('click', function(){
  let guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    message.textContent = "No Number";
  } else if(guess == secretNumber) {
    message.textContent = "You WON!"
    body.style.backgroundColor = 'green';
    displayNumber.style.width = "30rem";
    displayNumber.textContent = secretNumber;

    if(score > highScore){
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }

  } else if (guess > secretNumber) {
    if(score > 1) {
      message.textContent = 'Too High.'
      score --;
      userScore.textContent = score;
      
    } else{
      message.textContent = 'You Lost'
      userScore.textContent = 0;
      body.style.backgroundColor = 'red';
      displayNumber.style.width = "30rem";
      displayNumber.textContent = secretNumber;

    }
  } else if (guess < secretNumber) {
    if(score > 1) {
      message.textContent = 'Too Low.'
      score --;
      userScore.textContent = score;
      
    }else{
      message.textContent = 'You Lost'
      userScore.textContent = 0;
      body.style.backgroundColor = 'red';
      displayNumber.style.width = "30rem";
      displayNumber.textContent = secretNumber;
    }
  }
});



/*AGAIN BUTTON */

document.querySelector('.again').addEventListener('click', function() {
   secretNumber = Math.trunc(Math.random() * 20 ) + 1;

  body.style.backgroundColor = 'black';
  displayNumber.style.width = '15rem';
  message.textContent = 'Start Guessing.';
  score = 20;
  userScore.textContent = 20;
  guess.value = '';
  displayNumber.textContent = '?';

})