'use strict';

let logicNumber = Math.trunc(Math.random()*20+1)
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function() {

    const guessValue = Number(document.querySelector('.guess').value);

    if (!guessValue) {
        document.querySelector('.message').textContent = '⛔ No Number';
    }
    else if (guessValue===logicNumber){
        if(score>highscore){
            highscore = score;
        }
        document.querySelector('.message').textContent = '🎊 Correct Guess You Wins'
        document.querySelector('.number').textContent = logicNumber;
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
    }
    else if(guessValue > logicNumber){
        if(score>1){
        document.querySelector('.message').textContent = '📈 Too High'
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost the Game'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'f70d1a';
            document.querySelector('.logicNumber').style.width = '30rem';
        }
    }
    else if(guessValue < logicNumber){
        if(score>1){
            document.querySelector('.message').textContent = '📉 Too Low'
            score--;
            document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lost the Game'
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '';
                document.querySelector('.logicNumber').style.width = '30rem';
            }
    }


});


document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.number').textContent = '?'
    score = 20;
    logicNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});
