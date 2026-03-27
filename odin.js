// console.log('hello world');
let playerScore=0;
let computerScore=0;
let draw=0;
let num=Math.random();

let pcMove=computerMove(num);
function computerMove(num){
    if(num<=1/3){
        return 'rock';
    } else if(num>1/3 && num<=2/3){
        return 'paper';
    } else if(num>2/3){
        return 'scissor';
    }
}
// console.log(pcMove);

// let humanMove=getHumanChoice();

function getHumanChoice(){

    let choice=prompt("Rock, Paper, Scissor");
    return choice;
}

playGame();

function playGame(){

for(let i=0;i<5;i++){
    let humanMove=getHumanChoice();
    playRound(humanMove,pcMove);
}

}

function playRound(humanChoice,computerChoice){
    let variable=humanChoice.toLowerCase();

    if(variable==='rock'){
        if(computerChoice==='rock'){
            console.log('Tie');
            draw++;
        } else if(computerChoice==='paper'){
            console.log('you lose');
            computerScore++;
        } else if(computerChoice==='scissor'){
            console.log('you win');
                playerScore++;
            }
        }
    

    if(variable==='paper'){
        if(computerChoice==='paper'){
            console.log('Tie');
            draw++;
        } else if(computerChoice==='scissor'){
            console.log('you lose');
            computerScore++;
        } else if(computerChoice==='rock'){
            console.log('you win');
                playerScore++;
            }
        }

    if(variable==='scissor'){
        if(computerChoice==='scissor'){
            console.log('Tie');
            draw++;
        } else if(computerChoice==='rock'){
            console.log('you lose');
            computerScore++;
        } else if(computerChoice==='paper'){
            console.log('you win');
                playerScore++;
            }
        }
    // console.log(playerScore);
    // console.log(computerScore);
}

if(playerScore>computerScore){
    console.log(`yow win ${playerScore} times and you lose ${computerScore} times ${draw} times draw`);
    console.log("you beat the computer");
} else if(playerScore<computerScore){
    console.log(`yow win ${playerScore} times and you lose ${computerScore} times ${draw} times draw`);
    console.log("the computer beat you");
} else{
    console.log(`yow win ${playerScore} times and you lose ${computerScore} times ${draw} times draw`);
    console.log("you got draw");
}

// console.log(humanMove);
