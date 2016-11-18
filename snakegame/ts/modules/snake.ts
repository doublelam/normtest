/// <reference path="../interfaces/modules.d.ts" />
import {directDifine} from './direction';
import {canObj,canTxt} from './dom_obj';
import {random} from '../utils/random';
class Snake implements snake{
    body: Array<any>;
    constructor(){
        this.body = [
            // {pos: [10, 10],
            // width: 2,
            // height: 2,
            // rotate: 0}
        ];
        for(let i = 0;i < 10000; i ++){
            this.body.push({
                pos: [10 + i * 10, 10],
                width: 10,
                height: 10,
                rotate: 0,
                color: `rgba(43,154,232,.1)`,
                lineWidth: 1,
                drawStyle: 'strokeRect'
            })
        }
        this.body.push({
            pos: [10 + 100 * 10, 10],
            width: 10,
            height: 10,
            rotate: 0,
            color: `rgba(221,80,68,1)`,
            lineWidth: 1,
            drawStyle: 'fillRect'
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
        let snakeHead = [this.body[bodyLength - 1].pos[0],this.body[bodyLength - 1].pos[1]];
        let direcOperate = [
            function(){directDifine.setDir(0,-1)}, //up
            function(){directDifine.setDir(0,1)}, //down
            function(){directDifine.setDir(-1,0)}, //left
            function(){directDifine.setDir(1,0)}  //right
            ];
        if(snakeHead[0] <= (0 + gap.gapX)){
            console.log('left');    
            console.log(random.getOne([0,1,3]));        
            direcOperate[random.getOne([0,1,3])]();
        }
        if(snakeHead[0] >= (canObj.width - gap.gapX)){
            console.log('right');
            console.log(random.getOne([0,1,2]));        
            direcOperate[random.getOne([0,1,2])]();
        }
        if(snakeHead[1] <= (0 + gap.gapY)){
            console.log('top');
            console.log(random.getOne([1,2,3]));               
            direcOperate[random.getOne([1,2,3])]();
        }
        if(snakeHead[1] >= (canObj.height - gap.gapY)){
            console.log('bottom');
            console.log(random.getOne([0,2,3]));        
            direcOperate[random.getOne([0,2,3])]();
        }
        this.body[bodyLength - 1].pos[0] += directDifine.getDir()[0] * gap.gapX;
        this.body[bodyLength - 1].pos[1] += directDifine.getDir()[1] * gap.gapY; 
        return this;
    }
}

let snakeObj = new Snake();
export {snakeObj};