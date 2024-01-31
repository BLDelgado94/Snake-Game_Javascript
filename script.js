// Define HTML elements
const board = document.getElementById('game-board');

// Define game variables
let snake = [{x:10, y:10}]; //where the snake will start in the game board

// Draw game map, snake, food - resets the board
function draw() {
    board.innerHTML = '';
    drawSnake();
}

// Draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        SVGTextPositioningElement(snakeElement, segment);
    });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Set position of the snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
}