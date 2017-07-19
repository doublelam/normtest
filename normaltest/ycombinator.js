const fibornacci = num => {
  if (num === 0 || num === 1) return 1;
  return fibornacci(num - 1) + fibornacci(num - 2);
}
console.time('start');
console.log(
  fibornacci(0),
  fibornacci(1),
  fibornacci(2),
  fibornacci(3),
  fibornacci(4),
  fibornacci(5),
  fibornacci(6),
  fibornacci(7),
  fibornacci(8),
  fibornacci(50)
);
console.timeEnd('start')

