// --------------------RANDOM NUMBER------------------- 

let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);

// ---------------------MAIN CONCEPT--------------------------

let displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
let score = 20;
document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
        
    if(!guess){
        displayMessage('No Number...');
        
    } else if(guess !== randomNumber){
        if(score > 1){
            displayMessage(guess > randomNumber? 'Too High' : 'Too Low');
            score --;
            score = document.querySelector('.score').textContent -= 1; 
        }else{
            displayMessage('You lost the game')
            score = document.querySelector('.score').textContent = 0; 
        }
            
    }else{
        displayMessage('Correct Number...');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '21rem';
        document.querySelector('.highscore').textContent = score;
    }
})



document.querySelector('.again').addEventListener('click' , function(){
    document.querySelector('.score').textContent = 20;    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = NaN;
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start Guessing...');
    let randomNumber = Number(Math.trunc(Math.random() * 20+1));

})