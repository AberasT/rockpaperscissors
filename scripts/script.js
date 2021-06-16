let pPoints = 0;
let cPoints = 0;
let pCounter = document.getElementById('pCounter');
pCounter.textContent = pPoints;
let cCounter = document.getElementById('cCounter');
cCounter.textContent = cPoints;



const play = document.getElementById('play');
const playerText = document.getElementById('player');
playerText.style.color = 'black';
const youText = document.getElementById('you');
youText.style.color = 'grey';
const computerText = document.getElementById('computer');
computerText.style.color = 'black';
const pcText = document.getElementById('pc');
pcText.style.color = 'grey';
const resultText = document.getElementById('result');
resultText.style.color = 'black';
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const vs = document.getElementById('vs');
vs.style.color = 'black';

// Random 1 to 3 number generator
function computerPlay () {
    return (Math.floor(Math.random()*3) + 1);
}

// "number to text" translation function
function ntt(num) {
    switch (num) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        default:
            return 'Scissors';
    }
}

// Play one round function
function oneRound(playerSelection) {
    const computerSelection = computerPlay();
    playerText.textContent = ntt(playerSelection);
    youText.textContent = '(You)';
    computerText.textContent = ntt(computerSelection);
    pcText.textContent = '(PC)';
    vs.textContent = 'vs';
    switch (playerSelection) {
        case 1:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Draw';
                    break;
                case 2:
                    resultText.textContent = 'Round lost';
                    cPoints += 1;
                    cCounter.textContent = cPoints;
                    break;
                default:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
            }
            break;
        case 2:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
                    break;
                case 2:
                    resultText.textContent = 'Draw';
                    break;
                default:
                    resultText.textContent = 'Round lost';
                    cPoints += 1;
                    cCounter.textContent = cPoints;
            }
            break;
        default:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Round lost';
                    cPoints += 1;
                    cCounter.textContent = cPoints;
                    break;
                case 2:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
                    break;
                default:
                    resultText.textContent = 'Draw';
            }
    }
}

// Buttons eventListeners 
rock.addEventListener('click', ()=>{
    oneRound(1);
});
paper.addEventListener('click', ()=>{
    oneRound(2);
});
scissors.addEventListener('click', ()=>{
    oneRound(3);
});
