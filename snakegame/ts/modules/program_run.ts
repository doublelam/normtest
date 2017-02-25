import { timerRn } from './timer';
import { $watch } from './watch_obj';
import { drawSnake } from './draw_snake';
import { snakeObj } from './snake';
import { CrashCheck } from './crash_check';
import { canObj } from './dom_obj';
import { feedMachine } from './feed_machine';
import { alertHandle } from './alert_mask_handler';
class ProgramRn {
    intervalNum: number;
    main(): void {
        this.changeTime(500);
        $watch(timerRn, ['runTime'], () => {
            drawSnake.draw(snakeObj.newSnake());
            CrashCheck.checkCrashWall(snakeObj, canObj, () => {
                this.pause();
                alertHandle.setAlert();
            });
            CrashCheck.chechCrashItSelf(snakeObj, () => {
                this.pause();
                alertHandle.setAlert();                
            });

            CrashCheck.checkCrashFood(snakeObj, feedMachine, () => {
                feedMachine.feeding();
                snakeObj.growUp();
                // this.pause();
            });
        });
        alertHandle.playAgainHandle();

    }
    changeTime(delay): void {
        this.intervalNum && clearInterval(this.intervalNum);
        this.intervalNum = setInterval(function () {
            timerRn.forwardTime();
        }, delay);
    }
    pause(): void {
        clearInterval(this.intervalNum);
    }
    stop(): void {

    }
}
export const programRn = new ProgramRn();

