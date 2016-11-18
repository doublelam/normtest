/// <reference path="../interfaces/modules.d.ts" />
import {canTxt,canObj} from './dom_obj';
import {snakeOpt} from '../options/snake_option';
class DrawSnake{
    draw(snake: snake): any{
        canTxt.clearRect(0, 0, canObj.width, canObj.height);
        for (let item of snake.body){
            if(item.drawStyle === 'fillRect'){
                canTxt.fillStyle = item.color || snakeOpt.color;
            }
            if(item.drawStyle === 'strokeRect'){
                canTxt.strokeStyle = item.color || snakeOpt.color;
            }
            canTxt.lineWidth = item.lineWidth || snakeOpt.lineWidth;
            let dLeft = item.pos[0] - (item.width / 2);
            let dTop = item.pos[1] - (item.height / 2);
            canTxt[item.drawStyle || snakeOpt.lineType](dLeft,dTop,item.width,item.height);
        }
        return this.draw;
    }
}

let drawSnake = new DrawSnake();
export {drawSnake}; 