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

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const newContent=document.createElement("p");
newContent.classList.add("par");
newContent.style.color="red";
newContent.textContent="Hey, I'm red!!";
container.appendChild(newContent);

const h3=document.createElement("h3");
h3.classList.add("h3");
h3.textContent="I'm blue h3";
h3.style.color="blue";
container.appendChild(h3);

const newDiv=document.createElement("div");
newDiv.setAttribute("style","border:solid black; background:pink");
let head=document.createElement("h1");
head.textContent="I'm in adiv";
newDiv.appendChild(head);
let par=document.createElement("p");
par.textContent="ME TOO";
newDiv.appendChild(par);

container.appendChild(newDiv);

// console.log(humanMove);
