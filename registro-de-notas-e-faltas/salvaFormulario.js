
let turmas = null;

//Assim que carregar a pagina
document.addEventListener("DOMContentLoaded", () => {
	//Se turmas foi atualizado antes, pega do localStorage. Senao, da fetch no json de turmas e salva em variavel e no localStorage
	let existeNovoTurmas = (localStorage.getItem("turmas") !== null)
	if (existeNovoTurmas){
		turmas = localStorage.getItem("turmas");
	}
	else{
    fetch('./turmas.json')
      .then(response => {
        if (!response.ok) throw new Error("Falha no carregamento");
        return response.json();
      })
      .then(json => {
        turmas = json;
        localStorage.setItem("turmas", JSON.stringfy(json));
        console.log("JSON de turma carregado e salvo");
      })
      .catch(error => {
        console.error("Erro ao carregar JSON:", error);
      });
  }
});
