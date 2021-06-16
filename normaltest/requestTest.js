const http = require('http');

http.createServer((req, res) => {
  const opts = {
    host: 'http://gold.leo.poppen2.lab',
    path: `${req.url}?Accept-Language=en-US`,
    headers: req.headers,
    method: req.method,
    
  };
  console.log('options:', opts)
  http.request({...opts,}, (response) => {
    console.log('response:', response)
    res.end(response);
  }).on('error', (e) => {console.log('___request error: ', e), res.statusCode= 500,res.end(e.message)});
}).listen(3001).on('error', (e) => console.log(e));
