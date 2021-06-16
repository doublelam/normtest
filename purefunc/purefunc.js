const a = [1,2,3,4,5,6];
const b = [6,5,9,9];

const conList = (li1, li2, arr = []) => {
   if (!li1.length && !li2.length) {
      return arr;
   }
   const lastSum = Number(li1[li1.length -1] || 0) + Number(li2[li2.length -1] || 0);
   return conList(li1.slice(0, -1), li2.slice(0, -1), [lastSum].concat(arr));
}

const toDecimal = (li) => {
   const ge = li.reverse().reduce((su, cu) => {
      const p = cu + su.rest;
      if (p < 10) {
         return {rest: 0, sum: [p].concat(su.sum)}
      }
      const r = p - 10;
      return {rest: 1, sum: [r].concat(su.sum)}
   }, {rest: 0, sum: []})
   if (!ge.rest) {return ge.sum}
   return [ge.rest].concat(ge.sum);
}
// console.log(conList(a, b))
// console.log('__',toDecimal([174,2,3,14]))

console.time('n')
console.log(String(99883996764729887808908999999999999999999999999999989898989898989898989898998989n + 987876786766565786767687668699999999999999999999999989898989898989898989898989898989898989n))
console.timeEnd('n')
// console.log(conList('99883996764729887808908'.split(''), '9878767867665657867676876686'.split('')))
console.time('c')
console.log(toDecimal(conList('99883996764729887808908999999999999999999999999999989898989898989898989898998989'.split(''), '987876786766565786767687668699999999999999999999999989898989898989898989898989898989898989'.split(''))).join(''))
console.timeEnd('c')