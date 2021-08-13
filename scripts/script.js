let pPoints = 0;
let cPoints = 0;
let pCounter = document.getElementById('pCounter');
pCounter.textContent = pPoints;
let cCounter = document.getElementById('cCounter');
cCounter.textContent = cPoints;


const play = document.getElementById('play');
const playerText = document.getElementById('player');

const youText = document.getElementById('you');

const computerText = document.getElementById('computer');
;
const pcText = document.getElementById('pc');

const resultText = document.getElementById('result');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const vs = document.getElementById('vs');
const restart = document.getElementById('restart');


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

function check() {
    if (pPoints == 5) {
        resultText.textContent = 'You won the match!';
    }
    else if (cPoints == 5) {
        resultText.textContent = 'You lost the match!';
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
                    check();
                    break;
                default:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
                    check();
            }
            break;
        case 2:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
                    check();
                    break;
                case 2:
                    resultText.textContent = 'Draw';
                    break;
                default:
                    resultText.textContent = 'Round lost';
                    cPoints += 1;
                    cCounter.textContent = cPoints;
                    check();
            }
            break;
        default:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Round lost';
                    cPoints += 1;
                    cCounter.textContent = cPoints;
                    check();
                    break;
                case 2:
                    resultText.textContent = 'Round won';
                    pPoints += 1;
                    pCounter.textContent = pPoints;
                    check();
                    break;
                default:
                    resultText.textContent = 'Draw';
            }
    }
}

// Buttons eventListeners 
rock.addEventListener('click', ()=>{
    if ((pPoints != 5) && (cPoints != 5)) {
        oneRound(1);
    }
});
paper.addEventListener('click', ()=>{
    if ((pPoints != 5) && (cPoints != 5)) {
        oneRound(2);
    }
});
scissors.addEventListener('click', ()=>{
    if ((pPoints != 5) && (cPoints != 5)) {
        oneRound(3);
    }
});
restart.addEventListener('click', ()=>{
    pPoints = 0;
    cPoints = 0;
    cCounter.textContent = cPoints;
    pCounter.textContent = pPoints;
    resultText.textContent = '';
    playerText.textContent = '';
    computerText.textContent = '';
    vs.textContent = '';
    youText.textContent = '';
    pcText.textContent = '';
})