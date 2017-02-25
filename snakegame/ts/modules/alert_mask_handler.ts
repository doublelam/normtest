import { alertMask, btnPlayAgain, scoreTxt, alertTitle } from './dom_obj';
import { snakeObj } from './snake';
import { feedMachine } from './feed_machine';
import { programRn } from './program_run';
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

    setAlert(opt?: {
        title?: string,
        ifScore?: boolean,
        btnTex?: string
    }) {
        opt && opt.title && (alertTitle.innerText = opt.title);
        opt && opt.btnTex && (btnPlayAgain.innerText = opt.btnTex);
        if (opt && opt.ifScore) {
            scoreTxt.style.display = 'block';
            let score: number = (snakeObj.body.length - snakeObj.bodyStyleInfo.initLength - 1) * 100;
            this.intervalNum && clearInterval(this.intervalNum);
            this.intervalNum = setInterval(() => {
                let temScore = Number(scoreTxt.innerText) + 5;
                scoreTxt.innerText = `${temScore}`;
                if (temScore >= score) {
                    scoreTxt.innerText = `${score}`;
                    clearInterval(this.intervalNum);
                }
            }, 10);
        } else {
            scoreTxt.style.display = 'none';
        }
        scoreTxt.innerText = '0';
        alertMask.className = alertMask.className.replace(' hidden', '');

    }
}

export const alertHandle = new AlertMaskHandler();
