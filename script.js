function randomInt(max){
    return Math.floor(Math.random()*max)
}

function computerPlay(){
    const array = ["rock", "paper", "scissor"]
    return array[randomInt(3)]
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection){
    mySelection = playerSelection.toLowerCase()
    if ((mySelection == "rock" && computerSelection == "rock") || (mySelection == "paper" && computerSelection == "paper")
    || (mySelection == "scissor" && computerSelection == "scissor")){
        return "T"
    }
    else if ((mySelection == "rock" && computerSelection == "paper") || (mySelection == "scissor" && computerSelection == "rock") || 
    ((mySelection == "paper" && computerSelection == "scissor"))){
        return "L"
    }
    else if ((mySelection == "rock" && computerSelection == "scissor") || (mySelection == "paper" && computerSelection == "rock") || 
    (mySelection == "scissor" && computerSelection == "paper")){
        return "W"
    }
}

function scoreboard(myScore, computerScore){
    return (myScore.toString() + " - " + computerScore.toString())

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3){
        let mySelection = prompt("Rock, Paper, or Scissor? ")
        let computerSelection = computerPlay()
        let res = playRound(mySelection, computerSelection)
        if (res == "T"){
            console.log("Tie! " + capitalizeFirstLetter(mySelection) + " ties with " + capitalizeFirstLetter(computerSelection))
            console.log(playerScore, computerScore)
            alert("Tie! " + capitalizeFirstLetter(mySelection) + " ties with " + capitalizeFirstLetter(computerSelection) + "\r\n" + 
            scoreboard(playerScore, computerScore))
        }
        else if (res == "W"){
            console.log("You Win! " + capitalizeFirstLetter(mySelection) + " beats " + capitalizeFirstLetter(computerSelection))
            playerScore += 1
            console.log(playerScore, computerScore)
            alert("You Win! " + capitalizeFirstLetter(mySelection) + " beats " + capitalizeFirstLetter(computerSelection) + "\r\n" + 
            scoreboard(playerScore, computerScore))
        }
        else if (res == "L"){
            console.log("You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(mySelection))
            computerScore += 1
            console.log(playerScore, computerScore)
            alert("You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(mySelection) + "\r\n" + 
            scoreboard(playerScore, computerScore))
        }
    }
    if (playerScore == 3){
        console.log("You won this game, " + scoreboard(playerScore, computerScore))
        alert("You won this game, " + scoreboard(playerScore, computerScore))
    }
    else {
        console.log("You lost this game, " + scoreboard(playerScore, computerScore))
        alert("You lost this game, " + scoreboard(playerScore, computerScore))
    }

}

game()