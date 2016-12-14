export const dashatize = (num: number) => {
  // get 'em
  let numArr: Array<string> = num.toString().split('');
  for(let i = 0; i < numArr.length; i++){
      if(Number(numArr[i]) % 2 !== 0){
          if(numArr[i - 1] === '-'|| i === 0){
            numArr.splice(i,0,'-')
          }else{
            numArr.splice(i - 1,0,'-');
            numArr.splice(i,0,'-');
          }
      }
  }
  return numArr.toString();
};
console.log(dashatize(4555878));