const express = require('express');
const app = express();
const port = 3000;
app.get('/ti-tuc', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send("Hello");
});

app.listen(port, () => console.log(`Hello ${port}` ));
