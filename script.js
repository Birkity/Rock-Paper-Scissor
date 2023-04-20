
const computerSelection = getComputerChoice();

function getComputerChoice(){
    var gameArray = [
        "rock" || "Rock" || "ROCK",
        "paper" || "Paper" ||"PAPER" ,
        "scissor" || "Scissor" || "SCISSOR"
    ];
    var randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
    return randomElement;
     
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection=="rock" || "ROCK" || "Rock" && computerSelection=="scissor" ||"Scissor" || "SCISSOR"){
        return "You win! Rock beats scissor";
    } else if(playerSelection=="paper" || "PAPER" || "Paper" && computerSelection=="rock" ||"Rock" || "ROCK"){
        return "You win! Paper beats Rock";
    }else if(playerSelection=="scissor" || "Scissor" || "SCISSOR" && computerSelection=="paper" ||"PAPER" || "Paper"){
        return "You win! Scissor beats Paper ";
    }else{
        return "You lose! Now who is going to defeat the machine."
    }
  }

  function game(){
    let playerSelection = prompt("Rock Paper Scissor");
        return playRound(playerSelection,computerSelection )
    
    
  }
   
console.log(game());

