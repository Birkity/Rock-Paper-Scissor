function getComputerChoice(){
    var gameArray = [
        "rock" || "Rock",
        "paper" || "Paper",
        "scissor" || "Scissor"
    ];
    var randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
    console.log(randomElement);
    return randomElement;
     
}

getComputerChoice();