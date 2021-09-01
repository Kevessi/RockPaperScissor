const rock = "rock";
const paper = "paper";
const scissor = "scissor";

function computerPLay() {
  let randNum = Math.floor(Math.random() * (4 - 1) + 1);
  if (randNum == 1) {
    return rock;
  } else if (randNum == 2) {
    return scissor;
  } else if (randNum == 3) {
    return paper;
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === rock) {
    return "You have a tie";
  } else if (playerSelection === rock && computerSelection === paper) {
    return "You lose, paper beats Rock";
  } else if (playerSelection === rock && computerSelection === scissor) {
    return "You win, rock beats scissor";
  } else if (playerSelection === paper && computerSelection === rock) {
    return "You win, paper beats Rock";
  } else if (playerSelection === paper && computerSelection === paper) {
    return "You have a tie";
  } else if (playerSelection === paper && computerSelection === scissor) {
    return "You lose, scissor beats paper";
  } else if (playerSelection === scissor && computerSelection === rock) {
    return "You lose, rock beats scissor";
  } else if (playerSelection === scissor && computerSelection === paper) {
    return "You lose, win beats paper";
  } else if (playerSelection === scissor && computerSelection === scissor) {
    return "You have  tie";
  }
}

function game() {
  for (let count = 1; count < 6; count++) {
    console.log("Round " + count);
    let input = prompt("Rock, paper or scissor?:");
    console.log(playRound(input, computerPLay())); //never return inside of a for loop, it will stop the code in the first try,
    //becaue remember after a return a code is stopped completely
  }
}
game();
