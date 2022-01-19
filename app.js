// Ignore this console.log because, um, nothing to see here
console.log("ignore the man behind the curtain");

// Need to set a variable start point for the grid size slider deal
let gridSize = 100;

const container = document.getElementById('etchBox');

function changeColor(event) {
    event.target.style.backgroundColor = "#000";
};

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i=0; i < (rows * cols); i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", changeColor);
        container.appendChild(box).className = "gridbox";
    };
};

makeGrid(gridSize, gridSize);

let boxes = document.querySelectorAll('.gridbox');
function resetGrid() {
    console.log("reset");
    boxes.forEach(element => {
        element.style.backgroundColor = "#CCC";
    });
};
