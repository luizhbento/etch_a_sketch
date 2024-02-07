//Creates a grid with rowQuantity rows and columns.
const createBoard = (rowQuantity) => {
  for (let i = 0; i < rowQuantity ** 2; i++) {
    const gridItemAdd = document.createElement("div");
    gridItemAdd.classList.add("grid-item");
    gridContainer.appendChild(gridItemAdd);
    gridItemAdd.style.width = `calc(100% / ${rowQuantity})`;
    gridItemAdd.style.height = `calc(100% / ${rowQuantity})`;
  }
  const gridItens = document.querySelectorAll(".grid-item");
  gridItens.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = "gray";
    });
  });
};

const gridContainer = document.querySelector(".grid-container");
createBoard(16);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  const gridItens = document.querySelectorAll(".grid-item");
  gridItens.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
});

const newBoardButton = document.querySelector("#new-board");
newBoardButton.addEventListener("click", () => {
  let newRowQuantity = prompt("Quantas linhas? (Máx 100)");
  while (isNaN(newRowQuantity) || newRowQuantity < 1 || newRowQuantity > 100) {
    newRowQuantity = prompt("Por favor, digite um número de 1 a 100.");
  }
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createBoard(newRowQuantity);
  gridItens.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
});
