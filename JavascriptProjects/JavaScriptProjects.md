# Projects related to DOM

## Project #1 Link
[Click here](https://dom-project-1.stackblitz.io)

# Project #1 Code Multiple Color Select for Body
```JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.id === 'gray') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
# Project #2 Link 
[Click here](https://bmi-project2.stackblitz.io)

# Project #2 Code BMI Calculator
```JavaScript
// submit event learn

// get form
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);
console.log(form);
//submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give  a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give  a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // display the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} Under weight = less than 18.6</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi} Normal Range =18.6 and 24.9</span>`;
    } else {
      results.innerHTML = `<span>${bmi} OverWeight= greater than 24.9</span>`;
    }
  }
});
```

# Project #3 Link 
[Click here](https://digital-clock-project3.stackblitz.io)

# Project #3 Code Digital Clock

```Javascript
const clock = document.getElementById('clock');
// run function every 1sec
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```


# Project #4 Link 
[Click here](https://guess-number-project.stackblitz.io)

# Project #4 Code Guess Number Game 

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

// get all selector and store into variables
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.finalResult');

// create p element
const p = document.createElement('p');
// user guess previous number store into array
let prevGuess = [];
// how many guess user start from 1
let numGuess = 1;
// playgame true or false for validation
let playGame = true;

// playgame is true then
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// function validate number and alphabetics negative number 1-100 etc...
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLEASE ENTER A VALID NUMBER');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// function checkguess => validate
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo Loww`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Tooo High`);
  }
}

// display guess like cleanup
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// function user input display message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// function endgame
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// function newgame
function newGame(game) {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```