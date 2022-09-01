function buildGrid(size) {
    const grid = document.querySelector(".grid");
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
const circle = document.querySelector("#color");
const grid = document.querySelectorAll(".cell");
grid.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        cell.style.backgroundColor = circle.value;
    });
    cell.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = circle.value;
        }
    });
});

const selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
        const checked = document.querySelector(".checked");
        checked.classList.remove("checked");
        selector.classList.add("checked");
    } )
})


