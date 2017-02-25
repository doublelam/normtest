/// <reference path="../interfaces/modules.d.ts" />
import { directDifine } from './direction';
import { canObj, canTxt } from './dom_obj';
import { Random } from '../utils/random';
import { snakeOpt } from '../options/snake_option';
import {CopyObj} from '../utils/copy_obj';
export class Snake implements snake {
    body: Array<any>;
    bodyStyleInfo: {
        startPos: Array<number>,
        initLength: number,
        width: number,
        height: number,
        isAutoRun: boolean
    };
    constructor() {
        this.bodyStyleInfo = {
            startPos: [5, 5],
            initLength: 10,
            width: 10,
            height: 10,
            isAutoRun: snakeOpt.ifAutoRun
        };
        this.init();

    }

    init() {
        this.body = [
            // {pos: [10, 10],
            // width: 2,
            // height: 2,
            // rotate: 0}
        ];
        for (let i = 0; i < this.bodyStyleInfo.initLength; i++) {
            this.body.push({
                pos: [this.bodyStyleInfo.startPos[0] + i * this.bodyStyleInfo.width, this.bodyStyleInfo.startPos[1]],
                width: this.bodyStyleInfo.width,
                height: this.bodyStyleInfo.height,
                rotate: 0,
                color: '#aaa',
                lineWidth: 1,
                drawStyle: 'fillRect'
            })
        }
        this.body.push({
            pos: [this.bodyStyleInfo.startPos[0] + this.bodyStyleInfo.initLength * this.bodyStyleInfo.initLength, this.bodyStyleInfo.startPos[1]],
            width: this.bodyStyleInfo.width,
            height: this.bodyStyleInfo.height,
            rotate: 0,
            color: `rgba(221,80,68,1)`,
            lineWidth: 1,
            drawStyle: 'fillRect'
        })
    }

    public newSnake(): Snake {
        let bodyLength = this.body.length;
        for (let i = 0; i < bodyLength - 1; i++) {
            let tempPos = [];
            tempPos.push(this.body[i + 1].pos[0]);
            tempPos.push(this.body[i + 1].pos[1]);
            this.body[i].pos = tempPos;
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        let gap = { gapX: this.body[bodyLength - 1].width, gapY: this.body[bodyLength - 1].height };
        let snakeHead = [this.body[bodyLength - 1].pos[0], this.body[bodyLength - 1].pos[1]];
        if (this.bodyStyleInfo.isAutoRun) {
            this.autoRun(snakeHead, gap);
        }
        this.body[bodyLength - 1].pos[0] += directDifine.getDir()[0] * gap.gapX;
        this.body[bodyLength - 1].pos[1] += directDifine.getDir()[1] * gap.gapY;
        return this;
    }

    autoRun(snakeHead, gap) {
        let direcOperate = [
            function () { directDifine.setDir(0, -1) }, //up
            function () { directDifine.setDir(0, 1) }, //down
            function () { directDifine.setDir(-1, 0) }, //left
            function () { directDifine.setDir(1, 0) }  //right
        ];
        if (snakeHead[0] <= (0 + gap.gapX)) {
            console.log('left');
            console.log(Random.getOne([0, 1, 3]));
            direcOperate[Random.getOne([0, 1, 3])]();
        }
        if (snakeHead[0] >= (canObj.width - gap.gapX)) {
            console.log('right');
            console.log(Random.getOne([0, 1, 2]));
            direcOperate[Random.getOne([0, 1, 2])]();
        }
        if (snakeHead[1] <= (0 + gap.gapY)) {
            console.log('top');
            console.log(Random.getOne([1, 2, 3]));
            direcOperate[Random.getOne([1, 2, 3])]();
        }
        if (snakeHead[1] >= (canObj.height - gap.gapY)) {
            console.log('bottom');
            console.log(Random.getOne([0, 2, 3]));
            direcOperate[Random.getOne([0, 2, 3])]();
        }
    }

    resetFactory(): void {
        this.init();
        directDifine.resetDir();
    }

    growUp() {
        this.body.unshift(CopyObj.copyObj(this.body[0]));
    }

}

export const snakeObj = new Snake();
