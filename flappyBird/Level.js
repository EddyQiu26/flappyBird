class Level {
    constructor(score, pipes) {
        this.score = score;
        this.pipes = pipes;
        this.obstacleLine = 350;
        this.birdSpeed = 1;
    }

    mayIncreaseLevel(){
        let score = this.score.score;
        if(score % 15 ==0  && this.obstacleLine <= 400){
            this.obstacleLine += 2;
            this.birdSpeed = this.birdSpeed + 0.5;
            for(let i = 0; i < this.pipes.length; i++){
                this.pipes[i].pipeLevelSpeed += 0.5;
                if(this.pipes[i].minimumGapSpace >= 45){
                    this.pipes[i].minimumGapSpace += 1;
                }
                if(this.pipes[i].maximumGapSpace >= 75){
                    this.pipes[i].maximumGapSpace -= 1;
                }
            }
        }
    }

}