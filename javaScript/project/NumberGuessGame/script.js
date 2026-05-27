let randumNumber = Math.floor(Math.random() * 100) +1

const Submit = document.querySelector("#subt");
const userInput = document.querySelector('#guessField');
const guesSlot=document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess =[];
let numGuess = 1;
let playGame= true;    

if(playGame){
    Submit.addEventListener("click",function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value); 
    validateGuess(guess);
     
    })
}
function validateGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        console.log("Enter number between 0 to 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game over Random number was ${randumNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            cheackGuess(guess);
        }
    }
    
}

function cheackGuess(guess){
    if(guess === randumNumber){
        displayMessage(`Your guess is right`);
        endGame();
    } else if( guess < randumNumber){
        displayMessage(`Number is too low`);
    }
    else{
         displayMessage(`Number is too high`);
    }
      
}
function displayGuess(guess){
   userInput.value="";
   guesSlot.innerHTML += `${guess}  `;
   numGuess++;
   remaining.innerHTML= `${11 - numGuess}`;

}

function displayMessage(message){
    lowOrHi.innerHTML =`<h3>${message} </h3>`
}

function newGame(){
    const newGameButoon = document.querySelector("#newGame");
    newGameButoon.addEventListener('click' , function(e){ 
    randumNumber = Math.floor(Math.random() * 100) +1;
    prevGuess =[];
    numGuess = 1;
    guesSlot.innerHTML  = "";
    remaining.innerHTML= `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame =true;
    })
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled' ,'');
    p.classList.add('button');
    p.innerHTML=`<h2 id ="newGame">Start New Game </h2>`
    startOver.appendChild(p);
    playGame =false;
    newGame();

 
}

 