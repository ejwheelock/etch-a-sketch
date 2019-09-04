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
    let color = randomColor();
    e.target.style.backgroundColor = color;
}

function randomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let colorStr = `rgb(${red}, ${green}, ${blue})`;
    return colorStr;
}

createGrid(16);

let newGridButton = document.querySelector('button');
newGridButton.addEventListener("click", promptForSize);



