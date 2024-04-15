'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const sumScore0 = document.querySelector('#current--0');
const sumScore1 = document.querySelector('#current--1');
const diceOne = document.querySelector('.dice');
const newagein = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// const end = document.querySelectorAll('.end');
// روش قبل از فانکش init
// score0.textContent = 0;
// score1.textContent = 0;
// diceOne.classList.add('hidden');

// let currentScore = 0;
// let activePlayer = 0;
// let plying = true;
// const scores = [0, 0];
let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  sumScore0.textContent = 0;
  sumScore1.textContent = 0;

  diceOne.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

roll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceOne.classList.remove('hidden');
    diceOne.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceOne.classList.add('hidden');
      // end[0].textContent = 0;
      // end[1].textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

newagein.addEventListener('click', init);
// روش قبل از فانکشن init: روش خودم
// score0.textContent = currentScore = 0;
// score1.textContent = currentScore = 0;
// sumScore0.textContent = scores[0] = 0;
// sumScore1.textContent = scores[1] = 0;
// plying = true;
// activePlayer = 0;

// player0.classList.remove('player--winner');
// player1.classList.remove('player--winner');

// player0.classList.add('player--active');
// player1.classList.remove('player--active');
