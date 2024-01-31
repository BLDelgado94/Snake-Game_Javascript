// Define HTML elements
const board = document.getElementById('game-board');

// Define game variables
const gridSize = 20;
let snake = [{x:10, y:10}]; //where the snake will start in the game board
let food = generateFood();
let direction = 'right'

// Draw game map, snake, food - resets the board
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

// Draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
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
    element.style.gridRow = position.y;
}

// Testing draw function
draw();

// Draw food function
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

// Generate food randomly
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y}
}

// Moving the snake
function move() {
    const head = { ...snake[0]}; //copy of the snake array
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head); // adds head object to the beginning of copy of snake array
    snake.pop(); // gives illusion of movement by removing the last object
}

// Test moving
setInterval(() => {
    move(); // Move first
    draw(); // Then draw again new position
}, 200)