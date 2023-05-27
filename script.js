const container = document.getElementsByClassName("container");
const cells = document.querySelectorAll(".cell");
const result = document.getElementsByClassName("result");
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
cells.forEach(cell => cell.addEventListener('click', clickedCell));
function clickedCell(e) {
  target = e.target;
  target.removeEventListener('click', clickedCell);
  target.innerHTML = playerTurn;
  checkWin();
  playerTurn = (playerTurn === "X") ? "O" : "X";
}
function checkWin() {
  for (let i = 0; i < winningSituations.length; i++) {
    const [a, b, c] = winningSituations[i];
    if (
      cells[a].innerHTML === playerTurn &&
      cells[b].innerHTML === playerTurn &&
      cells[c].innerHTML === playerTurn
    ) {
      console.log("Player " + playerTurn + " wins!");
      result[0].innerHTML = "Player " + playerTurn + " won ";
      result[0].style.display = "flex";
      cells.forEach(cell => cell.removeEventListener('click', clickedCell));
    }
  }
}
