let numGrid = 16;

const container = document.querySelector('.container');

const layoutButton = document.querySelector('.layoutSize');

layoutButton.addEventListener('click', () => {
    let size = prompt('Type the size of the grid here')
    generateGrid(size);
})

function generateGrid(num) {

    container.innerHTML = '';
    for (let i = 0; i < num * num; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('test');
        gridElement.addEventListener('mouseover', changeColor)
        container.appendChild(gridElement);
    }
}

function changeColor(event) {
    event.target.setAttribute('style', 'color: blue; background: grey');
}

generateGrid(numGrid);
