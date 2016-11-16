class CanvasOperate{
    setStrokeStyle(canvasContext,color,width){
        canvasContext.strokeStyle = color.toString();
        canvasContext.lineWidth = width;
}
    drawBegin(canvasContext,posX,posY){
        canvasContext.beginPath();
        canvasContext.moveTo(posX,posY);
    }
    drawIng(canvasContext,toX,toY){
        canvasContext.lineTo(toX,toY);
        canvasContext.stroke();
    }
}
var canvasOperate = new CanvasOperate();
class AppStart{
    main(){
        let canv = document.getElementById('canvas');
        let draw = canv.getContext('2d');
        

        let mouseStatus = {
            posX: 0,
            posY: 0,
            moveX: 0,
            moveY: 0
        }
        canv.onmousedown = function(event){
            let canvStatus = {
                left: canv.offsetLeft,
                top: canv.offsetTop
            };
            console.log('mouse down');
            mouseStatus.posX = event.clientX;
            mouseStatus.posY = event.clientY;
            let mouseInCanvasX = mouseStatus.posX - canvStatus.left;
            let mouseInCanvasY = mouseStatus.posY - canvStatus.top;
            let tempX = mouseInCanvasX;
            let tempY = mouseInCanvasY;
            canvasOperate.drawBegin(draw,mouseInCanvasX,mouseInCanvasY);
            canv.onmousemove = function(event){
                mouseStatus.moveX = event.clientX - mouseStatus.posX;
                mouseStatus.moveY = event.clientY - mouseStatus.posY;
                let toX = mouseStatus.moveX + tempX;
                let toY = mouseStatus.moveY + tempY;
                canvasOperate.drawIng(draw,toX,toY);
                tempX = toX;
                tempY = toY;
                mouseStatus.posX = event.clientX;
                mouseStatus.posY = event.clientY;
            }
        }
        window.onmouseup = function(){
            canv.onmousemove = null;
        }
    }
}

let appStart = new AppStart();
appStart.main();
