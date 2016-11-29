const express = require('express');
const getIp = require('get-ip');

const app = express();
// app.use(express.static('./'));


app.get('*', function (req, res) {
  res.send('Hello World')
})

app.listen(3033, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  getIp()
    .then(res => {
      res.forEach(ip => {
        console.log(`listening on ${ip}:3033`); // eslint-disable-line
      });
    });
});
