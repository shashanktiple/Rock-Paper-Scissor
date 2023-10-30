const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");

const btn = document.querySelectorAll(".btn");

let player;
let computer;
let result;

btn.forEach(fun);

function fun(a) {
  a.addEventListener("click", () => {
    player = a.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkResult();
  });
}

function computerTurn() {
  rnum = Math.ceil(Math.random() * 3);

  switch (rnum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}

function checkResult() {
  if (player == computer) {
    return "Draw";
  } else if (computer == "Rock") {
    return player == "Scissor" ? "You Lose!" : "You Win!";
  } else if (computer == "Paper") {
    return player == "Scissor" ? "You Win!" : "You Lose!";
  } else if (computer == "Scissor") {
    return player == "Rock" ? "You Win!" : "You Lose!";
  }
}
