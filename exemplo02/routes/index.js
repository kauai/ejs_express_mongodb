var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const db = require('../db')
  const clientes = db.findClients((err,clientes) => {
    res.render('index', { title: 'Express', clientes });
  })
});

module.exports = router;
