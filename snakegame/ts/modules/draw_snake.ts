/// <reference path="../interfaces/modules.d.ts" />
import {canTxt} from './dom_obj';
import {snakeOpt} from '../options/snake_option';
class DrawSnake{
    draw(snake: snake): any{
        for (let item of snake.body){
            console.log(item);
            canTxt.fillStyle = snakeOpt.color;
            canTxt.lineWidth = snakeOpt.lineWidth;
            let dLeft = item.pos[0] - (item.width / 2);
            let dTop = item.pos[1] - (item.height / 2);
            canTxt[snakeOpt.lineType](dLeft,dTop,item.width,item.height);
        }
        return this.draw;
    }
}

let drawSnake = new DrawSnake();
export {drawSnake};