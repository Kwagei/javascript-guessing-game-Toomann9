let displayScreen;
displayScreen = document.getElementById("result");
displayScreen.style.fontSize = "1rem";
displayScreen.style.padding = "1rem";
// Generate an array of numbers from 1 to 100
let numbers = [];
for (let i = 1; i < 101; i++) {
    numbers.push(i);
}

//  Fisher-Yates algorithm
for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

// Create the buttons in random order
let buttonsDiv = document.getElementById("button-container");
for (let i = 0; i < numbers.length; i++) {
    let button = document.createElement("button");
    button.className = "round-button";
    button.id = numbers[i];
    button.innerHTML = numbers[i];
    buttonsDiv.appendChild(button);

    // Add click event listener to each button
    button.addEventListener("click", function() {
        // Get the button id || the guessed number
        let guessedNumber = parseInt(this.id);

        // Check if the guessed number is correct
        if (guessedNumber === randomNumber) {
            document.getElementById("result").innerHTML = "Congratulations! You Won The Game!";
            this.style.backgroundColor = "green";
            document.getElementById("restart").style.display = "inline-block";
        } else if (guessedNumber < randomNumber) {
            document.getElementById("result").innerHTML = "Too low, try again.";
            this.disabled = true;
            this.style.backgroundColor = "black"; 
            this.style.color = "white";
            guessCounter--; // Decrement guess counter
            document.getElementById("guesses").innerHTML = " " + guessCounter;
            if (guessCounter === 0) {
                document.getElementById("result").innerHTML = "Game Over!! The number was " + randomNumber + ".";
                document.getElementById("restart").style.display = "inline-block"; 
                for (let i = 0; i < numbers.length; i++) {
                    document.getElementById(numbers[i]).disabled = true; // Disable all buttons
                }
            }
        } else {
            document.getElementById("result").innerHTML = "Too high, try again.";
            this.disabled = true;
            this.style.backgroundColor = "black";
            this.style.color = "white"; 
            guessCounter--; // Decrement guess counter
            document.getElementById("guesses").innerHTML = " " + guessCounter;
            if (guessCounter === 0) {
                document.getElementById("result").innerHTML = "Game Over!! The number was " + randomNumber + ".";
                document.getElementById("restart").style.display = "inline-block"; 
                for (let i = 0; i < numbers.length; i++) {
                    document.getElementById(numbers[i]).disabled = true; // Disable all buttons
                }
            }
        }
    });
}

// Generate a random number for the user to guess
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize guess counter to 7
let guessCounter = 7;
document.getElementById("guesses").innerHTML = " " + guessCounter;

// Add click event listener to restart button
document.getElementById("restart").addEventListener("click", function() {
    // Reload the page to start a new game
    location.reload();
});
