const gridContainer = document.querySelector("#container");

for (let i = 0; i < 16; i++){
    for (let i = 0; i < 16; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridSquare");
        gridContainer.appendChild(gridDiv);
    }
}

const markGrid = document.querySelectorAll(".gridSquare");

for (let i = 0; i < markGrid.length; i++) {
    markGrid[i].addEventListener("click", () => {
        console.log("Fucking Success");
      });
}