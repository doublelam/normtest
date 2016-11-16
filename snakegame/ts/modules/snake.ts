/// <reference path="../interfaces/modules.d.ts" />
class Snake implements snake{
    body: Array<any>;
    constructor(){
        this.body = [
            {pos: [20, 20],
            width: 20,
            height: 20,
            rotate: 0 },
            {pos: [40, 20],
            width: 20,
            height: 20,
            rotate: 0 },
            {pos: [60, 20],
            width: 20,
            height: 20,
            rotate: 0 }
        ]
    }
}

let snakeObj = new Snake();
export {snakeObj};