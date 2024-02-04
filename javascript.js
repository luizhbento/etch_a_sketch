const gridContainer = document.querySelector(".grid-container");

//Creating 16 grid items.
for (let i = 0; i < 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}
