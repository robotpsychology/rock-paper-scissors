const availableMoves = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    const randNum = Math.floor(Math.random() * Math.floor(availableMoves.length));
    return availableMoves[randNum];
}


function roundOfGame(playerSelection) {
    let checkPlayerWin;
    const computerChoice = computerPlay();

    let userChoice = prompt("Rock, paper, or scissors? ");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    function totalPointsDisplay() {
        console.log('---Total Scores--- \n' + 'Your score: ' + userScore + '\n' + 'Computer score: ' + computerScore);
    }


    if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        userScore++;
        checkPlayerWin = true;
    } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        userScore++;
        checkPlayerWin = true;
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
        userScore++;
        checkPlayerWin = true;
    } else if (userChoice === computerChoice) {
        console.log(userChoice + ' and ' + computerChoice + '. It\'s  a tie, go again!');
        totalPointsDisplay();
        roundOfGame();
    } else if (!availableMoves.includes(userChoice)) {
        console.log('That\'s not a valid choice. Try again.');
        roundOfGame();
    } else {
        computerScore++;
        checkPlayerWin = false;
    }

    if (checkPlayerWin === true) {
        console.log('You win! ' + userChoice + ' beats ' + computerChoice + '.');
        totalPointsDisplay();
    } else if (checkPlayerWin === false) {
        console.log('You lose! ' + computerChoice + ' beats ' + userChoice + '.');
        totalPointsDisplay();
    }
}


function playGame() {
    let roundCount = prompt('How many rounds do you want to play?');

    if (isNaN(roundCount) === true) {
        console.log('Please type in the amount of rounds you wish to play.');
        playGame();
    } else {
        for (let i = 0; i < roundCount; i++) {
            roundOfGame();
        }
    }

}


playGame();
