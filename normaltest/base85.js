let x = 's'.charCodeAt(0)

let sstr = 'M';

const getBinFromStr = str => {
  return str.split('').map(val => val.charCodeAt(0).toString(2));
}
const deciToEx = (num, bit) => {
  // return deciToEx(devi, bit) + remain;
  const _deciToEx = (str, num, bit) => {
    let devi = parseInt(num / bit);
    let remain = num % bit;
    let rslt = remain + ',' + str;
    if (num <= bit) {
      return rslt + num;
    }
    return _deciToEx(rslt, devi, bit);
  }
  return _deciToEx('', num, bit);
}

const exToDeci = (arr, bit) => {
  const _exToDeci = (sum, arr, bit) => {
    let val = sum + arr[0] * Math.pow(bit, arr.length - 1);
    if (arr.length <= 1) {
      return val;
    }
    return _exToDeci(val, arr.slice(1), bit);
  }
  return _exToDeci(0, arr, bit);
}

const sepBina = (bin, bit) => {
  const _sepBina = (binArr, bin, bit) => {
    if (bin.length <= bit) {
      return binArr.concat([bin.slice(0, bit)]);
    }
    return _sepBina(binArr.concat([bin.slice(0, bit)]), bin.slice(bit), bit)
  }
  return _sepBina([], bin, bit)
}

const encode85 = str => {
  let extraLength = 4 - ((str.length % 4) || 4);
  console.log(extraLength)
  let _str = sepBina(str + '\0'.repeat(extraLength), 4).map(val => {
    let rawStr = val.split('').map(v => {
      let bin = v.charCodeAt(0).toString(2);
      console.log('bin', bin)
      return '0'.repeat(8 - bin.length) + bin;
    }).join('');
    console.log('rawStr', rawStr)
    return deciToEx(parseInt(rawStr, 2), 85).replace(/,$/g, '').split(',').map(v => {
      return String.fromCharCode(Number(v) + 33)
    }).join('');
  }).join('');
  return '<~' + _str.slice(0, _str.length - extraLength) + '~>';
}


let enc = encode85(sstr);
// console.log(enc)
const decode85 = str => {
  let strArr = str.replace(/^<~|~>$/g, '').split('');
  return sepBina(strArr, 5).map(v => {
    let extraL = 5 - v.length;
    let val = v.concat('u'.repeat(extraL).split(''));
    let codes = val.map(va => {
      return va.charCodeAt(0) - 33
    });
    let bins = exToDeci(codes, 85).toString(2);
    return sepBina('0'.repeat(32 - bins.length) + bins, 8).slice(0, 4 - extraL).map(vl => {
      return String.fromCharCode(parseInt(vl, 2));
    }).join('');
  }).join('')
}
// console.log(decode85(enc))
console.log('dd',deciToEx(85,85))




