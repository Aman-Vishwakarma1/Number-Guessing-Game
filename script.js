'use strict';

let logicNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {

        const guessValue = Number(document.querySelector('.guess').value);
        // IF PLAYER DON'T GIVE CORRECT NUMBER OR LEFT FIELD BLANK
        if (!guessValue) {
            displayMessage('⛔ No Number');
        }
        // IF GUESS IS CORRECT AND PLAYER WINS
        else if (guessValue === logicNumber) {
            if (score > highscore) {
                highscore = score;
            }
            displayMessage('🎊 Correct Guess You Wins');
            document.querySelector('.number').textContent = logicNumber;
            document.querySelector('.highscore').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

        }
        // IF GUESS IS WRONG
        else if (guessValue !== logicNumber) {
            if (score > 1) {
                displayMessage(guessValue > logicNumber ? "📈 Too High" : "📉 Too Low"), 
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                displayMessage('You Lost the Game');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'f70d1a';
                document.querySelector('.logicNumber').style.width = '30rem';
            }
        }
    });
        // PLAY AGAIN BUTTON FUCTIONS AND LOGIC
        document.querySelector('.again').addEventListener('click', function () {
            document.querySelector('.number').textContent = '?'
            score = 20;
            logicNumber = Math.trunc(Math.random() * 20 + 1);
            displayMessage('Start guessing...');
            document.querySelector('.score').textContent = score;

            document.querySelector('.guess').value = '';

            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
        });
