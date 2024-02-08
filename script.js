const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector("#reset");
const newBoardButton = document.querySelector("#new-board");
const colorSelector = document.querySelector("input");
let brush = "black";
let boardSize = 16;
let index = 0;
let rainbow = [
  "#ef3550",
  "#f48fb1",
  "#7e57c2",
  "#2196f3",
  "#26c6da",
  "#43a047",
  "#eeff41",
  "#f9a825",
  "#ff5722",
];

//Creates a grid with boardSize rows and columns.
function createBoard(boardSize) {
  for (let i = 0; i < boardSize ** 2; i++) {
    const gridItemAdd = document.createElement("div");
    gridItemAdd.classList.add("grid-item");
    gridContainer.appendChild(gridItemAdd);
    gridItemAdd.style.width = `calc(100% / ${boardSize})`;
    gridItemAdd.style.height = `calc(100% / ${boardSize})`;
  }
  const gridItens = document.querySelectorAll(".grid-item");
  gridItens.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      if (colorSelector.checked) {
        gridItem.style.opacity = 1;
        gridItem.style.backgroundColor = rainbow[index];
        index++;
        if (index === 9) {
          index = 0;
        }
      } else {
        if (
          gridItem.style.backgroundColor !== "white" &&
          gridItem.style.backgroundColor !== "black"
        ) {
          gridItem.style.opacity = 0;
        }
        gridItem.style.backgroundColor = "black";
        gridItem.style.opacity = parseFloat(gridItem.style.opacity || 0) + 0.2;
      }
    });
  });
}

//Reset all items color to white.
function resetBoard() {
  const gridItens = document.querySelectorAll(".grid-item");
  gridItens.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
}

//Creates a new board with the user input number of rows.
function newBoard() {
  let answer = prompt("Quantas linhas? (Máx 100)");
  if (answer) {
    while (isNaN(answer) || answer < 1 || answer > 100) {
      answer = prompt("Por favor, digite um número de 1 a 100.");
    }
    boardSize = answer;
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    createBoard(boardSize);
    const gridItens = document.querySelectorAll(".grid-item");
    gridItens.forEach((gridItem) => {
      gridItem.style.backgroundColor = "white";
    });
  }
}

createBoard(boardSize);
resetButton.addEventListener("click", resetBoard);
newBoardButton.addEventListener("click", newBoard);
