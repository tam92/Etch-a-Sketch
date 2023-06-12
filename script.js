
let container = document.getElementById('container');

const btn = document.createElement('button');
btn.textContent = "New grid!";
btn.classList.add('button');
btn.addEventListener('click', (e) => {
    let sideSquares;
    
    do {
        sideSquares = prompt("How many squares per side do you want? (max is 100)");
    } while (isNaN(parseInt(sideSquares)) || parseInt(sideSquares) > 100);

    console.log(sideSquares);
    createGrid(sideSquares);
});

document.getElementsByTagName('body')[0].prepend(btn);

// Create 16x16 divs (256)

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    const hoveredSquare = 
    newDiv.addEventListener('mouseover', (e) => {
        newDiv.style.backgroundColor = generateRandomRGB();
    } );
    container.appendChild(newDiv);
}

function createGrid(sideSquares) {
    let children = document.getElementById('container');
    // removes the previous grid from container
    while (children.firstChild) {
        container.removeChild(container.firstChild);
    }
960 % sideSquares
    let total = sideSquares * sideSquares;
    // new grid
    for (let i = 0; i < total; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.style.flexBasis = `${960/sideSquares}px`;
        const hoveredSquare = 
        newDiv.addEventListener('mouseover', (e) => {
            newDiv.style.backgroundColor = generateRandomRGB();
        } );
        container.appendChild(newDiv);
    }
}

function generateRandomRGB() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}