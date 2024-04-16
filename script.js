// generate random color
function generateCell(size = 16) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        fragment.appendChild(div);
    }

    const gridTemplateColumns = `grid-template-columns: repeat(${size}, 1fr);`;
    const gridTemplateRows = `grid-template-rows: repeat(${size}, 1fr);`;

    const gridContainerElement = document.querySelector(".grid-area-inner");

    gridContainerElement.innerHTML = "";
    gridContainerElement.style.cssText = gridTemplateColumns + gridTemplateRows;

    gridContainerElement.appendChild(fragment);
}

//  generate random color
function generateRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `${red}, ${green}, ${blue}`;
}

// add event listener to cells
function addEventHandlerToCell() {
    const cellElements = document.querySelectorAll(".cell");

    cellElements.forEach((cell) => {
        cell.addEventListener("mouseenter", (e) => {
            e.stopPropagation();
            const rgb = generateRandomColor();
            cell.style.cssText = `border: none; background-color: rgb(${rgb});`;
        });
    });
}

// change grid size
function changeGridSize() {
    const size = parseInt(prompt("Enter grid size (min: 10 and max: 50) :"));
    if (!isNaN(size) && size >= 10 && size <= 50) {
        generateCell(size);
        addEventHandlerToCell();
    }
}

// main
(() => {
    generateCell();
    addEventHandlerToCell();

    const changeSizeBtn = document.querySelector("#btn-change-grid-size");

    changeSizeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        changeGridSize();
    });
})();
