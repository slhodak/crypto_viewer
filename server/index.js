const express = require('express');
const path = require('path');
const request = require('request-promise');
const port = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public/')));

app.get('/prices', (req, res) => {
  request.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
});
