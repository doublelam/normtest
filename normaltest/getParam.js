function getUrlParam(sUrl, sKey) {
  let obj = sUrl.match(/\?.*#/g)[0].replace(/\?|#/g, '').split('&');
  let newObj = {};
  for (let val of obj) {
    let valSplit = val.split('=');
    let secondV = String(Number(valSplit[1])).length === valSplit[1].length ? Number(valSplit[1]) : valSplit[1];
    if (!newObj[valSplit[0]]) {
      newObj[valSplit[0]] = secondV;
    } else {
      if (Array.isArray(newObj[valSplit[0]])) {
        newObj[valSplit[0]] = newObj[valSplit[0]].concat([secondV])
      } else {
        newObj[valSplit[0]] = [newObj[valSplit[0]]].concat([secondV])
      }
    }
  }
  if (!sKey) {
    for (let key in newObj) {
      if (Array.isArray(newObj[key])) {
        return newObj[key]
      }
    }
    return newObj
  }
  return newObj[sKey]
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))