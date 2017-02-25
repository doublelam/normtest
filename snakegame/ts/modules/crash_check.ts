import { Extremum } from '../utils/extremum';
import { Snake, snakeObj } from './snake';
import { FeedMachine } from './feed_machine';
export class CrashCheck {
    static checkCrashWall(snake: Snake, canvas: HTMLCanvasElement, callBack: Function) {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        var lastNum = snake.body.length - 1;
        let snakeHeadLeft = snake.body[lastNum].pos[0] - snake.bodyStyleInfo.width / 2;
        let snakeHeadRight = snake.body[lastNum].pos[0] + snake.bodyStyleInfo.width / 2;
        let snakeHeadTop = snake.body[lastNum].pos[1] - snake.bodyStyleInfo.height / 2;
        let snakeHeadBottom = snake.body[lastNum].pos[1] + snake.bodyStyleInfo.height / 2;

        if (
            snakeHeadLeft < 0 ||
            snakeHeadRight > canvasWidth ||
            snakeHeadTop < 0 ||
            snakeHeadBottom > canvasHeight
        ) {
            callBack.call(this);
        }
    }

    static chechCrashItSelf(snake: Snake, callBack: Function) {
        let snakeLast = snake.body.length - 1;
        let headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        let minDistance = Extremum.min([
            snake.bodyStyleInfo.width,
            snake.bodyStyleInfo.height
        ]);
        for (let i = 0; i < snakeLast; i++) {
            let bodyGap = [
                Math.abs(snake.body[i].pos[0] - headPos[0]),
                Math.abs(snake.body[i].pos[1] - headPos[1])
            ];
            if (Extremum.max(bodyGap) < minDistance) {
                callBack.call(this);
            }
        }

    }

    static checkCrashFood(snake: Snake, food: FeedMachine, callBack: Function) {
        let snakeLast = snake.body.length - 1;
        let headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        let bodyGap = [
            Math.abs(food.leftTop[0] + (food.width / 2) - headPos[0]),
            Math.abs(food.leftTop[1] + (food.height / 2) - headPos[1])
        ];
        if (Extremum.max(bodyGap) < Extremum.max(
            [food.width, food.height]
        )) {
            callBack.call(this);
        }
    }
}