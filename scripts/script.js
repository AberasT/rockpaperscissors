function computerPlay() {
    let rnd = Math.random()*3;
    if (rnd<1) {
        return "Rock";
    } else if (rnd<2) {
        return "Paper"; 
    } else {
        return "Scissors";
    }
}

function oneRound(playerSelection,computerSelection) {

    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()) {
        return ["Draw!",null];
    }else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            return ["Round lost! Paper beats Rock",false];
        } else {
            return ["Round won! Rock beats Scissors",true]; 
        }
    }else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {

            return ["Round won! Paper beats Rock",true];
        } else {
            return ["Round lost! Scissors beats Paper",false];
        }
    }else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "Rock") {
            return ["Round lost! Rock beats Scissors",false];
        } else {
            return ["Round won! Scissors beats Paper",true];
        }
    }
}

function game() {
    let result;
    let wins = 0;
    let loses = 0;
    for (let i=1; i<6; i++) {
        let userChoice = prompt('What do you choose?');
        result = oneRound(userChoice,computerPlay());
        console.log(result[0]);
        switch(result[1]) {
            case true:
                console.log('1 point for you')
                wins++;
                break;
            case false:
                console.log('1 point for the computer')
                loses++;
                break;
            case null:
                console.log('No points')
                i--;
                break;
            }
        if ((wins==3) && (i>2)) {
            return "You win!";
        } else if ((i>2) && (loses==3)){
            return "You lose!";
        }
    }
}