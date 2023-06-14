'use strict';

/*
document.querySelector('.message').textContent = '🥳 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '😥 No number! ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number! ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too high! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 Game Over ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 Game Over ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
