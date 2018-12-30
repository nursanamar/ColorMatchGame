
var gameBoard;
var imgs = [];
var score = 0;
var nextBtn;
var restartBtn;


var jumlahGambar = 7;
var row = 9;
var col = 14;
var time = 330;

function preload() {
    for (let i = 1; i <= jumlahGambar; i++) {
        let img = loadImage('img/' + i + ".jpeg");
        imgs.push(img);
    }
}


function setup() {
    createCanvas(800,600)

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].resize(40,0);
    }

    gameBoard = new GameBoard(80,80,row,col,40);
    gameBoard.show();
   
    let button = createButton("Start");
    button.position(width / 4,520)
    button.class('button');
    button.mousePressed(() => {
        gameBoard.hide();
        gameBoard.start();
        button.hide();
    })

    nextBtn = createButton("Next level");
    nextBtn.hide();
    nextBtn.position(width/2,height/2 + 30);
    nextBtn.mousePressed(() => {
        nextLevel();
        button.show()
        nextBtn.hide();
    })

    restartBtn = createButton('Restart');
    restartBtn.hide();
    restartBtn.position(width/2,height/2 + 30);
    restartBtn.mousePressed(() => {
        restart();
        button.show();
        restartBtn.hide();
    })
}

function draw() {
    background(0);
    // image(imgs[0],0,0,,10);
    textSize(32);
    fill(255);
    text('Time: '+gameBoard.tick, width / 4 * 2, 520);
    if(gameBoard.gameOver){
        text("Game Over", width / 2, height / 2 - 30);
        text('score :' + score, width / 2, height / 2);
        restartBtn.show();
        noLoop();
    }else{
        if (gameBoard.finish) {
            score += gameBoard.tick;
            text('score :' + score, width / 2, height / 2);
            nextBtn.show();
            noLoop();
        } else {
            gameBoard.update();
            gameBoard.draw()
            if (mouseIsPressed) {
                gameBoard.tileClick();
            }
        }
    }
}

function nextLevel() {
    time -= 10;
    gameBoard = new GameBoard(80,80,row,col,40);
    gameBoard.show();
    loop();
}

function restart() {
    score = 0;
    gameBoard = new GameBoard(80, 80, row, col, 40);
    gameBoard.show();
    loop();
}