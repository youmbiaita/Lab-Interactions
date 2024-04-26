// Create your game here!
const div = document.getElementById("app");
  const h1 = document.createElement("h1");
  h1.textContent = "Start Game";
  div.appendChild(h1);
  let playGame = document.createElement("button");
  playGame.textContent = "Play Game";
  div.appendChild(playGame);
  playGame.addEventListener("click", guessANumber);

function guessANumber(event) {
    //initialize variables
    let lowNumber = parseInt(Math.random() * 10);
    let highNumber = parseInt(Math.random() * 100) + lowNumber;
    let totalAttempts = parseInt((highNumber - lowNumber) / 10);
    let guessNumber = parseInt(Math.random() * parseInt(highNumber - lowNumber) + lowNumber
    );
    let attempt = 0;
    let guess = false;
    // run until guess the number or made all the attempts possible
    while (!guess && attempt < totalAttempts) {
      //ask for a number between the limits
      let yourGuess = window.prompt(`Enter a number between ${lowNumber} and ${highNumber}. You have ${totalAttempts - attempt
        } to guess Lucky Number`
      );
      //increment
      attempt++;
      if (parseInt(yourGuess) === guessNumber) {
        guess = true;
      } else if (parseInt(yourGuess) < guessNumber) {
        window.alert(
          " Your number is  too lower, Try Again!!"
        );
      } else {
        window.alert(
          "Your number is too high, Try Again!!"
        );
      }
    }
    if (guess) {
      window.alert("Congratulations!!!!");
    } else {
      window.alert(`Not Lucky!, The number is ${guessNumber} , See you next time`);
    }
  }
  
  