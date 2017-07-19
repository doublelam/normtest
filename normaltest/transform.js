const fs = require('fs');

fs.readFile('./test.l', (err, data) => {
  console.log(err)
  const newData = new Buffer(data.reverse());
  console.log(data);
  console.log('buffer', newData);
  console.log('rwa',data.toString(),'\nnew', newData.toString());
  const reGetData = new Buffer(newData.map(val => val - 2));
  console.log('reget', reGetData, 'string',reGetData.toString())
});
