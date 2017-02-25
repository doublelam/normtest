import { Random } from '../utils/random';
class Direction {
    private direction;
    constructor() {
        this.direction = [1, 0];
        this.getMouseEv();
        // this.randomDirecChange();
    }
    public getDir(): Array<number> {
        return this.direction;
    }
    public setDir(dx: number, dy: number): Object {
        if (
            (dx + this.direction[0] === 0) ||
            (dy + this.direction[1] === 0)
        ) {
            console.log('reverse!')
            dx = this.direction[0], dy = this.direction[1];
        }
        this.direction[0] = dx;
        this.direction[1] = dy;
        return this.direction;
    }
    private randomDirecChange(): void {
        setInterval(() => {
            this.setDir(Random.getOne([0, 1, -1]), Random.getOne([0, 1, -1]));
        }, 20);
    }
    private getMouseEv(): void {
        window.onkeydown = (e) => {
            let keyCode: number = e.keyCode || e.which;
            console.log(keyCode);
            let _self = this;
            function direcClear() {
                _self.direction = [0, 0];
            }
            switch (keyCode) {
                case 38: this.setDir(0, -1); break;
                case 37: this.setDir(-1, 0); break;
                case 39: this.setDir(1, 0); break;
                case 40: this.setDir(0, 1); break;
                default: break;
            }
        }
    }

    resetDir(){
        this.direction = [1, 0];
    }
}

let directDifine = new Direction();
export { directDifine };