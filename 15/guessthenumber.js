const guess = document.querySelector(".guess");

const previousGuess = document.querySelector("#previous-guess");
const leftAttempts = document.querySelector("#attemts-left");
const result = document.querySelector("#result")
const lowOrHigher = document.querySelector(".low-or-high");

let attempts = 10;
let previousGuesses =[];

const originalNumber = Math.floor(Math.random()*100)+1;

guess.addEventListener("click",function(){
    const number = document.querySelector("#number").value;
    result.innerHTML=``;
    if(!(number == "") && number<=100 && number >= 0)
        verifyGuess(number);
    else result.innerHTML=`<h1>Guess a Valid number (1 - 100)</h1>`
    
})
function verifyGuess(number){
    if(!(number == originalNumber)){
        if(attempts<=0){
            gameover()
            return
        }
        attempts--;
        previousGuesses.push(number)
        result.innerHTML=`<h1>Wrong Guess!!</h1>`
        previousGuess.innerHTML = previousGuesses;
        leftAttempts.textContent = attempts;
        document.querySelector("#number").value=''
        // lowOrHigh(number)
    }else{
        winner();
        return
    }
}
function gameover(){
    result.innerHTML=`<h1>Sorry, Out of attemts. GAME OVER!!</h1>`
    attempts=10
    previousGuesses=[]
    previousGuess.innerHTML = previousGuesses;
    leftAttempts.textContent = attempts;
    document.querySelector("#number").value=''
}
function winner(){
    result.innerHTML = `<h1>Congratulations!! You guessed it right.</h1>`
    attempts=10
    previousGuesses=[]
    previousGuess.innerHTML = previousGuesses;
    leftAttempts.textContent = attempts;
    document.querySelector("#number").value=''
}

function lowOrHigh(number){
    if(number > originalNumber){
        // originalnumber is lower
        lowOrHigher.innerHTML = `Guess a LOWER number`
    }else if(number < originalNumber){
        // originalnumber is higher
        lowOrHigher.innerHTML = `Guess a HIGHER number`

    }else{

    }
}

// console.log(originalNumber)