import {snakeObj} from './snake';
import { canObj } from './dom_obj';
import { Random } from '../utils/random';
export class FeedMachine {
    leftTop: Array<number>;
    color: string;
    width: number;
    height: number;
    constructor(){
        let snakeWidth = snakeObj.bodyStyleInfo.width;
        let snakeHeight = snakeObj.bodyStyleInfo.height;
        let canWidth = canObj.width;
        let canHeight = canObj.height;
        let randomHorizon = Math.floor(Math.random() * (canWidth / snakeWidth));
        let randomVerticle = Math.floor(Math.random() * (canHeight / snakeHeight));
        this.width = snakeObj.bodyStyleInfo.width;
        this.height = snakeObj.bodyStyleInfo.height;
        this.leftTop = [randomHorizon * this.width, randomVerticle * this.height];
        this.color = Random.randomColor();
        
        console.log(this.width,this.height,this.color,this.leftTop)
    }
    public feeding(
        pos?: Array<number>,
        color?: string,
        width?: number,
        height?: number,
    ) {
        let snakeWidth = snakeObj.bodyStyleInfo.width;
        let snakeHeight = snakeObj.bodyStyleInfo.height;
        let canWidth = canObj.width;
        let canHeight = canObj.height;
        let randomHorizon = Math.floor(Math.random() * (canWidth / snakeWidth));
        let randomVerticle = Math.floor(Math.random() * (canHeight / snakeHeight));
        this.width = width || snakeWidth;
        this.height = height || snakeHeight;
        this.leftTop = [randomHorizon * this.width, randomVerticle * this.height];
        this.color = color || Random.randomColor();
        return this;
    }
}

export const feedMachine = new FeedMachine();
