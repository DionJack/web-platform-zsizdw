// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
let computerSelection = computerPlay();

function computerPlay() {
  let arr = ['rock', 'paper', 'scissors'];
  let randomArr = Math.floor(Math.random() * 3);
  return arr[randomArr];
}
console.log(computerSelection);

function playGame(playerSelection, computerSelection) {}

playGame(playerSelection, computerSelection);
