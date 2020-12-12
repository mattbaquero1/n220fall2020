//define constants
const controls = {
    
    //set myButton to null
    myButton : null,
    //set myButton2 to null
    myButton2: null,
    //set myButton3 to null
    myButton3: null,
    //set divoutput to null
    divoutput: null,

};

//start function main which will be called when the page loads
function main() {
    //creates div textboxes
    controls.divoutput = createElement("div", "absolute", 10, 10,700, 20);
    controls.divoutput.style.backgroundColor = "red";
    controls.divoutput.innerHTML ="Computer Selection"
    document.body.appendChild(controls.divoutput);

    //creates div textboxes
    controls.divoutput2 = createElement("div", "absolute", 10, 35,700, 20);
    controls.divoutput2.style.backgroundColor = "#2d77ed";
    controls.divoutput2.innerHTML ="Results"
    document.body.appendChild(controls.divoutput2);

    //creates div textboxes
    controls.divoutput3 = createElement("div", "absolute", 10, 60,700, 20);
    controls.divoutput3.style.backgroundColor = "orange";
    controls.divoutput3.innerHTML ="Scores"
    document.body.appendChild(controls.divoutput3);

    controls.divoutput4 = createElement("div", "absolute", 10, 85, 700, 20);
    controls.divoutput4.innerHTML = "Pick your wepon!!"
    document.body.appendChild(controls.divoutput4);


    //call create element function to create button
    controls.myButton = createElement("button", "absolute", 10, 110, 70, 20)
    //write rock on the button
    controls.myButton.innerHTML = "Rock";
    //set attribute
    controls.myButton.setAttribute("data-button", "rock");
    //add the click listener
    document.body.appendChild(controls.myButton);
    

    //call create element function to create button
    controls.myButton2 = createElement("button","absolute", 90, 110, 70, 20)
    //write paper in the button
    controls.myButton2.innerHTML = "Paper";
    //set attribute
    controls.myButton2.setAttribute("data-button", "paper");
    //add the click listener
    document.body.appendChild(controls.myButton2);
    

    //call create element function to create button
    controls.myButton3 = createElement("button", "absolute", 170, 110, 70, 20);
    //write scissors on the button
    controls.myButton3.innerHTML = "Scissors"; 
    //set attribute
    controls.myButton3.setAttribute("data-button", "scissors");
    //add the click listener
    document.body.appendChild(controls.myButton3);


    
    //add click listener and call the change color function
    controls.myButton.addEventListener("click",game);
    //add click listener and call the change color function
    controls.myButton2.addEventListener("click",game);
    //add click listener and call the change color function
    controls.myButton3.addEventListener("click",game);


}

//options for computer selection
const options = ['Paper', 'Rock', 'Scissors'];

// set computer score to 0
let computerScore = 0;
// set computer score to 0
let playerScore = 0;

// create function for computer selection
function computerPlay() {

    //random for computer selection
    let randomNum = Math.floor(Math.random() * 3);
    //make computer choice to random
    let computerChoice = options[randomNum];
    //return computer selection
    return computerChoice;
}

//function to calculate rounds
function playRound(playerSelection, computerSelection) {
    
    //if player selection is rock and computer selection is scissors add to player
    if (playerSelection == 'rock' && computerSelection == 'Scissors') { 
        playerScore++;
        //if player selection is rock and computer selection is paper add to computer
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        //if player selection is paper and computer selection is scissors add to computer
        return `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        //if player selection is paper and computer selection is paper add to player
        return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        //if player selection is scissors and computer selection is rock add to computer
        return `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerScore++;
        return `You Lose! Rocks beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        //if player selection is scissors and computer selection is paper add to player
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`;
    } else 
        //else return draw
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
}

//function of the game
function game(event) {
        // create a variable to call the attribute
        let playerSelection = event.target.getAttribute("data-button")
        //call the computer play function
        const computerSelection = computerPlay();
        //refresh the divoutput
        controls.divoutput.innerHTML="";
        //refresh divoutput2
        controls.divoutput2.innerHTML="";
        //refresh divoutput3
        controls.divoutput3.innerHTML="";
        compDivOutput(computerSelection);
        result(playRound(playerSelection, computerSelection));
        //if player score is greater than computerScore
    if (playerScore > computerScore) {
        score(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
        //if player is less than computer score 
    } else if (computerScore > playerScore) {
        //display final score
        score(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        score(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}



//function to create button
function createElement(elementType, position, left, top, width, height){
    // let user input the element type
    let newElement = document.createElement(elementType);
    //position of button
    newElement.style.position = position;
    //left position
    newElement.style.left = left + "px";
    //button from top
    newElement.style.top = top + "px";
    //width of button
    newElement.style.width = width + "px";
    //height of button
    newElement.style.height = height + "px";
    //return element
    return newElement;
}


//create function to display the selection
function compDivOutput(msg){
    //this shows the selection of the computer
    controls.divoutput.innerHTML += msg + "<br>";

}

//create function to display the results the result of the current game
function result(msg){
    //to display the results the result of the current game
    controls.divoutput2.innerHTML += msg +"<br>";
}

//create funtion
function score(msg){
    //to display the score game
    controls.divoutput3.innerHTML += msg +"<br>";
}