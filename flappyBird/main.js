const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSrc = "img/flappyBird.png";
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const background = new Background(spriteSrc, CANVAS_HEIGHT);
const foreground = new Foreground(spriteSrc, CANVAS_WIDTH, CANVAS_HEIGHT);
const bird = new Bird(spriteSrc, CANVAS_WIDTH, CANVAS_HEIGHT);
const score = new Score(spriteSrc, CANVAS_WIDTH, CANVAS_HEIGHT);
const game = new Game(spriteSrc, canvas, score);

localStorage.setItem("bestScore",0);
let pipes = [];
let stopGame;
let frame = 0;
const level = new Level(score, pipes);
const controller = new Control(spriteSrc,canvas, pipes);

function gameLoop() {
    frame++;
    background.draw(ctx);
    foreground.draw(ctx);
    if(game.gameState == 0){
        game.drawReadyScreen(ctx);
        game.startGame();
    } else if(game.gameState == 1){
        bird.flip(ctx,frame);
        if(!controller.paused){
            bird.verticalPosition = bird.verticalPosition + level.birdSpeed;
        }
        if(pipes.length == 0){
            pipes.push(new Obstacle(spriteSrc, CANVAS_WIDTH, CANVAS_HEIGHT));
        } else {
            for(let i = 0; i < pipes.length; i++){
                pipes[i].draw(ctx);
                if(!controller.paused) {
                    pipes[i].update();
                }
                if(pipes[i].outOfBound()){
                    score.score++;
                    level.mayIncreaseLevel();
                }
                if(pipes[i].pipePosition == level.obstacleLine){
                    pipes.push(new Obstacle(spriteSrc, CANVAS_WIDTH, CANVAS_HEIGHT))
                }
            }
            if(pipes[0].pipePosition <= -pipes[0].topPipe.width && pipes[0].pipePosition <= - pipes[0].bottomPipe.width){
                pipes.shift();
            }
            if(
                // top wall
                bird.verticalPosition < 0 || 
                // bottom ground
                bird.verticalPosition + bird.height >= canvas.height - foreground.height ||
                // top pipe left bound
                (bird.verticalPosition + bird.height <= (pipes[0].topPipe.height - pipes[0].topPipe.variablePos) && bird.horizontalPosition + bird.width >= pipes[0].pipePosition) ||
                // bottom pipe left bound
                (bird.verticalPosition >= (pipes[0].topPipe.height - pipes[0].topPipe.variablePos + pipes[0].pipeGap) && bird.horizontalPosition + bird.width >= pipes[0].pipePosition) ||
                // top pipe right bound
                (bird.verticalPosition + bird.height <= (pipes[0].topPipe.height - pipes[0].topPipe.variablePos) && bird.horizontalPosition + bird.width >= pipes[0].pipePosition + pipes[0].topPipe.width) ||
                // bottom pipe righ bound
                (bird.verticalPosition >= (pipes[0].topPipe.height - pipes[0].topPipe.variablePos + pipes[0].pipeGap) &&  bird.horizontalPosition >= pipes[0].pipePosition + pipes[0].bottomPipe.width) ||
                // top pipe bottom bound
                (pipes[0].pipePosition <= bird.horizontalPosition && bird.verticalPosition<= pipes[0].topPipe.height - pipes[0].topPipe.variablePos) ||
                // bottom pipe top bound
                (pipes[0].pipePosition <= bird.horizontalPosition && bird.verticalPosition + bird.height >= (pipes[0].topPipe.height - pipes[0].topPipe.variablePos + pipes[0].pipeGap) )
            ){
                if(game.gameState != 2){
                    game.gameState = 2;
                    score.updateBestScore();
                    bird.verticalPosition = Math.floor(CANVAS_HEIGHT / 2);
                    pipes = [];
                }
            }
        }
        score.drawScore(ctx);
        if(controller.paused){
            controller.drawResume(ctx);
        } else {
            controller.drawPause(ctx);
        }
    } else {
        game.drawGameOverScreen(ctx); 
        game.restartGame();  
        for(let i =0; i< pipes.length; i++){
            pipes[i].paused = false;
        }
    }
    stopGame = requestAnimationFrame(gameLoop);
}
document.addEventListener("keypress", e => {
    if(e.keyCode == 32 && !controller.paused){
        bird.verticalPosition-= bird.jump;
    }
}, false);
// const button = document.getElementById("btn");
// button.addEventListener("click", function(){
//     cancelAnimationFrame(stopGame);
// })
gameLoop();
