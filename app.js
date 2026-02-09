'use strict';
let userPoints = 0;

alert("｡･:*:･ﾟ★｡ Welcome to the Guessing Game! ｡･:*:･ﾟ★｡");

while (!user || user.toLowerCase() === "naomi") {
  if (!user) {
    user = prompt("What is your name? I REALLY want to know...");
  } else if (user.toLowerCase() === "naomi") {
    user = prompt("Hmm...Nice Try!");
  }
}

if (user.toLowerCase() === "naomi") {
  alert("Hmm… nice try!");
}

alert("Hi " + user +  "! I am so glad you decided to visit my site.");

let score = 0;

// reusable function for 3 attempts
function askQuestion(question, correctAnswer) {
  let attempts = 0;

  while (attempts < 3) {
    let guess = prompt(question);

    if (guess && guess.toLowerCase() === correctAnswer) {
      alert("Correct! ᯓ★");
      return true;
    } else {
      attempts++;
      if (attempts < 3) {
        alert("Try again!");
      } else {
        alert("Nope! The correct answer was " + correctAnswer + ".");
      }
    }
  }
  return false;
}

// Question 1
if (askQuestion("Is Naomi a morning person or night owl?", "night owl")) {
  score++;
}

// Question 2
if (askQuestion("Pineapple on pizza: yes or no?", "yes")) {
  score++;
}

// Question 3
if (askQuestion("Cats or dogs (or both)?", "cats")) {
  score++;
}

// Question 4 (number question with 3 tries)
let numberAttempts = 0;
while (numberAttempts < 3) {
  let q4 = prompt("Guess a number from 1–5");

  if (Number(q4) === 3) {
    alert("Correct! ᯓ★");
    score++;
    break;
  } else {
    numberAttempts++;
    if (numberAttempts < 3) {
      alert("Try again!");
    } else {
      alert("Nope! The correct number was 3.");
    }
  }
}

// Question 5
if (askQuestion("Sweet or salty?", "salty")) {
  score++;
}

// Question 6
if (askQuestion("Reading or audiobooks?", "reading")) {
  score++;
}

// Question 7
if (askQuestion("Socks or barefoot?", "barefoot")) {
  score++;
}

// Final score
alert("Game over! ˙𐃷˙ You got " + score + " out of 7 correct!");