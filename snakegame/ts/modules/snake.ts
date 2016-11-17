/// <reference path="../interfaces/modules.d.ts" />
import {directDifine} from './direction';
class Snake implements snake{
    body: Array<any>;
    constructor(){
        this.body = [
            {pos: [20, 20],
            width: 20,
            height: 20,
            rotate: 0 },
            {pos: [40, 20],
            width: 20,
            height: 20,
            rotate: 0 },
            {pos: [60, 20],
            width: 30,
            height: 30,
            rotate: 0 }
        ]
    }
    public newSnake(): Snake{
        let bodyLength = this.body.length;
        for(let i = 0;i < bodyLength - 1; i++){
            this.body[i].pos = this.body[i + 1].pos;
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        this.body[bodyLength - 1].pos[0] += directDifine[0] * this.body[bodyLength - 1].width;
        this.body[bodyLength - 1].pos[1] += directDifine[1] * this.body[bodyLength - 1].height; 
        return this;
    }
}

let snakeObj = new Snake();
export {snakeObj};