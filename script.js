 
// Select the container element in which you want to insert the buttons
const buttonContainer = document.getElementById("button-container");
 
for (let i =1; i<= 100; i++){ 
  const button = document.createElement("button");
   
    button.innerHTML= Math.floor(Math.random()*100)+1;
 
  button.className = "round-button"; 
  buttonContainer.appendChild(button);

 }
   



// for (let i = 0; i < myButtons.length; i++) {

//   button.onclick = myButtons[i].onclick;
// }

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100);
  
    return randomNumber + 1;
  }
  // Get a reference to the HTML element you want to set the value of

// Generate a random number and set the value of the HTML element to it
button.innerText = generateRandomNumber();

  

{/* <div id="random-number"></div>

<script>
  const randomElement = document.getElementById("random-number");
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  randomElement.textContent = randomNumber;
</script>
 */}





// const buttonDiv = document.getElementsByClassName('button-wrapper');

// const buttonBtn = document.createElement("button");

// buttonBtn.innerText = "One 1";
// buttonBtn.className = "round-button";

// buttonDiv.appendChild(buttonBtn);
// How do you insert multiple buttons in an html document using js

// How do you insert numbers in a button in an html document using js

// function getNum (){
    // let space = [];

    // for(let i = 1; i < 101; i++){
        // space.push(i);
    // } 3, 539, 000

//     for (let i = 0; i < space.length; i++){
//         const myButton = document.createElement('button');
//             myButton.innerText = space[i];
//         document.querySelector('.button-wrapper').appendChild(button);
//     }

    // const numbersDiv = document.querySelector('.button-wrapper');
    // const randomNumbers = Array.from({length: numButtons}, () => Math.floor(Math.random() * 100));

    // for (let i = 1; i <= 100; i++) {
    // const numberSpan = document.createElement('button');
    // numberSpan.innerHTML = i;
    // numbersDiv.appendChild(numberSpan);
// }
// }







// let keyboard = document.getElementsByClassName('button-wrapper');
// let buttons = keyboard.getElementsByClassName('round-button');

// {
//     let theClickedItem = buttons[i].addEventListener('click', displayFn)
// }

// function displayFn(e){
//     if (e.target.innerText === 7){
//         confirm('Congratulations', 'play again ?');
//     } 
// }