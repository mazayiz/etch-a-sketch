const gridContainer = document.querySelector("#container");
let gridSize = 16;
let oldGridSize = gridSize;
gridCreate();

function gridCreate () {
    const boxSize = 960/gridSize + "px";
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridSquare");
            gridDiv.style.flex = "1 1 auto";
            gridDiv.style.width = boxSize;
            gridDiv.style.height = boxSize;
            gridContainer.appendChild(gridDiv);
        }
    }
    oldGridSize = gridSize*gridSize;
    markGridEventListener();
}

function markGridEventListener () {
        const markGrid = document.querySelectorAll(".gridSquare");
        markGrid.forEach(gridSquare => {
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "#008080";
        });
    })
}

const newGridButton = document.querySelector("button")
newGridButton.addEventListener("click", () => {
    gridSize = prompt("Choose a square grid size (max 100x100)") 
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please input a number from 1-100")
    } else {
        for (i = 0; i < oldGridSize; i++) {
            gridContainer.removeChild(gridContainer.children[0]);
        }
        gridCreate();
    }
});