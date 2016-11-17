import {timerRn} from './timer';
import {$watch} from './watch_obj';
import {drawSnake} from './draw_snake';
import {snakeObj} from './snake';
class ProgramRn{
    public main(){
        this.changeTime();
        $watch(timerRn,['runTime'],function(){
            console.log(this.runTime);
            drawSnake.draw(snakeObj.newSnake());
        });
    } 
    public changeTime(){
        setInterval(function(){
            timerRn.forwardTime();
        },3000);
    }
}
let programRn = new ProgramRn();
export {programRn};

