import {snakeObj} from './modules/snake';
import {drawSnake} from './modules/draw_snake';
import {directDifine} from './modules/direction'

class AppLaunch{

    main():void{
        drawSnake.draw(snakeObj);
        directDifine.test()
    }
}
let appLaunch = new AppLaunch();
appLaunch.main();