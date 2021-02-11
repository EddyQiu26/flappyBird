class Obstacle {
    constructor(imgSrc, canvasWidth, canvasHeight){
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.pipeLevelSpeed = 1;
        this.minimumGapSpace = 50;
        this.maximumGapSpace = 90;
        this.topPipe = {
            x: 604,
            y: 0,
            width: 51,
            height:270,
            variablePos: Math.floor(Math.random() * (200-10) + 10)
        }
        this.bottomPipe = {
            x: 660,
            y: 1,
            width: 51,
            height: 242,
        };
        this.pipePosition = canvasWidth + this.topPipe.width;
        this.pipeGap = Math.ceil(Math.random() * (this.maximumGapSpace - this.minimumGapSpace) + this.minimumGapSpace);
    }

    draw(ctx){
        this.img.onload = () => {
            ctx.drawImage(this.img, this.topPipe.x, this.topPipe.y, this.topPipe.width, this.topPipe.height,  this.pipePosition, 0, this.topPipe.width, this.topPipe.height - this.topPipe.variablePos);
            ctx.drawImage(this.img, this.bottomPipe.x, this.bottomPipe.y, this.bottomPipe.width, this.bottomPipe.height, this.pipePosition, (this.topPipe.height - this.topPipe.variablePos + this.pipeGap), this.bottomPipe.width, this.canvasHeight- (this.topPipe.height - this.topPipe.variablePos + this.pipeGap));
        }
        this.img.src = this.imgSrc;
    }

    update(){
        this.pipePosition = this.pipePosition - this.pipeLevelSpeed;
    }

    outOfBound(){
        if(this.pipePosition <= -this.topPipe.width) return true;
    }
}