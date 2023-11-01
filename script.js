const container = document.querySelector('#container');
const button = document.querySelector('button');

function makeSquares (x) {
    for (let i = 0; i < (x*x); i++){
        const square = document.createElement('div');
        const size = (100/x);
        square.classList.add('square');
        square.style.width = `${size}%`;
        square.style.height = `${size}%`;
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'green';
        })
    };
};

makeSquares(16);

button.addEventListener('click', () => {
    const size = prompt('Choose your size:');
    if (size >= 100 || size <= 0){
        return alert('Please choose a number greater than 0 or less than 100');
    }
    while (container.firstChild){
        container.removeChild(container.firstChild)
    };
    makeSquares(size);
});