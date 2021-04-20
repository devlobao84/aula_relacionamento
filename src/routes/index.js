const express = require('express');
const router = express.Router();
const controller = require('../controller/index')
// GET /
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/exibirtodos', controller.procuraTodos)

router.get('/exibirum/:id', controller.procuraUm)

router.post('/cadastrar', controller.cadastrar)

module.exports = router;


