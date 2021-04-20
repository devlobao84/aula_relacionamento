const { Pessoas } = require('../models')

const procuraTodos = async (req, res) => {
  const pessoas = await Pessoas.findAll()
  console.log(pessoas);
  res.send(pessoas);
  
}

const procuraUm = async (req, res) => {
const {id} = req.params
//console.log(pessoas);
const pessoas = await Pessoas.findByPk(id)
  
  res.send(pessoas);
  
}



const cadastrar = (req, res) => {
    Pessoas.create ({
      nome: req.body.nome,
      ativo: req.body.ativo,
      email: req.body.email,
      role: req.body.role     
    })
  }  

module.exports = {
     procuraTodos,
     procuraUm,
     cadastrar
}





