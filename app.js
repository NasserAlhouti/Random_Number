
// Game function
// player must guess a number between a min and a max
// notify players of guess remaining notify the player of the correct answer if he/she losses

//GAME VALUES

let min = document.getElementById('small-number'),
    max = document.getElementById('big-number'),

    guessesLeft = 3;
// UI Elements
const game = document.getElementById('game'),
    guessInput = document.getElementById('guess-input'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.getElementById('guess-btn'),
    message = document.querySelector('.message');
    // play again event listner
    game.addEventListener('mousedown',function(e){
      if (e.target.classList.contains('play-again')) {
        window.location.reload();
      }
    });
//listen for guess
guessBtn.addEventListener('click',runEvent)

function runEvent(e){
  //convert  to int values
  let guessNum = parseInt(guessInput.value);
  let minNum = parseInt(min.value);
  let maxNum = parseInt(max.value);
  let winningNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
  e.preventDefault();
  //Validate data

  if (isNaN(minNum) || isNaN(maxNum)) {
    setMessage('please enter a proper range','black');
    return;
  }else if(isNaN(guessNum)){
    setMessage(`please enter a number between ${minNum} and ${maxNum}` ,'red');
    return;
  }//check to see if winning number
  if (guessNum === winningNum) {
      //GAME OVER WON
    //Disabled input
    guessInput.disabled = true;
    //Change color of border
    guessInput.style.borderColor = 'green';
    //set setMessage
    setMessage(`${winningNum} is Correct!, YOU WIN A MILLION DOLLARS`,'green');
    guessBtn.value = "play again";
    guessBtn.className += 'play-again'
  }
  else if(minNum && maxNum){
      // WRONG NUMBER
        guessesLeft -= 1;
        if (guessesLeft === 0) {
          //GAME continues - answer wrong
          //Disabled input
          guessInput.disabled = true;
          //Change color of border
          guessInput.style.borderColor = 'red';
          //set setMessage
          setMessage(`Game over you lost a MILLION DOLLARS the correct answer was ${winningNum}`,'red');
          guessBtn.value = "play again";
          guessBtn.className += 'play-again'
        }
        else{
          //Game continues - answer WRONG
          setMessage(`${guessNum} is not correct ${guessesLeft} guesses left`,'red')
        }
  }

}
// set message

function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
  guessInput.value = '';
}
