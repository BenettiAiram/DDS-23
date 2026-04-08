console.log("SALVE O TRICOLOR CARIOCA");

// Funções
// Só executa
function teste() {
  console.log("Funcionou aqui");
}
teste();
// Mostra texto do que é aquela função
console.log(teste);

// Com Parâmetro
function teste2(parametro) {
  console.log("O Parâmetro é: ", parametro);
}
teste2("Arroz");

// Com Retorno
function media(n1, n2) {
  let resultado = (n1 + n2) / 2;
  return resultado;
}
console.log(media(3, 4));

// Guarda o valor do return em uma variável
let mediaFinal = media(8, 6);
console.log("Média: ", mediaFinal);

// Função Anônima
// É uma função sem nome, retorno guardado em uma variável

let mensagem = function () {
  console.log("Oi, Meu Chapa");
}
// Mostra o texto da função
console.log(mensagem);
// Apenas guarda o texto, sem executar
mensagem;
// Executa a função
mensagem();

// arrow function - Função da Seta
// Forma mais comum de escrever funções no JS
const multiplicar = (x, y) => {
  return x * y;
}
console.log("Sua multiplicação deu: ", multiplicar(4,8));

// + menor ainda
// Quando só tem uma linha de returno, o return pode ser omitido e fica numa linha só
const dobro = num => num * 2;
console.log("O dobro é: ", dobro(5));