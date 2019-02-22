function tco(fd) {
  return fd.map(v => {
    const [name, params, body] = v;
    const root = {
      __cache: {},
    };
    const regrx = new RegExp(`${name}(?=\\(.*\\))`)
    const newBody = body.replace(regrx, `this.func`).replace('return', 'const rst = ')
    root.func = new Function(`${params}`, `
      if (this.__cache[x]){
        return this.__cache[x];
      }
      console.log(this.__cache)
      ${newBody}
      this.__cache[x] = rst;
      return rst
    `
  ).bind(root);
    return root.func;
  })
}

// var result = tco([['f', ['x', 'y'], 'return x ? f(--x) : "foo"']])
var t2 = tco([['f',['x'],'return x?f(x-1):"Yay"']])
var second = tco([['f',[],'throw "Whatever"']])
console.log(t2[0](1e5))