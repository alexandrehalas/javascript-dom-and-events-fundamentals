'use strict';

// classes

const body = document.querySelector('body');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');

// functions

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function () {
  number.style.width = '30rem';
  number.textContent = secretNumber;
};

const hideNumber = function () {
  number.style.width = '15rem';
  number.textContent = '?';
};

const resetScore = function () {
  scoreNumber = 20;
  score.textContent = scoreNumber;
};

const decreaseScore = function () {
  scoreNumber--;
  score.textContent = scoreNumber;
};

const wonTheGame = function () {
  displayMessage('🥳 Correct Number!');
  body.style.backgroundColor = '#60b347';
  displayNumber();
  updateScore();
};

const updateScore = function () {
  if (scoreNumber > highscoreNumber) {
    highscoreNumber = scoreNumber;
    highscore.textContent = scoreNumber;
  }
};

const gameOver = function () {
  displayMessage('💀 Game Over ');
  score.textContent = 0;
};

const playAgain = function () {
  secretNumber = generateSecretNumber();
  guess.value = '';
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  resetScore();
  hideNumber();
};

// variables

let secretNumber = generateSecretNumber();
let scoreNumber = 20;
let highscoreNumber = 0;

// event listeners

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('😥 No number!');
  } else if (guess === secretNumber) {
    wonTheGame();
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high! ' : '⬇️ Too low! ');
      decreaseScore();
    } else {
      gameOver();
    }
  }
});

again.addEventListener('click', playAgain);
