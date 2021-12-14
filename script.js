
// let playerSelection = prompt('Type your choice of rock, paper or scissors.');
function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  let randomArr = Math.floor(Math.random() * 3);
  return rps[random];
}

let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
let result;
  if (playerSelection === computerSelection) {
  result = 'Computer Choice ${Computer Selection} <br> Tie, repeat to break the tie';} else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) { 
    result ='Computer Choice ${computerSelection <br> You Lose!$    
   {computerSelection} beats ${playerSelection}.'
  } else { 
    result='Computer Choice ${computerSelection} <br> You Win!$
    {playerSelection} beats ${computerSelection}.'

    document.getElementById('result'.innerHTML = result;
   }
   const buttons = document.querySelectorAll('input');

   for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      playGame(buttons[i].value, computerSelection);
    });
  }




