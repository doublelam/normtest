const a = [2, 3, 4]
const b = [1, 1, 1]
console.log(a.map(x => {
   return b.map(y => x + y)
}))