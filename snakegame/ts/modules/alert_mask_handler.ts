import { alertMask, btnPlayAgain, scoreTxt } from './dom_obj';
import { snakeObj } from './snake';
import { feedMachine } from './feed_machine';
import {programRn} from './program_run';
export class AlertMaskHandler {
    intervalNum: number;
    playAgainHandle() {
        btnPlayAgain.onclick = e => {
            console.log('play again');
            console.log(alertMask)
            alertMask.className = alertMask.className + ' hidden';
            snakeObj.resetFactory();
            feedMachine.feeding();
            programRn.changeTime(programRn.initSpeed);
        }
    }

    setAlert() {
        let score: number = (snakeObj.body.length - snakeObj.bodyStyleInfo.initLength - 1) * 100;
        scoreTxt.innerText = '0';
        alertMask.className = alertMask.className.replace(' hidden', '');
        this.intervalNum && clearInterval(this.intervalNum);
        this.intervalNum = setInterval(() => {
            let temScore = Number(scoreTxt.innerText) + 5;
            scoreTxt.innerText = `${temScore}`;
            if (temScore >= score) {
                scoreTxt.innerText = `${score}`;
                clearInterval(this.intervalNum);
            }
            
        }, 10);
    }
}

export const alertHandle = new AlertMaskHandler();
