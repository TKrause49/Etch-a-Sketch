const container = document.querySelector('#container');


function makeSquares (x) {
    for (let i = 0; i < (x*x); i++){
        const square = document.createElement('div');
        const size = (100/x);
        square.classList.add('square');
        square.style.width = `${size}%`
        square.style.height = `${size}%`
        container.appendChild(square);
    }
}

// let x = 16;
// let size = (100/x);

// for (let i = 0; i < (x*x); i++) {
//     makeSquares();
// }

makeSquares(16);