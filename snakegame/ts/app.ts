import {snakeObj} from './modules/snake';
import {drawSnake} from './modules/draw_snake';

class AppLaunch{

    main():void{
        drawSnake.draw(snakeObj);
    }
}
let appLaunch = new AppLaunch();
appLaunch.main();