const log = console.log;

// 快速排序
const arrSort = arr => {
  if (arr.length <= 0) {
    return []
  };
  return arrSort(arr.slice(1, arr.length).filter(val => val <= arr[0]))
    .concat(arr[0])
    .concat(arrSort(arr.slice(1, arr.length).filter(val => val > arr[0])))
}

// 比较大小
const greater = (a, b) => a > b ? a : b

// 最大值
const greatest = arr => {
  if (arr.length === 0) {
    throw new Error('INCORRECT ARRAY');
  }
  if (arr.length === 1) {
    return arr[0]
  }
  return greater(arr[0], greatest(arr.slice(1, arr.length)))
}
// 简单map实现
const map = f => arr => {
  if (arr.length === 0) {
    return []
  }
  if (arr.length === 1) {
    return [f(arr[0])]
  }
  return [f(arr[0])].concat(map(f)(arr.slice(1, arr.length)))
}
// 去重
const deduplication = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  return [arr[0]].concat(deduplication(filter(val => arr[0] !== val, arr.slice(1, arr.length))))
}

// 筛选
const filter = (f, arr) => {
  if (!arr.length) {
    return []
  }
  if (arr.length === 1) {
    return f(arr[0]) ? [arr[0]] : []
  }
  return (f(arr[0]) ? [arr[0]] : []).concat(filter(f, arr.slice(1, arr.length)))
}


// fold([1,2,3,4,5], 1) === [6,6,3]
// fold([1,2,3,4,5], 2) === [9,6]
// 折叠
const fold = (arr, num) => {
  let inArr = [...arr];
  for (let i = 0; i < num; i++) {
    let newArr = [];
    for (let i = 0; i <= inArr.length; i++) {
      if (i > (inArr.length - i - 1)) { break; };
      if (i === (inArr.length - i - 1)) { newArr = newArr.concat([inArr[i]]); break };
      newArr.push(inArr[i] + inArr[inArr.length - i - 1])
    }
    inArr = newArr;
    console.log('arr', inArr)
  }
  return inArr;

}

const reduceArr = arr => arr.reduce((a, b) => [a[0] + b[0], a[1] + b[1]]);
const inversStr = str => str.length <= 1 ? str : inversStr(str.slice(1, str.length)) + str[0]
const evaluatePow = (arr, powArr) => {
  return arr.map((val, index) => val * powArr[index]).reduce((a, b) => a + b)
}

function validate(password) {
  return /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*?[0-9]+)(?=.*[a-zA-Z0-9_]{6,})(?=.*^[!@#$%^&*()]$)/g.test(password);
}


// const getDivisers = num => new Array(num).join('_').split('_')
// .map((val,index) => index + 1)
// .filter(val => num % val === 0)

// const getArrFromNums = (start, end) => new Array(end - start + 1)
// .join('_').split('_')
// .map((val, index) => start + index)

function listSquared(m, n) {
  // your code
  return constructArray(m, n)
    .filter(val => ifSquare(sumOfSquared(getDivisers(val))))
    .map(val => [val, sumOfSquared(getDivisers(val))])
  // .filter(val => ifSquare(val[1]))

}

const ifSquare = num => (Math.sqrt(num) % 1) === 0

const sumOfSquared = arr => arr.map(val => val * val).reduce((a, b) => a + b)

const getDivisers = num => constructArray(0, num)
  .filter(val => num % (val + 1) === 0)

const getArrFromNums = (start, end) => new Array(end - start + 1)
  .join('_').split('_')
  .map((val, index) => start + index)


// log(listSquared(1, 25000))

const constructArray = (start, end, gap = 1) => {
  let _a = [];
  for (let i = start; i <= end; i = i + gap) {
    _a.push(i);
  }
  return _a;
}

function listSquared(m, n) {
  let outputArr = [];
  for (let num = m; num <= n; num++) {
    log('num', num)
    let squareSum = 0;
    for (let i = 1; i <= num; i++) {
      if ((num % i) === 0) {
        squareSum += i * i
      }
    }
    if ((Math.sqrt(squareSum) % 1) === 0) {
      outputArr.push([num, squareSum])
    }
  }
  return outputArr
}

function removeNb(n) {
  const getPaires = interConjunction(new Array(n).join('.').split('.')
    .map((val, index) => index + 1))
    .filter(val => (val[0] * val[1]) === ((n + 1) * n * .5 - val[1] - val[0]))

  return getPaires.concat(getPaires.map(val => [val[1], val[0]]))
}

const conjunction = (num, arr) => arr.map(val => [num, val])

const interConjunction = arr => {
  if (arr.length <= 1) { return [] }
  return conjunction(arr[0], arr.slice(1)).concat(interConjunction(arr.slice(1)))
}

// 高阶函数组合
const chained = fcs => {
  if (fcs.length === 1) { return fcs[0] }
  return input => conjunc(fcs, input)
}

const conjunc = (fcs, input) => {
  if (fcs.length === 1) { return fcs[0](input) }
  return fcs[fcs.length - 1](conjunc(fcs.slice(0, fcs.length - 1), input))
}

function f1(x) { return x * 2 }
function f2(x) { return x + 2 }
function f3(x) { return Math.pow(x, 2) }

var isPP = function (n) {
  for (let i = 2; i < n; i++) {
    let mode = n % i;
    let divide = n / i;
    let ifPower = ifPow(n, i);
    if (
      mode === 0 &&
      ifPower
    ) {
      return [i, ifPower]
    }
  }

  return null
}

const ifPow = (big, less) => {
  let _x = 0;
  if (less === 1) { return false }
  for (let i = 1; i <= big; i = i * less) {
    _x++;
    if (i === big) { return _x - 1 }
  }
  return false
}

function nextBigger(n) {
  //your code here
}


const mixInverse = arr => {
  if (arr.length <= 0) { return [arr] }
  return insertOne(arr[0], arr.slice(1)).concat(mixInverse(arr.slice(1)))
}

const inverse = (a, b) => [b, a]

const insertOne = (num, arr) => {
  if (arr.length <= 1) { return [[num].concat(arr)] }
  return
}


function solution(digits) {
  //   let digitArr = digits.split('');
  let _a = [];
  for (let i = 0; i <= digits.length - 6; i++) {
    _a.push(digits.slice(i, i + 5));
  }
  _a.push(digits.slice(digits.length - 5))
  return max(_a);
}

const max = arr => {
  if (arr.length === 1) { return arr[0] }
  return greater(arr[0], max(arr.slice(1)))
}
// const greater = (a, b) => a > b ? a : b

function solution(input, markers) {
  let regex = new RegExp(`${markers.map(v => '\\' + v).join('|')}`, 'g');
  log('regex', regex)
  return input.split('\n')
    .map(val => val.split(regex)[0].trim())
    .join('\n')
}

function incrementString(strng) {
  // return incrementedString
  let numStr = strng.match(/[0-9]+$/g);
  if (!numStr) { return strng + '1' }
  let itNum = Number(numStr);
  let nextNum = Number(numStr) + 1;
  console.log('itnum', itNum, 'nextnum', nextNum, numStr, /0+/.test(numStr[0])
    , String(nextNum).length, String(itNum).length)
  if ((String(nextNum).length >= String(itNum).length) && /0+/.test(numStr[0])) {
    // return 'dd'
    return strng.replace(new RegExp(`0${Number(numStr)}$`, 'g'), `${Number(numStr) + 1}`)
  }
  return strng.replace(new RegExp(`${Number(numStr)}$`, 'g'), `${Number(numStr) + 1}`)
}

const calculateArr = arr => {
  let newArr = [];
  let temTens = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let getI = divideNum(Number(arr[i]) + temTens);
    newArr.unshift(getI[1])
    temTens = Number(getI[0])
  }
  return temTens > 0 ? [temTens].concat(newArr) : newArr;
}

const divideNum = num => {
  let units = num % 10;
  let tens = parseInt(num / 10);
  return [tens, units]
}

const multiplyArrs = (arr1, arr2) => {
  let baseArr;
  let multyByArr;
  let afterOpArr = [];
  if (arr1.length <= arr2.length) {
    baseArr = arr1;
    multyByArr = arr2;
  } else {
    baseArr = arr2;
    multyByArr = arr1;
  }
  for (let i = 0, j = baseArr.length; i < baseArr.length; i++ , j--) {
    // console.log('j',j)
    afterOpArr.push(calculateArr(multyByArr.map(val => val * baseArr[i]))
      .concat(new Array(j - 1).length && new Array(j - 1)
        .join('.').split('.').map(v => 0) || [])
    );
  }
  // console.log('afterarr', afterOpArr)
  return afterOpArr;

}

const plusArrs = arr => {
  // console.log('plusarr', arr)
  let beLength = arr[0].length;
  let maxLength = beLength;
  // console.log('maxlength',maxLength)
  let newArr = arr.map(val => (new Array(maxLength - val.length).length
    && (new Array(maxLength - val.length).join('.').split('.').map(v => 0)) || []).concat(val));
  // console.log('plusarrs',newArr)
  return newArr.reduce((a, b) => {
    console.log('plus reducxe', a, b)
    return calculateArr(concatArr(a, b))
  });
}

const concatArr = (arr1, arr2) => {
  console.log('cancatArr', arr1, arr2)
  return arr1.map((val, index) => val + (arr2[index]))
}

function multiply(a, b) {
  let rslt = plusArrs(multiplyArrs(a.split(''), b.split(''))).join('');
  if (/^[0]+$/g.test(rslt)) {
    return '0'
  }
  let matchaArr = rslt.match(/^0+/g);
  if (matchaArr) {
    return rslt.slice(matchaArr[0].length)
  }
  return rslt
}


// console.log(calculateArr([112, 112]))
// console.log('1111111111111111111',
//  2830869077153280552556547081187254342445169156730
//  * 2830869077153280552556547081187254342445169156730)

let d = ['11', '11']

// log(multiply(d[0], d[1]))
// console.log('[986765]+[456789]', multiply(
//   '10',
//    '9'))
// ---------base64-------------------------------------------------------------------
const BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-'
const decimaltobinary = num => {
  if (num <= 1) {
    return String(num);
  }
  let mode = num % 2;
  let divide = parseInt(num / 2);
  return decimaltobinary(divide) + String(mode)
}

const binarytodecimal = str => {
  let length = str.length;
  if (length <= 1) {
    return Number(str.charAt()) * Math.pow(2, length - 1)
  }
  return Number(str.charAt()) * Math.pow(2, length - 1) + binarytodecimal(str.slice(1))
}


const getArrFromStr = (str, bit = 8) => {
  let itBin = decimaltobinary(str.charCodeAt());
  let prefixZero = repeatStr('0', bit - itBin.length)
  if (str.length <= 1) {
    return [prefixZero + decimaltobinary(str.charCodeAt())]
  }
  return [prefixZero + decimaltobinary(str.charCodeAt())].concat(getArrFromStr(str.slice(1)))
}

const repeatStr = (str, repeat) => {
  let newstr = '';
  for (let i = 0; i < repeat; i++) {
    newstr = newstr + str
  }
  return newstr;
}

const reSplit = (str, bit = 6) => {
  if (!str.length) {
    return []
  }
  if (str.length < bit) {
    return [str.slice(0)
      + repeatStr('0', bit - str.length)
      + '@' + repeatStr('=', (bit - str.length) / 2)]
  }
  return [str.slice(0, bit)].concat(reSplit(str.slice(bit), bit))
}


const strToBase64 = str => {
  return reSplit(getArrFromStr(str).join('')).map(val => {
    let value = val.split('@');
    let decimalNum = binarytodecimal(value[0]);
    return BASE64_MAP.charAt(Number(decimalNum)) + (value[1] || '')
  }).join('')
}

const base64ToStr = str => {
  let equN = str.match(/=/g) && str.match(/=/g).length || 0;
  let newStr = str.replace(/=/g, '');
  let binStr = newStr.split('').map(val => {
    let binaryNum = decimaltobinary(BASE64_MAP.indexOf(val))
    return getBinsStr = repeatStr('0', 6 - binaryNum.length) + binaryNum
  }).join('');
  return reSplit(binStr.slice(0, binStr.length - equN), 8).map(val => {
    return String.fromCharCode(binarytodecimal(val))
  }).join('')
}

String.prototype.toBase64 = function () {
  return strToBase64(this)
}
String.prototype.fromBase64 = function () {
  return base64ToStr(this)
}


