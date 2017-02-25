class Timer{
    public runTime: number;
    constructor(initTime: number){
        this.runTime = initTime;
    }
    public getTime(): number{
        return this.runTime;
    }
    public setTime(time): number{
        let nTime = Math.floor(Number(time));
        if(nTime){
            this.runTime = nTime;
        }else{
            throw 'err: not integer number'
        }
        return this.runTime;
    }
    public forwardTime(): number{
        this.runTime ++;
        return this.runTime;
    }
    public backwardTime(): number{
        if(this.runTime > 0){
            this.runTime --;
        }
        return this.runTime;
    }
}

export const timerRn = new Timer(0);
