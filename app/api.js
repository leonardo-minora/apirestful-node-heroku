var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.json({
    name: "API Restful example",
    version: "0.0.1"
  });
})
 
app.listen(process.env.PORT || 3000);