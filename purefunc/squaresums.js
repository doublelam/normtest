const insertToBeSquare = (num, list) => {
  const [left, right] = [list[0], list[list.length - 1]];
  if (ifSquare(num + left)) {
    return [[num].concat(list), []];
  }
  if(ifSquare(num + right)) {
    return [list.concat([num]), []];
  }
  return [list, num]
}
const arrayInsertInList = list => {
  const arrayInsertListI = (initList, arr, n) => {
    const ifInsert = insertToBeSquare(arr[n], initList);
    console.log('ifinsert', ifInsert)
    if (n >= arr.length) {
      return false;
    }
    if (arr.length <= 0) {
      return initList;
    }
    if (!ifInsert[1].length) {
      return arrayInsertListI(ifInsert[0], arr.slice(0, n).concat(arr.slice(n + 1)), 0);
    }
    return arrayInsertListI(ifInsert[0], arr, n + 1)
  }
  return arrayInsertListI(list.slice(-1), list.slice(0, -1), 0);
}
const squareSums = n => {
  const list = quickList(n);
}

const quickList = n => new Array(n).join(',').split(',').map((v, i) => i);

const ifSquare = num => Number.isInteger(Math.pow(num, .5));

const factoria = num => {
  const factoriaI = (sum, n) => {
    const s = sum + n;
    if (n <= 1) {
      return s;
    }
    return factoriaI(s, n - 1)
  }
  return factoriaI(0, num)
}

console.log(factoria(10))
console.log(arrayInsertInList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))