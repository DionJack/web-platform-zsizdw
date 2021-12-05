// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
let computerSelection = computerPlay();

function computerPlay() {
  let arr = ['rock', 'paper', 'scissors'];
  let randomArr = Math.floor(Math.random() * 3);
  return arr[randomArr];
}
console.log(computerSelection);


function playGame(playerSelection, computerSelection){
  const determineWinner =(playerSelection,computerSelection)=>{
  if (playerSelection ==='rock' && computerSelection ==='paper'){
    console.log ("You Lose! Paper beats Rock");
  }else if (playerSelection === 'rock' && computerSelection ==='scissors'){
    console.log ("You Win! Rock beats Scissors");
  }else if (playerSelection === 'paper' && computerSelection === 'rock'){
      console.log ("You Lose! Paper beats rock");
  }else playerSelection === 'scissors'&& computerSelection === 'paper'){
    console.log ("You Win! Scissors beats Paper");
  }else if (playerSelection === computerSelection ){
    console.log ("Tie, repeat to break the tie"){
   }
  const computerSelection =computerPlay();
  console.log(playGame(playerSelection, computerSelection));
  