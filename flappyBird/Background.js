class Background {
    constructor(imgSrc, canvasHeight){
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.x = 0;
        this.y = 0;
        this.width = 288;
        this.height = 511;
        this.canvasHeight = canvasHeight;
    }

    draw(ctx) {
        this.img.onload = () =>{
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height)
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height, this.width, 0, this.width, this.height);;
        }
        this.img.src= this.imgSrc;
    }
}