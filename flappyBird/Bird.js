class Bird {
    constructor(imgSrc, canvasWidth, canvasHeight){
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.x = 447;
        this.y = 248;
        this.width = 34;
        this.height = 28;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.frames = [{x : 527, y : 180}, {x : 445, y : 248} ,{x : 527, y : 128}, {x : 527, y : 180}];
        this.frame = 0;
        this.jump = 9.8;
        this.horizontalPosition = 5;
        this.verticalPosition = Math.floor(this.canvasHeight /2) + Math.floor(this.height / 2);
    }  

    flip(ctx, frame) {
        if(frame % 5 == 0){
            this.frame++;
            if(this.frame == 4){
                this.frame = 0;
            }
        }
        this.img.onload = () => {
            ctx.drawImage(this.img, this.frames[this.frame].x, this.frames[this.frame].y, this.width, this.height, this.horizontalPosition, this.verticalPosition, this.width, this.height);
        }
        this.img.src = this.imgSrc;
    }

    draw(ctx){
        this.img.onload = () => {
            ctx.drawImage(this.img, this.frames[0].x, this.frames[0].y, this.width, this.height, this.horizontalPosition, this.verticalPosition, this.width, this.height);
        }
        this.img.src= this.imgSrc;
    }

}