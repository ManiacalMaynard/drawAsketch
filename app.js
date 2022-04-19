// Ignore this console.log because, um, nothing to see here
console.log("ignore the man behind the curtain");

// Sets the value of the etch box element
const container = document.getElementById('etchBox');

// Sets the grid size according to the value of the range slider
let gridSize = document.getElementById('ranger').value;

// Sets the baseline color for drawing
let drawColor = "hsl(200, 80%, 50%)";

function changeColor(event) {
    event.target.style.backgroundColor = drawColor;
};

// Okay, let's create the grid, add mouseover and classname
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i=0; i < (rows * cols); i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", changeColor);
        container.appendChild(box).className = "gridbox";
    };
    document.getElementById('rangerValue').innerText = gridSize;

};

// Evoke the grid maker!
makeGrid(gridSize, gridSize);

// Reset function to clear the current div background color and redraw the grid to the new ranger selected size
let boxes = document.querySelectorAll('.gridbox');
function resetGrid() {
    boxes.forEach(element => {
        element.style.backgroundColor = "#CCC";
    });
    gridSize = document.getElementById('ranger').value;
    makeGrid(gridSize, gridSize);
};

