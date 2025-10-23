const boxes = document.querySelectorAll(".box");
const resetButton =document.querySelector(".reset-button");
const newGame =document.querySelector(".new-game-button");
const showGame = document.querySelector(".boxes-container");
const winnerMsg = document.querySelector(".winner-anouncement")
const msg= document.querySelector(".msg")
const gameContainer = document.querySelector(".game-container");

let turnOfO = true  //playerO, playerXs
let count = 0;


//checking the winnig patterns of the game
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.disabled) return;
        
        // Add animation class
        box.classList.add("played");
        
        if (turnOfO) {
            box.classList.add("colorOfO");
            box.innerText = "O";
            turnOfO = false;
        } else {
            box.classList.remove("colorOfO");
            box.innerText = "X";
            turnOfO = true;
        }
        
        box.disabled = true;
        count++;
        checkWinner();
    });
});


const checkWinner = () =>{
    for (let pattern of winningPattern) {
            let pos1v = boxes[pattern[0]].innerText;
            let pos2v= boxes[pattern[1]].innerText;
            let pos3v = boxes[pattern[2]].innerText;
    
            if (pos1v != "" && pos2v != "" && pos3v != ""){

                if (pos1v === pos2v && pos2v === pos3v){
                    showWinner(pos1v);
                    return;
                }
            } 
        }
    
        
if (count === 9){
    drawGame();
}
};


const showWinner = (winner) =>{
      msg.innerText = `🎉 Congratulations Winner is player ${winner} 🎉`;
      winnerMsg.classList.remove('hide');
      gameContainer.classList.add('hide');
      disableBoxes();
};

const drawGame = () =>{
        msg.innerText = "The game is Drawn!";
        winnerMsg.classList.remove('hide');
         gameContainer.classList.add('hide');
        disableBoxes();
};

const resetGame = () =>{
    turnOfO = true;
    count = 0;
    enableBoxes();
    winnerMsg.classList.add('hide');
    gameContainer.classList.remove('hide');



   
}
const  enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};

const disableBoxes = () =>{
    for (let box of boxes ){
        box.disabled = true;
    }
}



resetButton.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)