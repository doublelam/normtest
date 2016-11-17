class Direction{
    private direction;
    constructor(){
        this.direction = [1,0];
        this.getMouseEv();
    }
    public getDir(): Array<number>{
        return this.direction;
    }
    public setDir(dx: number,dy: number): Object{
        if(dx,dy === 1 || 0 ){
            this.direction[0] = dx;
            this.direction[1] = dy;
        }
        return this.direction;
    }
    private getMouseEv(){
        window.onkeydown = (e) => {
            let keyCode: number = e.keyCode || e.which;
            console.log(keyCode);
            let _self = this;
            function direcClear(){
                _self.direction = [0,0];
            }
            switch (keyCode){
                case 38: direcClear();this.direction[1] = -1;break;
                case 37: direcClear();this.direction[0] = -1;break;
                case 39: direcClear();this.direction[0] = 1;break;
                case 40: direcClear();this.direction[1] = 1;break;
                default: ;break;
            }
        }
    }
}

let directDifine = new Direction();
export {directDifine};