const express = require('express');
const router = express.Router();
const controller = require('../controller/index')
// GET /
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/pessoa/exibirtodos', controller.procuraTodos)

router.get('/pessoa/exibirum/:id', controller.procuraUm)

router.post('/pessoa/cadastrar', controller.cadastrar)

router.put('/pessoa/atualizar', controller.atualizar)

router.delete('/pessoa/deletar/:id', controller.deletar)


// ROTA MATRICULAS
router.get('/matricula/exibirtodos', controller.procuraTodos)

router.get('/matricula/exibirum/:id', controller.procuraUm)

router.post('/matricula/cadastrar', controller.cadastrar)

router.put('/matricula/atualizar', controller.atualizar)

router.delete('/matricula/deletar/:id', controller.deletar)

module.exports = router;


