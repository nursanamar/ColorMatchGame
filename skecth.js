
var scl = 40;
var gameBoard;

function setup() {
    createCanvas(800,600)
    let col = 16;
    let row = 11;
    gameBoard = new GameBoard(80,80,10,15,40);
    gameBoard.show();

    let button = createButton("Start");
    button.position(width / 4,520)
    button.class('button');
    button.mousePressed(() => {
        gameBoard.hide();
    })
}

function draw() {
    background(0);
    textSize(32);
    fill(255);
    text('Score: '+gameBoard.point, width / 4 * 2, 520);
    gameBoard.update();
    gameBoard.draw()
    if (mouseIsPressed){
        gameBoard.tileClick();
    }
}