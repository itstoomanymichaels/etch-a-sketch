DEFAULT_MODE = "color";
DEFAULT_SIZE = 10;
DEFAULT_COLOR = "#303030";

let current_mode = DEFAULT_MODE;
let current_size = DEFAULT_SIZE;
let current_color = DEFAULT_COLOR;

function setCurrentMode(newMode) {
    activate(newMode);
    current_mode = newMode;
}

function setCurrentSize(newSize) {
    current_size = newSize;
}

function setCurrentColor(newColor) {
    current_color = newColor;
}


const circle = document.getElementById("color");
const color = document.getElementById("color-button");
const rainbow = document.getElementById("rnbw-button");
const erase = document.getElementById("ersr-button");
const clear = document.getElementById("clr-button");
const border = document.getElementById("brdr-button");
const grid = document.getElementById("grid");
const sizeValue = document.getElementById("grid-size");
const size = document.getElementById("size");

circle.oninput = (e) => setCurrentColor(e.target.value);
color.onclick = () => setCurrentMode("color");
rainbow.onclick = () => setCurrentMode("rainbow");
erase.onclick = () => setCurrentMode("erase");
clear.onclick = () => rldGrid();
border.onclick = () => removeBorder();
sizeValue.onchange = (e) => changeSize(e.target.value);
sizeValue.onmousemove = (e) => updateSizeValue(e.target.value);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    rldGrid();
}

function updateSizeValue(newSize) {
    size.innerHTML = `${newSize} x ${newSize}`;
}

function rldGrid() {
    clrGrid();
    setupGrid(current_size);
}

function clrGrid() {
    grid.innerHTML = (" ");
}

function removeBorder() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.toggle("noborder");
    })
}

function setupGrid(newSize) {
    grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

    for (let i = 0; i < newSize * newSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mousedown", changeColor);
        cell.addEventListener("mouseover", changeColor);
        grid.appendChild(cell);
    }
}

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}
function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (current_mode === "rainbow") {
        e.target.style.backgroundColor = `#${randomColor = Math.floor(Math.random()*16777215).toString(16)}`;
    } else if (current_mode === "color") {
        e.target.style.backgroundColor = current_color;
    } else if (current_mode === "erase") {
        e.target.style.backgroundColor = "#FFFFFF";
    }
}

function activate(newMode) {
    if (newMode === "color") {
        color.classList.add("checked");
        rainbow.classList.remove("checked");
        erase.classList.remove("checked");
    } else if (newMode === "rainbow") {
        rainbow.classList.add("checked");
        color.classList.remove("checked");
        erase.classList.remove("checked");
    } else if (newMode === "erase") {
        erase.classList.add("checked");
        color.classList.remove("checked");
        rainbow.classList.remove("checked");
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    activate(DEFAULT_MODE);
}



