const cellElements = document.querySelectorAll('[data-cell]');
const restartBtn = document.querySelector(".btnRestart");
const Board = document.querySelector(".TicTac");
const winLane = document.createElement('div');
console.log(cellElements)
var turn = false;
var gameOver = false;
var placesX = [];
var placesO = [];
let counter = 0;
let moves = 0;
let g = 0;
let remove = false;

const Combinations = [
   [1,2,3],
   [4,5,6],
   [7,8,9],
   [1,5,9],
   [3,5,7],
   [1,4,7],
   [2,5,8],
   [3,6,9]

]


restartBtn.addEventListener("click", function(){
    restartGame();
})

cellElements.forEach(cell =>{
    cell.addEventListener('click', updateCell, {once: true});
    
})


function updateCell(e){
   const cell = e.target;
   var i = Number(cell.id);
  



   if (turn === false){
    cell.classList.add("x");
    placesX.push(i);
    console.log("X = " + placesX);
   }else{
    cell.classList.add("o");
    placesO.push(i);
    console.log("O = " + placesO);
   }
  
   checkWin();
   switchSide();
   PostGame();
   
  
}

function switchSide(){
    if (turn === true){
        turn = false;
    }else{
        turn = true;
    }
   
   moves++;
}


function checkWin(){
  for (i = 0; i < Combinations.length; i++) {
    const [a,b,c] = Combinations[i];

    if (placesX.includes(a) && placesX.includes(b) && placesX.includes(c) 
    || placesO.includes(a) && placesO.includes(b) && placesO.includes(c)
    ){
       gameOver = true;
       if (a === 1 && b === 2 && c === 3){
        
        winLane.style.animation = "growTopLeft 1s ease-out";
        winLane.style.transform = "translate(-50%, -85%) rotate(90deg)";
       }

       if (a === 4 && b === 5 && c === 6){
        
        winLane.style.animation = "growMidLeft 1s ease-out";
        winLane.style.transform = "translate(-50%, -50%) rotate(90deg)";
        break;
        }

        if (a === 7 && b === 8 && c === 9){
            winLane.style.animation = "growBotLeft 1s ease-out";
            winLane.style.transform = "translate(-50%, -13%) rotate(90deg)";
        }

        if (a === 1 && b === 4 && c === 7){
            winLane.style.animation = "growLeftTop 1s ease-out";
            winLane.style.transform = "translate(-730%, -50%) rotate(0deg)";
        }
         
        if (a === 2 && b === 5 && c === 8){
            winLane.style.animation = "grow 1s ease-out";
            winLane.style.transform = "translate(-50%, -50%) rotate(0deg)";
        }

        if (a === 3 && b === 6 && c === 9){
            winLane.style.animation = "growRightTop 1s ease-out";
            winLane.style.transform = "translate(630%, -50%) rotate(0deg)";
        }

        if (a === 3 && b === 5 && c === 7){
            winLane.style.animation = "grow1 1s ease-out";
            winLane.style.transform = "translate(-50%, -50%) rotate(45deg)";
            
        }

        if (a === 1 && b === 5 && c === 9){
            winLane.style.animation = "grow2 1s ease-out";
            winLane.style.transform = "translate(-50%, -50%) rotate(-45deg)";
        }

    }
     
  

   
  


    if (moves > 7){
        document.getElementById("winMessage").style.display = "block";
        document.getElementById("winner").innerHTML = "Draw!!";
    }

  }
}

function PostGame(){

    // Win Lanes
    if (gameOver === true){
    winLane.classList.add("winLane");
    remove = true;
    Board.appendChild(winLane);
    
   }

   

   // Win Message
   if (gameOver === true && turn === true){
       document.getElementById("winMessage").style.display = "block";
       document.getElementById("winner").innerHTML = "Player X Win!!";
   }
   if (gameOver === true && turn === false){
    document.getElementById("winMessage").style.display = "block";
    document.getElementById("winner").innerHTML = "Player O Win!!";
   }
}

function restartGame(){
    turn = false;
    gameOver = false;
    placesX = [];
    placesO = [];
    document.getElementById("winMessage").style.display = "none";
    counter = 0;
    moves = 0;
    if (remove === true){
        Board.removeChild(winLane);
        remove = false;
    }
    
    for (const cell of cellElements){
        cell.classList.remove("x");
        cell.classList.remove("o");
        
    }
    cellElements.forEach(cell =>{
        cell.addEventListener('click', updateCell, {once: true});
        
    })
 

}
