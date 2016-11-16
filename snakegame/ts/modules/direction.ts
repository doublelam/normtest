class Direction{
    direction: Object;
    constructor(){
        this.direction = {
            dX: 1,
            dY: 0
        }
    }
    private getMouseEv(){
        window.onkeydown = (e) => {
            let keyCode: number = e.keyCode || e.which;
            switch (keyCode){
                case 38: this.direction.dY - 1;break;
                case 
            }
        }
    }
    test(){
        this.getMouseEv();
    }
}

let directDifine = new Direction();
export {directDifine};