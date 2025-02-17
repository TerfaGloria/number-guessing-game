

let Attempts = 0;
const maxAttempt = 10;
let randomNumbers;

function generateRandomNumber() {
  randomNumbers = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumbers);
}

function checkGuess(guessUser) {
  Attempts++;
  if (guessUser === randomNumbers) {
    document.getElementById("result").innerHTML = `Congratulations! You guessed the correct
     number in ${Attempts} attempts.`;
    setTimeout(function() {
      const playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        Attempts = 0;
        document.getElementById("result").innerHTML = '';
        document.getElementById("guess").value = '';
        generateRandomNumber();
      } else {
        window.location.href = 'https://www.google.com'; // redirect to another page
      }
    }, 1000); // wait 1 second before asking to play again
    return true;

  } else if (guessUser < randomNumbers) {
    document.getElementById("result").innerHTML = `Too low! Please try again`;

    setTimeout(function() {
      const playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        Attempts = 0;
        document.getElementById("result").innerHTML = '';
        document.getElementById("guess").value = '';
        generateRandomNumber();
      } else {
        window.location.href = 'https://www.google.com'; // redirect to another page
      }
    }, 1000); // wait 1 second before asking to play again

  } else {
    document.getElementById("result").innerHTML = `Too high! Please try again`;
    setTimeout(function() {
      const playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        Attempts = 0;
        document.getElementById("result").innerHTML = '';
        document.getElementById("guess").value = '';
        generateRandomNumber();
      } else {
        window.location.href = 'https://www.google.com'; // redirect to another page
      }
    }, 1000); // wait 1 second before asking to play again

  }
  if (randomNumbers % 2 == 0) {
    document.getElementById("result").innerHTML += ` Hint: the number is even.`;
  } else {
    document.getElementById("result").innerHTML += ` Hint: the number is odd.`;
  }
  return false;
}

generateRandomNumber();

document.getElementById('submit').addEventListener("click", function() {
  const guessUser = document.getElementById("guess").value;
  if (isNaN(guessUser) || guessUser < 1 || guessUser > 100) {
    document.getElementById("result").innerHTML = "Invalid input. Please enter a number between 1 and 100.";
  } else {
    const guessUserInt = parseInt(guessUser);
    if (checkGuess(guessUserInt)) {
      // do nothing, the checkGuess function will handle the rest
    } else if (Attempts === maxAttempt) {
      document.getElementById("result").innerHTML = `Sorry you've  exalted all your attempts, the correct number was ${randomNumbers}.`;
      setTimeout(function() {
        const playAgain = confirm('Do you want to play again?');
        if (playAgain) {
          Attempts = 0;
          document.getElementById("result").innerHTML = '';
          document.getElementById("guess").value = '';
          generateRandomNumber();
        } else {
          window.location.href = 'https://www.google.com'; // redirect to another page
        }
      }, 1000); // wait 1 second before asking to play again
    }
  }
});