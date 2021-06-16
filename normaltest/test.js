[c
,_
,o
,n
,_
,s
,t
,_
,r
,u
,_
,w
,l
,_
,d
,h
,_
,e
,$
,_
,q
,v
,_
,x
]=
`c
on
st
ru
wl
dH
e 
'!
,`
b=
{a
()
{}
}
f=
b.
a[
c+
o+
n+
s+
t+
r+
u+
c+
t+
o+
r
](
r+
e+
t+
u+
r+
n+
$+
q+
h+
e+
l+
l+
o+
x+
$+
w+
o+
r+
l+
d+
v+
q)


console.log(f())




const cache = {}
const isSquare = (n) => {
  if (cache[n]) { return cache[n] };
  const v = Number.isInteger(Math.sqrt(n));
  cache[n] = v;
  return v;
}
const getMap = (list) => {
  const mapCache = {};
  for (const v of list) {
    for (let i = ((mapCache[v] || []).slice(-1)[0] || 0) + 1; i <= list.length; i++) {
      // for (let i = 1; i <= list.length; i ++) {
      if (isSquare(v + i) && v !== i) {
        mapCache[v] = (mapCache[v] || []).concat(i);
      }
    }
  }
  return mapCache;
}
let ind = 0;
// const generate = (list, map, length, cb, sum = []) => {
//   ind ++
//   for (const v of list) {
//     if (sum.includes(v)) {continue}
//     const vs = map[v].filter(va => !sum.includes(va))
//     if (!vs.length && sum.length >= length - 1) {
//       const r = sum.concat(v);
//       cb(r);
//       return r;
//     }
//     generateMap(vs, map, length, cb, sum.concat(v));
//   }
// }



function square_sums_row(n) {
  let success = false;
  const generateMap = (list, map, length, cb, sum = []) => {
    if (success || (sum.length && sum[0] !== 1)) {
      return;
    }
    for (const v of list) {
      if (sum.includes(v)) { continue }
      const vs = map[v] || [];
      if (sum.length >= length - 1) {
        const r = sum.concat(v);
        success = true;
        cb(r)
        return r;
      }
      generateMap(vs, map, length, cb, sum.concat(v));
    }
  }
  const list = new Array(n).fill(n).map((v, i) => i + 1)
  const m = getMap(list);
  console.log(m)
  let r = false;
  generateMap(list, m, n, (v) => r = v);
  return r;
}
// console.time('test')
// console.log('value :: __', JSON.stringify(square_sums_row(1010)));
// console.timeEnd('test')

// const v = new Array(50).fill().map((_, i) => i + 1)
// console.time('test2')
// console.log('__',JSON.stringify(getMap(v)));
// console.timeEnd('test2')



const primeCache = [];
const isPrime = (n) => {
  if (primeCache.includes(n)) {
    return true;
  }
  if (n !== 2 && n % 2 === 0) {return false}
  for (let i = 3; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  primeCache.push(n);
  return true;
}

const generateAll = (list) => {
  const nLi = list.sort((a, b) => (a < 10 ? (a * 10 + a) : a) - (b < 10 ? (b * 10 + b) : b))
  console.log('--', nLi)
  const arr = [];
  let smallest = false;
  let largest = false;
  let startLarge = false;
  if (list.length <= 1) {
    if (list.length && isPrime(list[0])) {
      return list;
    }
    return []
  }
  const machine = (li, sum = []) => {
    if (smallest && !startLarge) {
      startLarge = true;
      const rev = nLi.reverse();
      machine(rev);
      return;
    }
    if (largest) {return;}
    if (!li.length) {
      const v = Number(sum.join(''));
      if (isPrime(v)) {
        arr.includes(v) || arr.push(v);
        if (smallest) {
          largest = true;
        } else {
          smallest = true;
        }
      }
      return;
    }
    for (const i in li) {
      const nextI = Number(i) + 1;
      const rest = li.slice(0, i).concat(li.slice(nextI));
      const current = li[i];
      machine(rest, sum.concat([current]))
    }
  }
  machine(nLi)
  return arr;
}

function primeCombination(nums){
  console.log(nums)
  return generateAll(nums);
}

// console.time('pr')
// console.log(generateAll([ 3, 4, 82, 8, 3, 2, 68, 8, 1 ]))
// // console.log(primeCombination(10416474444473))
// console.log(primeCache)
// console.timeEnd('pr')
 








// console.log(b.a.constructor('return 0')());
// console.log(f());
