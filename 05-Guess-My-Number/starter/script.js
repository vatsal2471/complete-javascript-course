'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number');

    //if player wins
  } else if (guess === seceretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = seceretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //record high score

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== seceretNumber) {
    if (score > 1) {
      displayMessage(guess > seceretNumber ? 'Too High!' : 'Too Low');
      score = score - 1;
      // document.querySelector('.message').textContent =
      //   guess > seceretNumber ? 'Too High!' : 'Too Low';
      // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost');
      // document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//hit again

document.querySelector('.again').addEventListener('click', function () {
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  // const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
});
