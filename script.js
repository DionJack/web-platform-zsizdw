// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
let computerSelection = computerPlay();

function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);

  //first element
  console.log(arr[0]); // 'rock'

  // second elment
  console.log(arr[1]); // 'paper'

  // third element
  console.log(arr[2]); // 'scissors'
}
 
function playGame(playerSelection, computerSelection) {}

playGame(playerSelection, computerSelection);
