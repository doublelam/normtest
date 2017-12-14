function bindThis(f, oTarget) {
    return f.bind(oTarget)
}

function test(){
  return this.name
}

let tar = {
  name: 'test'
};

console.log(bindThis(test,tar)())
