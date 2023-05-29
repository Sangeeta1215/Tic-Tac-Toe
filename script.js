
const container = document.getElementsByClassName("container");
const cells = document.querySelectorAll(".cell");
const result = document.getElementsByClassName("result");
const btn=document.getElementsByClassName("btn");
const winningSituations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var target;
var playerTurn = "X";
var moves;

game();
function game(){
  moves=0;
  console.log("new game")
cells.forEach(cell => cell.innerHTML="");
result[0].style.display="none";
cells.forEach(cell => cell.addEventListener('click', clickedCell));
function clickedCell(e) {
  target = e.target;
  target.removeEventListener('click', clickedCell);
  target.innerHTML = playerTurn;
  moves++;
  checkWin();
  if (!checkWin() && moves === 9) {
    result[0].innerHTML = "Oops, it's a draw! Play again.";
    result[0].style.display = "flex";
    btn[0].style.display="block";
  }
  if(checkWin())
  {
    result[0].innerHTML = "Player " + playerTurn + " won!";
    result[0].style.display = "flex";
    console.log(result[0])
    cells.forEach(cell => cell.removeEventListener('click',clickedCell));
    btn[0].style.display="block";
  }
  playerTurn = (playerTurn === "X") ? "O" : "X";
}
}

function checkWin() {
  for (let i = 0; i < winningSituations.length; i++) {
    const [a, b, c] = winningSituations[i];
    if (
      cells[a].innerHTML === playerTurn &&
      cells[b].innerHTML === playerTurn &&
      cells[c].innerHTML === playerTurn
    ) {
      return true;
    }
  }
  return false;
}
btn[0].addEventListener("click",(e)=>
{
game();
})