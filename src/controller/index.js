const { Pessoas, Matriculas, Turma } = require('../models')


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
  let { nome, email } = req.query
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


///////////////////////                 MATRICULAS          /////////////////////////////////////

// PROCURAR TODAS AS MATRÍCULAS
const procuraTodas = async (req, res) => {
  const matriculas = await Matriculas.findAll()
  res.send(matriculas);
  
}


// PROCURAR UMA MATRÍCULA POR ID
const procuraUma = async (req, res) => {
const { id } = req.params
const matriculas = await Matriculas.findByPk(id)
  
  res.send(matriculas);
  
}


// CADASTRAR UMA MATRÍCULA
// Dúvida: O cadastro da matrícula tem que fazer direto? 
//         Ou a cada vez que cadastra uma pessoa tem que cadastrar uma matrícula?
// const cadastrar = async (req, res) => {
//   let { nome, ativo, email, role } = req.query
//   let pessoaCadastrada = await Pessoas.create ({
//     nome: nome,
//     ativo: ativo,
//     email: email,
//     role: role
//     })
//     res.json(pessoaCadastrada);
// }

// ATUALIZAR UMA MATRÍCULA
const atualizarMatricula = async (req, res) => {
  let { id, status } = req.query
  let matriculaAtualizada = await Matriculas.update(
    {
      status: status
    },
    {
      where : {id: id}
    }
  );
  res.json(matriculaAtualizada)
}

// DELETAR USUÁRIO DADO UM ID //
const deletarMatricula = async (req, res) => {
  let { id } = req.query;
  let matriculaDeletada = await Matriculas.destroy({
    where: {
      id: id
  }
})

res.json(matriculaDeletada)
}


module.exports = {
    procuraTodos,
    procuraUm,
    cadastrar,
    atualizar,
    deletar,

    procuraTodas,
    procuraUma,
    atualizarMatricula,
    deletarMatricula

}





