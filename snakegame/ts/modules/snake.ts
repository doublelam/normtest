/// <reference path="../interfaces/modules.d.ts" />
import {directDifine} from './direction';
class Snake implements snake{
    body: Array<any>;
    constructor(){
        this.body = [
            // {pos: [10, 10],
            // width: 2,
            // height: 2,
            // rotate: 0}
        ];
        for(let i = 0;i < 100; i ++){
            this.body.push({
                pos: [10 + i * 4, 10],
                width: 4,
                height: 4,
                rotate: 0,
                color: `rgba(48,163,245,${i/100})`,
                lineWidth: 1,
                drawStyle: 'fillRect'
            })
        }
        this.body.push({
            pos: [10 + 100 * 4, 10],
            width: 4,
            height: 4,
            rotate: 0,
            color: `rgba(48,163,245,100)`,
            lineWidth: 1,
            drawStyle: 'strokeRect'
        })
    }
    public newSnake(): Snake{
        let bodyLength = this.body.length;
        for(let i = 0;i < bodyLength - 1; i++){
            this.body[i].pos[0] = Number(this.body[i + 1].pos[0]);
            this.body[i].pos[1] = Number(this.body[i + 1].pos[1]);
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        let gap = {gapX: this.body[bodyLength - 1].width,gapY: this.body[bodyLength - 1].height};
        this.body[bodyLength - 1].pos[0] += directDifine.getDir()[0] * gap.gapX;
        this.body[bodyLength - 1].pos[1] += directDifine.getDir()[1] * gap.gapY; 
        return this;
    }
}

let snakeObj = new Snake();
export {snakeObj};