export class Extremum{
    static min(numbers: number[]){
        let tempNum = numbers[0];
        for (let val of numbers ) {
            if (tempNum > val) {
                tempNum = val
            }
        }
        return tempNum;
    }

    static max(numbers: number[]){
         let tempNum = numbers[0];
        for (let val of numbers ) {
            if (tempNum < val) {
                tempNum = val
            }
        }
        return tempNum;
    }
}