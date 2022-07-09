/* JavaScript file for "Rock, Paper, Scissors Shoot" game. 
7/9/22
For now, design the web-page using CSS.
*/
let myScore = 0;
let compScore = 0;

function randomInt(max){
    return Math.floor(Math.random()*max);
}

function computerPlay(){
    const array = ["rock", "paper", "scissor"];
    return array[randomInt(3)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection){
    mySelection = playerSelection.toLowerCase();
    if ((mySelection == "rock" && computerSelection == "rock") || (mySelection == "paper" && computerSelection == "paper")
    || (mySelection == "scissor" && computerSelection == "scissor")){
        res = "T";
    }
    else if ((mySelection == "rock" && computerSelection == "paper") || (mySelection == "scissor" && computerSelection == "rock") || 
    ((mySelection == "paper" && computerSelection == "scissor"))){
        compScore += 1;
        res = "L";
    }
    else if ((mySelection == "rock" && computerSelection == "scissor") || (mySelection == "paper" && computerSelection == "rock") || 
    (mySelection == "scissor" && computerSelection == "paper")){
        myScore += 1;
        res = "W";
    }
    roundOutcome(res, mySelection, computerSelection);
    scoreboard(mySelection, computerSelection, myScore, compScore);

}



function roundOutcome(res, mySelection, computerSelection){
    if (res == "T"){
        console.log("Tie! " + capitalizeFirstLetter(mySelection) + " ties with " + capitalizeFirstLetter(computerSelection));
        divRes.textContent = "Tie! " + capitalizeFirstLetter(mySelection) + " ties with " + capitalizeFirstLetter(computerSelection);
    }
    else if (res == "W"){
        console.log("You Win! " + capitalizeFirstLetter(mySelection) + " beats " + capitalizeFirstLetter(computerSelection));
        divRes.textContent = "You Win! " + capitalizeFirstLetter(mySelection) + " beats " + capitalizeFirstLetter(computerSelection);
    }
    else if (res == "L"){
        console.log("You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(mySelection));
        divRes.textContent = "You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(mySelection);
    }
}

function scoreboard(mySelection, compSelection, myScore, compScore){
    myScoreboard.textContent = myScore.toString();
    compScoreboard.textContent = compScore.toString();
    myPrompt.textContent = "Player: " + capitalizeFirstLetter(mySelection);
    compPrompt.textContent = "Computer: " + capitalizeFirstLetter(compSelection);
}



// User Interface
const divRes = document.querySelector('.res');
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => clickToPlay('rock'));
const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => clickToPlay('paper'));
const scissorBtn = document.querySelector('.scissor');
scissorBtn.addEventListener('click', () => clickToPlay('scissor'));
const myScoreboard = document.querySelector('.myScore');
const compScoreboard = document.querySelector('.compScore');
const myPrompt = document.querySelector('.myPrompt');
const compPrompt = document.querySelector('.compPrompt');

function resetGame(){
    myScore = 0;
    compScore = 0;
    myScoreboard.textContent = "0";
    compScoreboard.textContent = "0";
}

function clickToPlay(mySelection){
    if (myScore == 5 || compScore == 5){
        if (myScore > compScore){
            divRes.textContent = "Good Game! You won the game " + myScore.toString() + " - " + compScore.toString() + ". Click a button to play again!";
        }
        else{
            divRes.textContent = "Good Game! You lost the game " + myScore.toString() + " - " + compScore.toString() + ". Click a button to play again!";
        }
        resetGame();
        return;
    }
    const computerSelection = computerPlay();
    playRound(mySelection, computerSelection);
    
    
    

}





