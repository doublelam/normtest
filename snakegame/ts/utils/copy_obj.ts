export class CopyObj {
    static copyObj(obj: Object): Object {
        const imageObject = {};
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                if (obj[key] instanceof Array) {
                    CopyObj.copyArr(obj[key]);
                } else if(obj[key] instanceof Object) {
                    CopyObj.copyObj(obj[key]);
                }
            } else {
                imageObject[key] = obj[key];
            }
        }
        return imageObject;
    }

    static copyArr(arr: Array<any>): Array<any> {
        const imageArray = [];
        for (let index in arr) {
            if (typeof arr[index] === 'object') {
                if (arr[index] instanceof Array) {
                    CopyObj.copyArr(arr[index]);
                } else if(arr[index] instanceof Object) {
                    CopyObj.copyObj(arr[index]);
                }
            } else {
                imageArray[index] = arr[index];
            }
        }
        return imageArray;
    }
}