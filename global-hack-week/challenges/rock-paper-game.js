const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }

    rl.close();
}

rl.question('Choose rock, paper, or scissors: ', (answer) => {
    const playerChoice = answer.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
        playGame(playerChoice);
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
        rl.close();
    }
});
