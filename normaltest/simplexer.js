const log = console.log;

const GRAMMER_MAP = {
  integer: '([0-9]+)',
  boolean: '(true|false)',
  operator: '([+-/*%(=)])',
  keyword: '(if|else|for|while|return|func|break)',
  whitespace: '(\\t|\\s)',
  string: '(".*")',
  identifier: '.{1}'
}

const flatObj = obj => {
  let _arr = [];
  for (let key in obj) {
    _arr.push(obj[key])
  }
  return _arr;
}

const compareType = (obj, char) => {
  for (let key in obj) {
    let regExp = new RegExp(obj[key], 'g');
    console.log('regExp',regExp)
    if (regExp.test(char)) {
      return key;
    }
  }
  return false;
}

const regExpress = new RegExp(flatObj(GRAMMER_MAP).join('|'), 'g');

// const ALL_GRAMMER_TYPES =

function Simplexer(buffer) {
  this.constructor = function (buffer) {
    this.seperateList = (buffer || '').match(regExpress) || [];
    // console.log('sepereatelist',this.seperateList)
  }
  this.constructor(buffer);
  this._indexN = 0
  this.hasNext = function () {
    // TODO
    if (this.seperateList[this._indexN]) {
      return true;
    }
    return false;
  };

  this.next = function () {
    // TODO
    let chars = this.seperateList[this._indexN];
    let type = compareType(GRAMMER_MAP, chars)
    this._indexN = this._indexN + 1;
    // return new Token(this._indexN, type);
    return [chars, type]
  };

}

function toList(lexer) {
    var list = [];
    while(lexer.hasNext())
        list.push(lexer.next());
    return list;
}
// log(new Simplexer('udohfdsjhtrue8219647nx,mBC##$%$^(&*').seperateList)
var lexer = new Simplexer('fdgfs()vsbjh()2345true');

log(toList(lexer))
