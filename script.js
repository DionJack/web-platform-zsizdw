
// let playerSelection = prompt('Type your choice of rock, paper or scissors.');
let playerSelection = 'rock';
let computerSelection = computerPlay();

function computerPlay() {
  let arr = ['rock', 'paper', 'scissors'];
  let randomArr = Math.floor(Math.random() * 3);
  return arr[randomArr];
}
console.log(computerSelection);

function playGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper')
    console.log('You Lose!');
  // if player  has rock they against paper they lose
  else if (playerSelection === 'rock' && computerSelection === 'scissors')
    console.log('You Win!');
  // if player  has rock against scissors they win
  else if (playerSelection === 'paper' && computerSelection === 'rock')
    console.log('You Lose!');
  // if player has paper against scissors  they lose
  else if (playerSelection === 'scissors' && computerSelection === 'paper')
    console.log('You Win!');
  else if (playerSelection === computerSelection)
  console.log ('Tie, repeat to break the tie');
  computerSelection = computerPlay();
}
option.addEventListener("click", function () {
  const pInput = this.value;

  const cOptions = ["Rock", "Paper", "Scissors"];
  const cInput = cOptions[Math.floor(Math.random() * 3)];
  updateMoves(pInput, cInput);
  compareInputs(pInput, cInput);
  updateScore();
  if (checkWinner()) {
    pScore = cScore = 0;
    updateScore();
  }
});