let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let keremLbl = document.getElementById("next-lbl");
keremLbl.innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i=0; i<9; i++)
    {
        let button = document.createElement('button');
        button.innerHTML = "[ ]";

        let buttonElement = document.getElementById("c" + (i + 1));

        buttonElement.appendChild(button);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */    
    event.target.innerHTML = nextPlayer;
    nextPlayer === "X" 
        ? nextPlayer = "O" 
        : nextPlayer = "X";

    
        // Make sure the button is clickable only once (I didn't mention how to do that, look it up 🙂 )
    event.target.disabled = true;
    document.getElementById("next-lbl").innerHTML = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.getElementById("game-over-lbl");
        gameOver.innerHTML = "<h1> GAME OVER </h1>";
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 

}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let counter = 0;

    let btns = document.querySelectorAll('button');
    for (let i=0; i<btns.length; i++)
    
    {
        if (btns[i].disabled === true) {
            counter++;
        }
    }
    
    if (counter === 9) { return true }
    
    return false
}