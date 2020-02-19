const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get(`/api/accounts`, (req, res) => {
  db('accounts')
    .then(acc => {
      res.json(acc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMsg: "Can't retrieve accounts" });
    });
});

module.exports = server;
