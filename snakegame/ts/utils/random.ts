class Random{
    public getOne(items: Array<any>): any{
        let _length = items.length;
        let _count = Math.random() * (_length);
        return items[Math.floor(_count)];
    }
}
let random = new Random();
export {random};