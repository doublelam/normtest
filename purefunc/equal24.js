const add = a => b => a + b;
const minus = a => b => a - b;
const multiply = a => b => a * b;
const divid = a => b => a / b;
const calc2 = (a, b, ast, bst) => {
  return {
    [`(${ast || a}+${bst || b})`]: add(a)(b),
    [`(${ast || a}-${bst || b})`]: minus(a)(b),
    [`${ast || a}*${bst || b}`]: multiply(a)(b),
    [`${ast || a}/${bst || b}`]: divid(a)(b)
  }
}

const calc3 = (a, b, c) => {
  const [twoThirdLeft, twoThirdRight] = [calc2(a, b), calc2(b, c)];
  const leftObj = twoThirdLeft.map(v => {})
  return {
    
  }
}

console.log('add', calc2(3, 4, 3, 4))