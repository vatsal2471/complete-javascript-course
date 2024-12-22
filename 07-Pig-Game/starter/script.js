'use strict';

//Selecting elements

const player0El = document.querySelector('.player--0');
const player01El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current01El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll Dice

btnRoll.addEventListener('click', function () {
  //1. Generate a raondom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display the dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  // Check for Roll 1; if true then swith to next plater
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player01El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // add current score to adtive player total
});
