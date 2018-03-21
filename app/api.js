var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.json({
    name: "API Restful example",
    version: "0.0.1"
  });
})

// /apelido/tasks (GET, POST, PUT, DELETE, HEAD)
// /apelido/tasks/id (GET, POST, PUT, DELETE, HEAD)

app.get('/minora/tasks', (requisicao, resposta) => {
  resposta.json({
    user: "minora",
    tasks: [
      {id: "123", title: "Teach API Restful"},
      {id: "321", title: "Distributed systems"}
    ]
  });
})

app.listen(process.env.PORT || 3000);