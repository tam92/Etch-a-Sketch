
let container = document.getElementById('container');

// Create 16x16 divs (256)

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
}