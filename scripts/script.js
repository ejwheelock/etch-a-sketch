console.log('Hello, world!')

let container = document.querySelector('div#palette');

for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        let grid = document.createElement('div');
        grid.classList.add('square');
        grid.style.gridColumnStart = `"${i+1}"`;
        grid.style.gridColumnEnd = `"${i+2}"`;
        grid.style.gridRowStart = `"${j+1}`;
        grid.style.gridRowEnd = `"${j+2}"`;
        container.appendChild(grid);
    }
}

