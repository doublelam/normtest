const getMaps = arr => {
  let _map = {}
  for (let val of arr){
    if (_map[val] !== void(0)){
      _map[val] ++;
    } else {
      _map[val] = 0;
    }
  }
  return _map
} 



const ifMap = (str1, str2) => {
  let map1 = getMaps(str1.split(''));
  let map2 = getMaps(str2.split(''));
  if (str1.length !== str2.length) {
    return false;
  }
  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;    
    } 
  }
  return true;
}

function anagrams(word, words) {
  return words.filter(val => ifMap(word, val))
}

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer','','erlas']))
// console.log(ifMap('racer','caers'))
// console.log(getMaps('racer'))
// console.log(getMaps('caers'))