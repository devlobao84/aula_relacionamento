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


// CADASTRAR UM USUÁRIO
const cadastrar = async (req, res) => {
  let { nome, ativo, email, role } = req.query
  let pessoaCadastrada = await Pessoas.create ({
    nome: nome,
    ativo: ativo,
    email: email,
    role: role
    })
    res.json(pessoaCadastrada);
}

//Pensar em uma maneira de atualizar qualquer campo em uma query só
//Só conseguimos atualizar um "nome" dado um "email"
const atualizar = async (req, res) => {
  let { id, nome, email } = req.query
  let pessoaAtualizada = await Pessoas.update(
    {
      nome: nome
    },
    {
      where : {email: email}
    }
  );
  res.json(pessoaAtualizada)
}

// DELETAR USUÁRIO DADO UM ID
const deletar = async (req, res) => {
  let { id } = req.params;
  let pessoaDeletada = await Pessoas.destroy({
    where: {
      id: id
  }
})

res.json(pessoaDeletada)
}




module.exports = {
    procuraTodos,
    procuraUm,
    cadastrar,
    atualizar,
    deletar
}





