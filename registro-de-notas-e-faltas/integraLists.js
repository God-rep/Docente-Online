//Diz em qual turma esta
let turmaIDAtual;

//Codigo da disciplina, nome, numero da turma e horarios
let infoTurma;

//Variavel que define o semestre em curso
let semestreAtual = "2025/1";

/*----------------Pegar as partes relevantes do site com variáveia aqui, para serem editadas depois no código-------------------*/
 
//Lista das turmas no html
let listaTurmasHTML;

/*------------------------------------------------------------------------------------------------------------------------------*/

function atualizaHTML(){
	console.log("turma procurada: " + turmaIDAtual);
	
	for(const child of listaTurmasHTML.children){
		let turmaFilhoID = child.querySelector(".turmaID");

		if (!turmaFilhoID) {
      			console.warn("Elemento .turmaID não encontrado em: ", child);
     			continue;
    		}

		turmaFilhoID = turmaFilhoID.textContent;
		console.log("turma a ser comparada: " + turmaFilhoID);
		
		if (turmaFilhoID === turmaIDAtual){
			console.log("botao achado: " + turmaFilhoID);
			child.dispatchEvent(new MouseEvent("click", {
				bubbles: true,
				cancelable: true
			}));
			break;
		}
	}
}

/* Exemplo de linha da tabela
[0]	1			//Numero da linha
[1]	202512345610		//Matricula
[2]	Aluno1			//Nome
[3]	aluno1@grad.uni		//Email
[4]	"E/B"			//Nota P1
[5]	"E/B"			//Nota P2
[6]	"E/B"			//Nota PF
[7]	0.0			//Media Final
[8]	7			//Total de faltas
*/

/* Exemplo de infoTurma
[0]	IME04-10833	//codigo
[1]	Ter M1 M2	//horario
[2]	Qui M1 M2	//horario
[3]	Análise e Projeto de Sistemas - Turma 1	// nome e turma 
[4]	Ementário	// palavra "Ementario"

Entao, para um infoTurma com n elementos:
[0] -> Sempre codigo
[outros] -> Sempre horarios
[n-2] -> Sempre nome e turma
[n-1] -> Sempre "Ementario" 
*/

function carregaDoStorage(){
	infoTurma = localStorage.getItem("turmaAtualInfo");
	localStorage
	infoTurma.trim();
	console.log("infoTurma carregada!: " + infoTurma);
		
	//Transforma o texto do elemento clicado em uma lista de strings
	let infoTurmaSeparada = infoTurma.split(/\s+/);
	console.log("infoTurma quebrada!: " + infoTurmaSeparada);
	
	//turmaIDAtual = segunda string (codigo de turma) + " " + antepenultima string (numero da turma) + " " + semestre atual
	turmaIDAtual = (infoTurmaSeparada[1]+" "+infoTurmaSeparada[(infoTurmaSeparada.length-3)]+" "+ semestreAtual);
	console.log("turmaID atualizada!:" + turmaIDAtual);

	localStorage.removeItem("turmaAtualInfo");
}

//Aciona ao clicar nos botões de cada disciplina
function mudaTurma(novaTurmaID){
	//Redefine valores manipulando o DOM para que as informações do site batam com as da nova disciplina
	//A ideia eh pegar a turma que bata com as informacoes carregadas na lista de turmas
	atualizaHTML();
}

//Chama troca de turma
document.addEventListener("clicaNovaTurma", (e) => {
	console.log("Nova turma selecionada!");
	carregaDoStorage();
	mudaTurma(turmaIDAtual);
});



//Inicia o script apos o carregamento da pagina
document.addEventListener("DOMContentLoaded", () => {
	listaTurmasHTML = document.querySelector('#disciplinas');
	let existeNovaTurma = (localStorage.getItem("turmaAtualInfo") !== null);
	if(existeNovaTurma){
		carregaDoStorage();
		mudaTurma(turmaIDAtual);
	}
});
