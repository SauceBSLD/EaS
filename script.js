function createGrid(gridSize) {
    eraseGrid();
    const grid = document.createElement('div');
    grid.classList.toggle('grid');
    for (let i = 0; i < gridSize; ++i) {
    const column = document.createElement('div'); // create column
    column.classList.toggle('column');
    for (let j = 0; j < gridSize; ++j) {
        const row = document.createElement('div'); // create row
        row.classList.toggle('row')
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);

    const rowSelector = document.querySelectorAll('.row');
    const usePen = document.querySelector('.pen');
    const useEraser = document.querySelector('.eraser');

    usePen.addEventListener('click', () => {
        rowSelector.forEach(row => {
            row.addEventListener('click', () => {
                rowSelector.forEach(row => {
                    row.addEventListener('mouseover', () => {
                        row.classList.toggle('hoverPen');
                    });
                });
            });
        });
    });
    useEraser.addEventListener('click', () => {
        rowSelector.forEach(row => {
            row.addEventListener('click', () => {
                rowSelector.forEach(row => {
                    row.addEventListener('mouseover', () => {
                        row.classList.remove('hoverPen');
                    });
                });
            });
        });
    });
}

function eraseGrid() {
    const erase = document.querySelectorAll('.grid');
    erase.forEach(grid => {
        grid.remove();
    });
}

const button = document.querySelector('.setGrid');
button.addEventListener('click', () => {
    gridSize = parseInt(prompt("Choose the size of the grid (max: 50)", ""));
    if (isNaN(gridSize) || gridSize > 50) {
        alert("Please enter valid numbers");
        gridSize = 0;
    }
    createGrid(gridSize);
});

const erase = document.querySelector('.eraseGrid');
erase.addEventListener('click', () => {
    eraseGrid();
});