class Score {
    constructor(imgSrc, canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.img = new Image();
        this.imgSrc = imgSrc;
        this.score = 0;
        this.labelNew = {
            x: 291,
            y: 490,
            width: 32,
            height: 14
        }
        this.scoreDigits = [
            // 0
            {
                x: 576,
                y: 200,
                width: 14,
                height: 20
            },
            // 1
            {
                x: 582,
                y: 236,
                width: 10,
                height: 20
            },
            // 2
            {
                x: 578,
                y: 268,
                width: 14,
                height: 20
            },
            // 3
            {
                x: 578,
                y: 300,
                width: 14,
                height: 20
            },
            // 4
            {
                x: 574,
                y: 346,
                width: 14,
                height: 20 
            },
            // 5
            {
                x: 574,
                y: 370,
                width: 14,
                height: 20
            },
            // 6
            {
                x: 330,
                y: 490,
                width: 14,
                height: 20
            },
            // 7
            {
                x: 350,
                y: 490,
                width: 14,
                height:  20
            },
            // 8
            {
                x: 370,
                y: 490,
                width: 14,
                height: 20
            },
            // 9
            {
                x: 390,
                y: 490,
                width: 14,
                height:  20
            }
        ];
    }

    drawScore(ctx){
        const onesDigit = this.score % 10;
        const tensDigit = Math.floor(this.score / 10);
        this.img.onload = () => {
            ctx.drawImage(this.img, this.scoreDigits[tensDigit].x, this.scoreDigits[tensDigit].y, this.scoreDigits[tensDigit].width, this.scoreDigits[tensDigit].height, 0.85 * this.canvasWidth, 0.05 * this.canvasHeight - this.scoreDigits[0].height / 2, this.scoreDigits[tensDigit].width, this.scoreDigits[tensDigit].height);
            ctx.drawImage(this.img, this.scoreDigits[onesDigit].x, this.scoreDigits[onesDigit].y, this.scoreDigits[onesDigit].width, this.scoreDigits[onesDigit].height, 0.85 * this.canvasWidth + 15, 0.05 * this.canvasHeight - this.scoreDigits[0].height / 2, this.scoreDigits[onesDigit].width, this.scoreDigits[onesDigit].height);
        }
        this.img.src = this.imgSrc;
    }

    updateBestScore(){
        if(localStorage.getItem("bestScore") !== null){
            const bestScore = parseInt(localStorage.getItem("bestScore"));
            if(score.score > bestScore){
                localStorage.setItem("bestScore", score.score);
             }
        }
    }
}