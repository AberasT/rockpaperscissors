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
function play(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()) {
        return "Draw!";
    }else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors"; 
        }
    }else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    }else {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    }
}