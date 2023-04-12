"strict";
const rock = document.querySelector(".rock img");
const paper = document.querySelector(".paper img");
const scissors = document.querySelector(".scissors img");
const gameOutput = document.querySelector(".games-output");
const playerScore = document.querySelector(".player-score");
const pekoScore = document.querySelector(".peko-score");
const Ptext = document.querySelector(".p-text");
const Pekotext = document.querySelector(".pe-text");

const choices = ["rock", "paper", "scissors"];
let peScore = 0;
let myScore = 0;

const me = "Thai";
const pekoName = "Pekora";

const getPekoChoice = function () {
  return Math.floor(Math.random() * choices.length);
};

const getPlayerChoice = function (pChoices) {
  return choices.indexOf(choices[pChoices]);
};

const gamePlay = function (choice1, choice2) {
  const myWincon = function () {
    Ptext.textContent = choices[choice2];
    Pekotext.textContent = choices[choice1];
    gameOutput.textContent = `${me} is beating ${pekoName} with ${choices[choice2]} against ${choices[choice1]}`;
    myScore++;
    playerScore.textContent = myScore;
    if (myScore === 5) {
      return (gameOutput.textContent = `${me} has won the game, please press F5 on the keyboard to restart!`);
    }
  };
  const pekoWincon = function () {
    Ptext.textContent = choices[choice2];
    Pekotext.textContent = choices[choice1];
    gameOutput.textContent = `${pekoName} is beating ${me} with ${choices[choice1]} against ${choices[choice2]}`;
    peScore++;
    pekoScore.textContent = peScore;
    if (peScore === 5) {
      return (gameOutput.textContent = `${pekoName} has won the game, please press F5 on the keyboard to restart!`);
    }
  };

  const tieCon = function () {
    gameOutput.textContent = "It's a tie!";
    Ptext.textContent = choices[choice2];
    Pekotext.textContent = choices[choice1];
  };

  while (peScore !== 5 && myScore !== 5) {
    if (choice1 == choice2) {
      return tieCon();
    } else if (
      (choice1 == 0 && choice2 == 1) ||
      (choice1 == 1 && choice2 == 2) ||
      (choice1 == 2 && choice2 == 0)
    ) {
      return myWincon();
    } else {
      return pekoWincon();
    }
  }
};

const main = function () {
  rock.addEventListener("click", () => {
    gamePlay(getPekoChoice(), getPlayerChoice(0));
  });
  paper.addEventListener("click", () => {
    gamePlay(getPekoChoice(), getPlayerChoice(1));
  });
  scissors.addEventListener("click", () => {
    gamePlay(getPekoChoice(), getPlayerChoice(2));
  });
};

main();
