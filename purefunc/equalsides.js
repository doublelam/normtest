function findEvenIndex(arr) {
  const findEvIndex = (num, list) => {
    console.log('find ', num)
    if (num >= list.length) {
      return -1;
    }
    if (ifArrEqual(num, list)) {
      return num;
    }
    return findEvIndex(num + 1, list);
  }
  return findEvIndex(0, arr);
}
const sumArr = arr => {
  if (!arr.length) {
    return 0;
  }
  return arr.reduce((a, b) => a + b)
};
const ifArrEqual = (num, arr) => sumArr(arr.slice(0, num)) === sumArr(arr.slice(num + 1, arr.length));

console.log(ifArrEqual(3, [1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([20,10,30,10,10,15,35]))
