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
            return ["You lose! Paper beats Rock",false];
        } else {

            return ["You win! Rock beats Scissors",true]; 
        }
    }else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {

            return ["You win! Paper beats Rock",true];
        } else {
            return ["You lose! Scissors beats Paper",false];
        }
    }else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "Rock") {
            return ["You lose! Rock beats Scissors",false];
        } else {
            return ["You win! Scissors beats Paper",true];
        }
    }
}
function game() {
    let result;
    let wins = 0; 
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
                break;
            case null:
                console.log('No points')
                i--;
                break;
        }
    }
}