class Foreground {
    constructor(imgSrc, canvasWidth, canvasHeight){
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.x = 292;
        this.y = 0;
        this.width = 308;
        this.height = 110;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    draw(ctx) {
        this.img.onload = () =>{
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height, 0, this.canvasHeight - this.height, this.canvasWidth, this.height);
        }
        this.img.src= this.imgSrc;
    }
}