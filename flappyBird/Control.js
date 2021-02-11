class Control {
    constructor(imgSrc, canvas, pipes) {
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.pipes = pipes;
        this.paused = false;
        this.canvas = canvas;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.pause = {
            x: 574,
            y: 115,
            width: 26,
            height: 28
        };
        this.resume = {
            x: 574,
            y: 167,
            width: 26, 
            height: 28
        }
    }

    drawPause(ctx) {
        this.img.onload = () => {
            ctx.drawImage(this.img, this.pause.x, this.pause.y, this.pause.width, this.pause.height, 0.95 * this.canvasWidth, 0.05 * this.canvasHeight - this.pause.height / 2, this.pause.width, this.pause.height)
        }
        this.img.src = this.imgSrc;
        this.canvas.addEventListener("click", e => {
            const canvasBounds = this.canvas.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            const btnLeftBound = Math.floor(0.95 * this.canvasWidth);
            const btnUpperBound = Math.floor(0.05 * this.canvasHeight - this.resume.height / 2);
            if(x >= btnLeftBound + canvasBounds.left && x<= btnLeftBound + this.pause.width + canvasBounds.left && y >= btnUpperBound + canvasBounds.top && y <= btnUpperBound + this.pause.height + canvasBounds.top){
                this.paused = true;
            }
        })
    }

    drawResume(ctx){
        this.img.onload = () => {
            ctx.drawImage(this.img, this.resume.x, this.resume.y, this.resume.width, this.resume.height, 0.95 * this.canvasWidth, 0.05 * this.canvasHeight - this.resume.height / 2, this.resume.width, this.resume.height)
        }
        this.img.src = this.imgSrc;
        this.canvas.addEventListener("click", e => {
            const canvasBounds = this.canvas.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            const btnLeftBound = Math.floor(0.95 * this.canvasWidth);
            const btnUpperBound = Math.floor(0.05 * this.canvasHeight - this.resume.height / 2);
            if(x >= btnLeftBound + canvasBounds.left && x<= btnLeftBound + this.pause.width + canvasBounds.left && y >= btnUpperBound + canvasBounds.top && y <= btnUpperBound + this.pause.height + canvasBounds.top){
                this.paused = false;
            }
        })
    }
}