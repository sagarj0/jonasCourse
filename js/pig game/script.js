"use strict";

let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");

let current0El = document.querySelector("#current--0");
let current1El = document.querySelector("#current--1");

let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");

let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let score,
  currentScore,
  activePlayer = 0,
  playing;

// score0El.textContent = 0;
// score1El.textContent = 0;

// let imgArr = [
//   "dice-1.png",
//   "dice-2.png",
//   "dice-3.png",
//   "dice-4.png",
//   "dice-5.png",
//   "dice-6.png",
// ];
// let score = 0;

// currentScore = 0;
// score = [0, 0];
// activePlayer = 0;
// playing = true;

const init = function () {
  // document.querySelector(`name--${activePlayer}`).innerHTML = `player ${
  //   activePlayer + 1
  // }`;

  currentScore = 0;
  score = [0, 0];

  playing = true;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  player0El.classList.add("player--active");

  player1El.classList.remove("player--active");
};

init();

btnNew.addEventListener("click", init);

let switchPlayer = function () {
  currentScore = 0;
  // score = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // document.getElementById(`score--${activePlayer}`).textContent = score;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");
};

let randDiceGen = function () {
  if (playing) {
    const numberDice = Math.trunc(Math.random() * 6) + 1;
    // console.log(numberDice);
    diceEl.classList.remove("hidden");
    // diceEl.src = imgArr[numberDice];
    diceEl.src = `dice-${numberDice}.png`;
    if (numberDice !== 1) {
      // score0El.textContent =
      // Number(score0El.textContent) + Number(numberDice + 1);

      // currentScore = Number(
      //   document.getElementById(`current--${activePlayer}`).textContent
      // );

      currentScore += numberDice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();

      // score += currentScore;
      // score0El.textContent = score;
      // current0El.textContent =
      // Number(current0El.textContent) + Number(score0El.textContent);
    }
  }
};

let hold = function () {
  // console.log(event);

  // score = Number(document.getElementById(`score--${activePlayer}`).textContent);
  if (playing) {
    score[activePlayer] += currentScore;
    // score = Number(
    //   document.getElementById(`score--${activePlayer}`).textContent
    // );

    // score += currentScore;

    // score === 10
    //   ? (document.querySelector(".player--active").innerHTML += "wins")
    //   : "";

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      // document.querySelector(`name--${activePlayer}`).innerHTML += "wins";
      // document.querySelector(`name--${activePlayer}`).style.color = "#c7365f";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      diceEl.classList.add("hidden");
    }

    // currentScore = 0;
    // score = 0;

    // document.getElementById(`current--${activePlayer}`).textContent =
    //   currentScore;
    else switchPlayer();
  }
};

btnRoll.addEventListener("click", randDiceGen);

btnHold.addEventListener("click", hold);
