'use strict';

// prompt to greet the user
let theirName = prompt('What is your name?');

// console.log('Their name is: ' + theirName);
alert(theirName + ', welcome! That might be the coolest name out there. My name is Kevin Stone and welcome to my site!');

function buttons () {
    let game = prompt('Which guessing game do you wnat to play? Select a number (1. Kevin 2. Number 3. National Parks)')
    if (game == 1) {
        firstFunction();
    } else if (game == 2){
        userGuessingGame(randomNumberGenerator());
    } else if (game == 3) {
        nationalParks();
    } else if (game == 4) {
        "" 
    }
}

function firstFunction() {



  // 1. prompt to guess age
  let age = prompt('Is Kevin older than 30 years old?');

  if (age.toLowerCase() == 'yes') {
    // console.log('That was a good guess, but I am only 28!');
    alert('That was a good guess, but he is only 28!');
  } else if (age.toLowerCase() == 'no') {
    // console.log('That is correct, I am 28!');
    alert('That is correct, he is 28!');
  } else {
    // console.log('They did not answer yes or no!');
    alert('Make sure to put yes or no for your answer. Go ahead and click the button and try again!');
  }

  // 2. prompt to guess if I like to read
  let books = prompt('Does Kevin like to read books?');

  if (books.toLowerCase() == 'no') {
    // console.log('They answered incorrectly');
    alert("You didn't get this one right. He loves to read! He prefers non-fiction and historical fiction.");
  } else if (books.toLowerCase() == 'yes') {
    // console.log('They answered correctly');
    alert('You got it right! He loves to read some non-fiction and historical fiction.');
  } else {
    // console.log("They didn't say yes or no.");
    alert('Make sure to put yes or no for your answer. Go ahead and click the button and try again!');
  }

  // 3. prompt to guess height
  let kevHeight = prompt('Is Kevin over 6 feet tall?');

  if (kevHeight.toLowerCase() == 'yes') {
    // console.log('They answered incorrectly');
    alert("You didn't get this one right. He wishes he was taller than 6 feet.");
  } else if (kevHeight.toLowerCase() == 'no') {
    // console.log('They answered correctly');
    alert("You've got it right... he is only 5'8''!");
  } else {
    // console.log("They didn't say yes or no.");
    alert('Make sure to put yes or no for your answer. Go ahead and click the button and try again!');
  }

  // 4. prompt to guess years in the military
  let milYears = prompt('Did Kevin serve over 4 years in the US Navy?');

  if (milYears.toLowerCase() == 'no') {
    // console.log('They answered correctly');
    alert("You nailed it! He only served four years in the US Navy.");
  } else if (milYears.toLowerCase() == 'yes') {
    // console.log('They answered incorrectly');
    alert('Rats, maybe next time. He only served 4 years in the US Navy.');
  } else {
    // console.log("They didn't say yes or no.");
    alert('Make sure to put yes or no for your answer. Go ahead and click the button and try again!');
  }

  // 5. prompt to guess how many siblings I have
  let siblings = prompt('Does Kevin have more than 2 siblings?');

  if (siblings.toLowerCase() == 'no') {
    // console.log('They answered correctly');
    alert("Well done, he only has one sister.");
  } else if (siblings.toLowerCase() == 'yes') {
    // console.log('They answered incorrectly');
    alert('Sorry, but you got this one wrong. He only has one sister.');
  } else {
    // console.log("They didn't say yes or no.");
    alert('Make sure to put yes or no for your answer. Go ahead and click the button and try again!');
  }

  // final message to user
  alert('Thank you ' + theirName + ', for playing this guessing game. Hopefully you learned something about Kevin along the way.');
}

  // 6. random number generator
  function randomNumberGenerator(){
    // Got the folowing code from W3 Schools
    // https://www.w3schools.com/js/js_random.asp
    let correctAnswer = Math.floor(Math.random() * 100) +1;
    return correctAnswer;
};

  // 6. Number guessing game
function userGuessingGame(correctAnswer){
  console.log(correctAnswer)
  let wannaPlay = prompt('Are you sure you want to play this rad game? (yes or no)');
  outLoop: while (wannaPlay.toLowerCase() == 'yes') {
      let numberOfAttempts = 4;
      let userAnswer = parseInt(prompt('Guess a number between 1 and 100'));

      while (userAnswer >= 1 && userAnswer <= 100 && numberOfAttempts) {
          if (userAnswer === correctAnswer) {
              alert('Well done! You got it right.');
              break outLoop;
          }
          if (userAnswer < correctAnswer) {
              alert('Your answer is too low, try again! You have ' + numberOfAttempts + ' attempts left.')
              console.log('LOW');
          }
          if (userAnswer > correctAnswer) {
            alert('Your answer is too high, try again! You have ' + numberOfAttempts + ' attempts left.')
            console.log('HIGH');
          }
          numberOfAttempts -= 1;
          userAnswer = parseInt(prompt('Guess a number between 1 and 100'))
          console.log(userAnswer);
        }
        alert('Nice Try! The answer was ' + correctAnswer + '.');
        break;
      }
  }

  

  const correctPark = 
  ['Sequoia', 'Glacier', 'Great Smoky Mountains', 
  'Yellowstone', 'Olympic', 'Grand Canyon', 'Arches', 
  'Yosemite', 'Everglades', 'Shenandoah'];

  function nationalParks() {
    let wantToPlay = prompt('Are you sure you want to play? (yes or no)');
    
  }