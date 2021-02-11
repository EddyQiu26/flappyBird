class Game {
    constructor(imgSrc, canvas, score){
        this.canvas = canvas;
        this.score = score;
        this.gameState = 0;
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.readyState = {
            fb_x: 291,
            fb_y: 344,
            fb_width: 193,
            fb_height: 44,
            t_x: 309,
            t_y: 240,
            t_width: 112,
            t_height : 105,
            gr_x: 292,
            gr_y : 440,
            gr_width: 174,
            gr_height: 44
        },
        this.gameOverState = {
            gm_x: 292,
            gm_y: 398,
            gm_width: 188,
            gm_height: 37,
            b_x: 292,
            b_y: 115,
            b_width: 229,
            b_height: 115,
            s_x: 485,
            s_y: 427,
            s_width : 79,
            s_height: 28
        },
        this.medal = {
            n_x: 440,
            n_y: 287,
            n_width: 44,
            n_height: 44,
            b_x: 604,
            b_y: 273,
            b_width: 44,
            b_height: 44,
            s_x: 532,
            s_y: 457,
            s_width: 44,
            s_height: 44,
            g_x: 484,
            g_y: 458,
            g_width: 44,
            g_height: 44,
        }
    }

    drawReadyScreen(ctx){
        this.img.onload = () => {
            ctx.drawImage(this.img, this.readyState.fb_x, this.readyState.fb_y, this.readyState.fb_width, this.readyState.fb_height, this.canvasWidth / 2 - this.readyState.fb_width/2, this.canvasHeight / 2 - 130, this.readyState.fb_width,this.readyState.fb_height);
            ctx.drawImage(this.img, this.readyState.t_x, this.readyState.t_y, this.readyState.t_width, this.readyState.t_height, this.canvasWidth / 2 - this.readyState.t_width / 2, this.canvasHeight / 2 - 80, this.readyState.t_width, this.readyState.t_height);
            ctx.drawImage(this.img, this.readyState.gr_x, this.readyState.gr_y, this.readyState.gr_width, this.readyState.gr_height, this.canvasWidth / 2 - this.readyState.gr_width / 2, this.canvasHeight / 2 + 40, this.readyState.gr_width, this.readyState.gr_height);
        }
        this.img.src = this.imgSrc;
    }

    drawGameOverScreen(ctx) {
        const bestScore = parseInt(localStorage.getItem("bestScore"));
        const onesDigit_best = bestScore % 10;
        const tensDigit_best = Math.floor(bestScore / 10);
        const onesDigit = this.score.score % 10;
        const tensDigit = Math.floor(this.score.score / 10);
        this.img.onload = () => {
            ctx.drawImage(this.img, this.gameOverState.gm_x, this.gameOverState.gm_y, this.gameOverState.gm_width, this.gameOverState.gm_height, this.canvasWidth / 2 - this.gameOverState.gm_width / 2, this.canvasHeight / 2 - this.gameOverState.gm_height - 100, this.gameOverState.gm_width, this.gameOverState.gm_height);
            ctx.drawImage(this.img, this.gameOverState.b_x, this.gameOverState.b_y, this.gameOverState.b_width, this.gameOverState.b_height, this.canvasWidth / 2 - this.gameOverState.b_width / 2, this.canvasHeight / 2 - this.gameOverState.gm_height - 50, this.gameOverState.b_width, this.gameOverState.b_height);
            ctx.drawImage(this.img, this.gameOverState.s_x, this.gameOverState.s_y, this.gameOverState.s_width, this.gameOverState.s_height, this.canvasWidth / 2 - this.gameOverState.s_width / 2, this.canvasHeight / 2 - this.gameOverState.s_height + 60, this.gameOverState.s_width, this.gameOverState.s_height);
            if(bestScore <= 25){
                ctx.drawImage(this.img, this.medal.n_x, this.medal.n_y, this.medal.n_width, this.medal.n_height, this.canvasWidth / 2 - 2 * this.medal.n_width, this.canvasHeight / 2 - this.medal.n_height, this.medal.n_width, this.medal.n_height);
            } else if(bestScore >25 && bestScore <= 80){
                ctx.drawImage(this.img, this.medal.b_x, this.medal.b_y, this.medal.b_width, this.medal.b_height, this.canvasWidth / 2 - 2 * this.medal.b_width, this.canvasHeight / 2 - this.medal.b_height, this.medal.b_width, this.medal.b_height);
            } else if(bestScore > 81 && bestScore <= 150){
                ctx.drawImage(this.img, this.medal.s_x, this.medal.s_y, this.medal.s_width, this.medal.s_height, this.canvasWidth / 2 - 2 * this.medal.s_width, this.canvasHeight / 2 - this.medal.s_height, this.medal.s_width, this.medal.s_height);
            } else {
                ctx.drawImage(this.img, this.medal.g_x, this.medal.g_y, this.medal.g_width, this.medal.g_height, this.canvasWidth / 2 - 2 * this.medal.g_width, this.canvasHeight / 2 - this.medal.g_height, this.medal.g_width, this.medal.g_height);
            }
            ctx.drawImage(this.img, this.score.scoreDigits[tensDigit_best].x, this.score.scoreDigits[tensDigit_best].y, this.score.scoreDigits[tensDigit_best].width, this.score.scoreDigits[tensDigit_best].height, this.canvasWidth / 2 + 60, this.canvasHeight / 2 - 10, this.score.scoreDigits[tensDigit_best].width, this.score.scoreDigits[tensDigit_best].height);
            ctx.drawImage(this.img, this.score.scoreDigits[onesDigit_best].x, this.score.scoreDigits[onesDigit_best].y, this.score.scoreDigits[onesDigit_best].width, this.score.scoreDigits[onesDigit_best].height, this.canvasWidth / 2 + 75, this.canvasHeight / 2 - 10, this.score.scoreDigits[onesDigit_best].width, this.score.scoreDigits[onesDigit_best].height);
            ctx.drawImage(this.img, this.score.scoreDigits[tensDigit].x, this.score.scoreDigits[tensDigit].y, this.score.scoreDigits[tensDigit].width, this.score.scoreDigits[tensDigit].height, this.canvasWidth / 2 + 60, this.canvasHeight / 2 - 53, this.score.scoreDigits[tensDigit].width, this.score.scoreDigits[tensDigit].height);
            ctx.drawImage(this.img, this.score.scoreDigits[onesDigit].x, this.score.scoreDigits[onesDigit].y, this.score.scoreDigits[onesDigit].width, this.score.scoreDigits[onesDigit].height, this.canvasWidth / 2 + 75, this.canvasHeight / 2 - 53, this.score.scoreDigits[onesDigit].width, this.score.scoreDigits[onesDigit].height);
            if(this.score.score >= parseInt(localStorage.getItem("bestScore")) && this.score.score !== 0 && parseInt(localStorage.getItem("bestScore")) > 0){
                ctx.drawImage(this.img, this.score.labelNew.x,this.score.labelNew.y,this.score.labelNew.width, this.score.labelNew.height, this.canvasWidth / 2 + 25, this.canvasHeight / 2 - 7, this.score.labelNew.width, this.score.labelNew.height);
            }
        }
        this.img.src= this.imgSrc;
    }

    startGame(){
        this.canvas.addEventListener("click", () => {
            if(this.gameState !== 1){
                this.gameState = 1;
            }
        });
    }

    restartGame(){
        this.canvas.addEventListener("click", (e) => {
            const canvasBound = this.canvas.getBoundingClientRect();
            const clientX = e.clientX;
            const clientY = e.clientY;
            const halfCanvasSize = Math.ceil(CANVAS_WIDTH / 2);
            const halfBtnSize = Math.ceil(this.gameOverState.s_width / 2);
            const btnLeftBound = canvasBound.left + halfCanvasSize - halfBtnSize;
            const btnRightBound = btnLeftBound + this.gameOverState.s_width;
            if(clientX >= btnLeftBound && clientX <= btnRightBound && clientY >= 290 + canvasBound.top && clientY <= 290 + canvasBound.top + this.gameOverState.s_height){
                this.gameState = 1;
                this.score.score = 0;
            }   
        })
    }
}

