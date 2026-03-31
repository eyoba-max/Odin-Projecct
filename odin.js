

// console.log('hello world');
let playerScore=0;
let computerScore=0;
let draw=0;
let num=Math.random();

let rock=document.querySelector(".rock");

let paper=document.querySelector(".paper");

let scissor=document.querySelector(".scissor");

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

function playRound(humanChoice, computerChoice) {

    let total = playerScore + computerScore + draw;
    if (total >= 5) return;

    let player = humanChoice.toLowerCase();

    if (player === computerChoice) {
        console.log('Tie');
        draw++;
    } else if (
        (player === 'rock' && computerChoice === 'scissor') ||
        (player === 'paper' && computerChoice === 'rock') ||
        (player === 'scissor' && computerChoice === 'paper')
    ) {
        console.log('You win');
        playerScore++;
    } else {
        console.log('You lose');
        computerScore++;
    }

    // update score
    addp.textContent = `Win ${playerScore} Lose ${computerScore} Tie ${draw}`;

    total = playerScore + computerScore + draw;

    // game end
    if (total === 5) {
        if (playerScore > computerScore) {
            addp.textContent = "🎉 You Win the Game!";
        } else if (playerScore < computerScore) {
            addp.textContent = "💻 Computer Wins!";
        } else {
            addp.textContent = "🤝 It's a Draw!";
        }
    }
}
rock.addEventListener('click', function() {
    playRound(rock.textContent, computerMove(Math.random()));
});

paper.addEventListener('click', function() {
    playRound(paper.textContent, computerMove(Math.random()));
});

scissor.addEventListener('click', function() {
    playRound(scissor.textContent, computerMove(Math.random()));
});

const add=document.createElement("div");
const addp=document.createElement("p");
add.appendChild(addp);
document.body.appendChild(add);



