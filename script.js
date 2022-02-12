let userScore = 0;
let compScore = 0;
let human = document.getElementById('HScore');
let comput = document.getElementById('CScore');
let outcome = document.getElementById('winner');
let rb = document.getElementById('rock');
let pb = document.getElementById('paper');
let sb = document.getElementById('scissors');
let wr = document.getElementById('finalResult')

function getChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum];
}

function win(user, computer) {
    userScore++;
    human.innerHTML = userScore;
    comput.innerHTML = compScore;
    outcome.innerHTML = 'You Win, ' + user + ' Beats ' + computer;
}

function lose(user, computer) {
    compScore++;
    human.innerHTML = userScore;
    comput.innerHTML = compScore;
    outcome.innerHTML = 'You Lose, ' + user + ' loses to ' + computer;
}

function draw() {
    outcome.innerHTML = 'Draw'
}

function game(userChoice) {
    const CChoice = getChoice();
    switch (userChoice + CChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, CChoice)
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, CChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, CChoice)
            break;
    }

}

function announce() {
    if (userScore === 5) {
        wr.innerHTML = 'You Win';
    } else if (compScore === 5) {
        wr.innerHTML = 'You Lose';
    } else {
        wr.innerHTML = 'In Progress';
    }
}

function main() {
    rb.addEventListener('click', function() {
        game('rock');
        announce();
    })
    pb.addEventListener('click', function() {
        game('paper');
        announce();
    })
    sb.addEventListener('click', function() {
        game('scissors');
        announce();
    })
}

main();