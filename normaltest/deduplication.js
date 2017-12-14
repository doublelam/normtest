function u(arr) {
  if (!arr.length) { return [] }
  if (arr.length === 1) { return [arr[0]] }
  return [arr[0]].concat(u(arr.slice(1).filter(function (v) {
    if (typeof v === 'number' && typeof arr[0] === 'number' && isNaN(arr[0]) && isNaN(v)) {
      return false
    }
    return (v !== arr[0])
  })))
}

Array.prototype.uniq = function () {
  return u(this)
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())