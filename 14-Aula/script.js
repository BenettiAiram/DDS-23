/*
// Mostrando Mensagem no Console
console.log("Salve, Rapaziadinha do Canal!!!")

// Caixinha de Alerta
// alert("testa aí e me fala")

// Variáveis
let nome = "Airam" // String
let idade = 17 // Int
let altura = 1.73 // Float
let robo = false // Boolean

// Mostrando o tipo da variável
console.log("O tipo da variável nome é: ", typeof(nome))

console.log("Seu nome é: ", nome)
console.log("Sua idade é: ", idade)
console.log("Sua altura é: ", altura)
console.log("Você é um robô? = ", robo)

nome = 10
console.log("O tipo da variável nome é: ", typeof(nome))

// Variáveis Especiais (outros tipos)
let nulo = null
let indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

/*
// Operadores Aritméticos
// +, -, *, /, %
let a = 10, b = 3;
console.log("Soma: ", a + b);
console.log("Subtração: ", a - b);
console.log("Multiplicação: ", a * b);
console.log("Divisão: ", a / b);
console.log("Resto da Divisão: ", a % b);

// Operadores lógicos
// E, Ou, Negação
// &&, ||, !
let verdade = true, mentira = false
console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// Operadores Relacionais
// >, <, >=, <=, ==, !=
var x = 65, y = 32, z = "65"
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == z)
console.log(x != z)
// Verificando valor E tipo da variável
console.log(x === z)
console.log(x !== z)
*/

/*
// Desvios Condicionais
// if, else, else if
var estaVivo = true;
if (estaVivo == true) {
  // 1° Comparação
  console.log("Parabéns! Você está vivo");
} else if (estaVivo == false) {
  // 2° Comparação (caso a 1° esteja errada)
  console.log("Poxa, que pena... Você está morto");
} else {
  // Última Comparação (caso todas as outras estejam erradas)
  console.log("Você não tá nada");
}

// switch case
var camisa = "laranja";

switch (camisa) {
    case "Azul":
        console.log("Você ganhou um voucher");
    break;
    case "Branca":
        console.log("Você ganhou um body splash da Virgínia");
    break;
    case "Vermelha":
        console.log("Você ganou um Ferrari 3 portas");
    break;
    default:
        console.log("Você não escolheu uma cor válida");
}
*/

/*
// prompt - Interage com Usuário e Coleta Valor
prompt("Digite seu nome:")
var time = prompt("Pra quem vc torce?")
console.log("Seu time é: ", time)
*/



// Caixas----
let c1 = Number(prompt("Digite o tamanho da 1° caixa: "))
let c2 = Number(prompt("Digite o tamanho da 2° caixa: "))
let c3 = Number(prompt("Digite o tamanho da 3° caixa: "))

if (c1 < c2 && c2 < c3){
    console.log("O drone fará 1 viagem")
}else if (c1+c2<c3){
    console.log("O drone fará 1 viagem")
}else if ((c1 == c2 && c2 == c3 && c1 == c3) || (c1 != c2 && c2 != c3)){
    console.log("O drone fará 3 viagens")
}else{
    console.log("O drone fará 2 viagens")
}