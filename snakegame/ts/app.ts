import {snakeObj} from './modules/snake';
import {drawSnake} from './modules/draw_snake';
import {directDifine} from './modules/direction';
import {programRn} from './modules/program_run';

class AppLaunch{

    main():void{
        drawSnake.draw(snakeObj);
    }
}
let appLaunch = new AppLaunch();
appLaunch.main();
programRn.main();