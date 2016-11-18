import {random} from '../utils/random';
class Direction{
    private direction;
    constructor(){
        this.direction = [1,0];
        this.getMouseEv();
        this.randomDirecChange();
    }
    public getDir(): Array<number>{
        return this.direction;
    }
    public setDir(dx = this.direction[0],dy = this.direction[1]): Object{
            this.direction[0] = dx;
            this.direction[1] = dy;
            return this.direction;
    }
    private randomDirecChange():void{
        setInterval(() => {
            this.setDir(random.getOne([0,1,-1]),random.getOne([0,1,-1]));
        },20);
    }
    private getMouseEv():void{
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
                default: break;
            }
        }
    }
}

let directDifine = new Direction();
export {directDifine};