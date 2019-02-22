export const dashatize = (num: number) => {
  // get 'em
  const numArr: string[] = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    if (Number(numArr[i]) % 2 !== 0) {
      if (numArr[i - 1] === "_" || i === 0) {
        numArr.splice(i, 0, "_");
      } else {
        numArr.splice(i - 1, 0, "_");
        numArr.splice(i, 0, "_");
      }
    }
  }
  return numArr.toString();
};
console.log(dashatize(4555878));
