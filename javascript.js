function buildGrid(size) {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
buildGrid(10);


let isDrawing = false;
let isColor = true;
let isRainbow = false;
let isEraser = false;
const color = document.querySelector("#toggle :nth-child(2)");
color.addEventListener("click", () => {
    isColor = true;
    isRainbow = false;
    isEraser = false;
});

const rainbow = document.querySelector("#toggle :nth-child(3)");
rainbow.addEventListener("click", () => {
    isColor = false;
    isRainbow = true;
    isEraser = false;
});

const eraser = document.querySelector("#toggle :nth-child(4)");
eraser.addEventListener("click", () => {
    isColor = false;
    isRainbow = false;
    isEraser = true;
});

const clear = document.querySelector("#toggle :nth-child(5)");
clear.addEventListener("click", () => {
    grid.forEach((cell) => {
        cell.style.backgroundColor = "#FFFFFF";
    });
});

const noborder = document.querySelector("#toggle :nth-child(6)");
noborder.addEventListener("click", () => {
    grid.forEach((cell) => {
        cell.style.border = "none";
    })
})
const selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
        const checked = document.querySelector(".checked");
        checked.classList.remove("checked");
        selector.classList.add("checked");
    } )
});


const circle = document.querySelector("#color");
const grid = document.querySelectorAll(".cell");
grid.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        if (isColor) {
            cell.style.backgroundColor = circle.value;
        } else if (isRainbow) {
            cell.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        } else {
            cell.style.backgroundColor = "#FFFFF";
        }
    });
    cell.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            if (isColor) {
                cell.style.backgroundColor = circle.value;
            } else if (isRainbow) {
                cell.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            } else {
                cell.style.backgroundColor = "#FFFFFF";
            }
        }
    });
});



