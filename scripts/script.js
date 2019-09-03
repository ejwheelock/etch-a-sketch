console.log('Welcome to your Etch-a-Sketch!');


function createGrid(side) {
    let con = document.querySelector('#palette');
    while (con.hasChildNodes()) {
        con.removeChild(con.lastChild);
    }
    
    for (let i=0; i<side; i++) {
        for (let j=0; j<side; j++) {
            let grid = document.createElement('div');
            grid.classList.add('square');
            grid.style.gridColumnStart = `"${i+1}"`;
            grid.style.gridColumnEnd = `"${i+2}"`;
            grid.style.gridRowStart = `"${j+1}`;
            grid.style.gridRowEnd = `"${j+2}"`;
            grid.addEventListener("mouseenter",changeColor);
            con.appendChild(grid);
        }
    }

    let gridTemplateCols = "";
    for (let k=0; k<side; k++) {
        gridTemplateCols += "auto ";
    }
    con.style.gridTemplateColumns = gridTemplateCols;
}

function promptForSize() {
    let num = prompt("How large a grid number, N, where grid is NxN?");
    num = parseInt(num);
    createGrid(num);
}

function changeColor(e) {
    e.target.classList.add('colored');
}

createGrid(16);

let clearButton = document.querySelector('button');
clearButton.addEventListener("click", promptForSize);



