# apirestful-node-heroku


**comandos heroku** para criar a app
```sh
npm i -g heroku-cli
heroku login
heroku create bj-api
git push heroku master
heroku open
```

**comandos heroku** fazer deploy depois de uma modificação
```sh
git add *
git commit -m "mensagem"
heroku login
git push heroku master
```


tutorial usado foi [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
