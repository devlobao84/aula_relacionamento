const express = require('express');
const router = express.Router();
const controller = require('../controller/index')
// GET /
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/pessoa/exibirtodos', controller.procuraTodos)

router.get('/pessoa/exibirum/:id', controller.procuraUm)

router.post('/pessoa/cadastrar', controller.cadastrar)

router.put('/pessoa/atualizar', controller.atualizar)

router.delete('/pessoa/deletar/:id', controller.deletar)


// ROTA MATRICULAS
router.get('/matricula/exibirtodas', controller.procuraTodas)

router.get('/matricula/exibiruma/:id', controller.procuraUma)

// Antes de habilitar essa rota, temos que responder à dúvida comentada logo acima do esboço da função
// router.post('/matricula/cadastrar', controller.cadastrarMatricula)

router.put('/matricula/atualizar', controller.atualizarMatricula)

router.delete('/matricula/deletar', controller.deletarMatricula)

module.exports = router;


