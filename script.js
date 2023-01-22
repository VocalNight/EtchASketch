const container = document.querySelector('.container');


for (let i = 0; i < 16 * 16; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('test');
    gridElement.addEventListener('mouseover', changeColor)
    container.appendChild(gridElement);
}


function changeColor(event) {
    event.target.setAttribute('style', 'color: blue; background: grey');
}
