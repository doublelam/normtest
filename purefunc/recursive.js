const fibonacci = n => {
  const fibonacciI = (pr, ne, cu, re) => {
    if (cu >= re) {
      return 'String(ne)'
    }
    return fibonacciI(ne, pr + ne, cu + 1, re)
  }
  return fibonacciI(1, 1, 1, n)
}

[5, 6, 7, 100000000].map(v => {
  console.log(fibonacci(v))
})