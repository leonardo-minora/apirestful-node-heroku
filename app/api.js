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

app.get('/:user/tasks', (requisicao, resposta) => {
  let user = requisicao.params.user;
  if (user == "minora"){
    resposta.json({
      user: "minora",
      tasks: [
        {id: "123", title: "Teach API Restful"},
        {id: "321", title: "Distributed systems"}
      ]
    });
  } else {
    resposta.status(400).end();
  }
})

app.listen(process.env.PORT || 3000);