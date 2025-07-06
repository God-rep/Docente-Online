
let turmas;  // Contem todas as turmas de todos os professores

fetch('../disciplinas-periodo/turmas.json') // Pega JSON das turmas
  .then(response => response.json())
  .then(data => {
    turmas = data;  // Joga em uma variavel turmas
    console.log(turmas);      // Envia no log para checar erros
  })
  .catch(error => console.error('Error loading JSON:', error));


//Inicia página pela primeira vez
function iniciaPag(){}

// Lista de todas as turmas do professor
var listaTurmas = []

//Lista de todos os alunos na turma
var listaAlunos = []

//Posição do primeiro aluno da visualização atual da tabela na lista de alunos 
var paginaAtual = 0



//"< 10 Anteriores"
function antPag(){}

//"Proximos 10 >"
function proxPag(){}
