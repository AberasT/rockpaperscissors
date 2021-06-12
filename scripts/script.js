//let ones ,twos ,threes; // For the probabilities module

const play = document.getElementById('play');
const playerText = document.getElementById('player');
const computerText = document.getElementById('computer');
const resultText = document.getElementById('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const vs = document.getElementById('vs');

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
    computerText.textContent = ntt(computerSelection);
    vs.textContent = 'vs';
    switch (playerSelection) {
        case 1:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'Draw';
                    break;
                case 2:
                    resultText.textContent = 'You lose';
                    break;
                default:
                    resultText.textContent = 'You win';
            }
            break;
        case 2:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'You win';
                    break;
                case 2:
                    resultText.textContent = 'Draw';
                    break;
                default:
                    resultText.textContent = 'You lose';
            }
            break;
        default:
            switch (computerSelection) {
                case 1:
                    resultText.textContent = 'You lose';
                    break;
                case 2:
                    resultText.textContent = 'You win';
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

function nightMode() {
    let element = document.body;
    element.classList.toggle('dark-body');
    element.classList.toggle('dark-body');
  }

//Probabilities check
/*

rock.addEventListener('click', ()=>{
    ones = 0;
    twos = 0;
    threes = 0;
    for (let i = 0; i<1000; i++) {
        let num = oneRound(1);
        switch (num) {
            case 1:
                ones++
                break;
            case 2:
                twos++;
                break;
            default:
                threes++;
        }
    }
    console.log('Ones: ',ones);
    console.log((ones/1000)*100,'%');
    console.log('Twos: ',twos);
    console.log((twos/1000)*100,'%');
    console.log('Threes: ',threes);
    console.log((threes/1000)*100,'%');
})*/