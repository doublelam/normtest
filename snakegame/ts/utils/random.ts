export class Random {
    static getOne(items: Array<any>): any {
        let _length = items.length;
        let _count = Math.random() * (_length);
        return items[Math.floor(_count)];
    }

    static randomColor(opacity: string = '1'): string {
        return `rgba(${Number(Math.floor(Math.random() * 255))},${Number(Math.floor(Math.random() * 255))},${Number(Math.floor(Math.random() * 255))}, ${opacity})`;
    }
}
