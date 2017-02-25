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
    initSpeed: number;
    currentSpeed: number;
    constructor() {
        this.initSpeed = 500;
        this.currentSpeed = this.initSpeed;
    }
    main(): void {
        // this.changeTime(this.initSpeed);
        alertHandle.setAlert({
            title: 'CLICK TO START',
            ifScore: false,
            btnTex: 'START GAME'
        });
        $watch(timerRn, ['runTime'], () => {
            drawSnake.draw(snakeObj.newSnake());
            CrashCheck.checkCrashWall(snakeObj, canObj, () => {
                this.pause();
                alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });
            CrashCheck.chechCrashItSelf(snakeObj, () => {
                this.pause();
                alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });

            CrashCheck.checkCrashFood(snakeObj, feedMachine, () => {
                feedMachine.feeding();
                snakeObj.growUp();
                this.currentSpeed > 50 ? this.currentSpeed = this.currentSpeed - 50 : this.currentSpeed = 50;
                console.log('current speed', this.currentSpeed);
                this.changeTime(this.currentSpeed);
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

