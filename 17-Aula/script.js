console.log("Sim");

// Callback
// Função que será o callback
function finalizar() {
  console.log("Acabei");
}

// Função principal
function processar(callback) {
  console.log("Iniciando processamento das informações...");
  callback();
}

// executo a função principal, atrelando-a ao callback
processar(finalizar);

// callback c/ Função anônima
function executarTarefa(callback) {
  console.log("Inciando execução da tarefa...");
  // executa função c/ delay
  setTimeout(callback, 3000);
}
executarTarefa(() => {
  console.log("Acabou a tarefa");
});

// calback c/ codições simples
function verificarNota(nota, callback) {
  if (nota >= 7) {
    callback();
  }
}

function aprovado() {
  console.log("Parabéns, você é o millior!");
}
verificarNota(8, aprovado);

// verificação com dois callbacks
// se deu certo
function loginCorreto() {
  console.log("Parabéns, logado com sucesso!");
}
// se deu errado
function loginErrado() {
  console.log("Usuário ou senha errados!");
}

function validarSenha(senha, sucesso, erro) {
  if (senha == "1234") {
    sucesso();
  } else {
    erro();
  }
}

console.log("------------------------------");
// Executar os testes
// com senha errada
validarSenha("7", loginCorreto, loginErrado);
console.log("------------------------------");
// com senha certa
validarSenha("1234", loginCorreto, loginErrado);