// // console.log("VAMO Q VAMO!")

// // //Laços de Repetição
// // //For
// // for(let i = 1; i <= 5; i++){
// //     console.log(i)
// // }console.log("Acabou o 'for'")

// // //While
// // let c = 1
// // while(c <= 10){
// //     console.log(c)
// //     c++
// // }console.log("Acabou o 'while'")

// // //Array
// // let array = ["Neymar", 10, true, 5.0]
// // // Mostra o array completo
// // console.log(array)
// // // Mostra o elemento de índice x (0-n)
// // console.log(array[2])
// // array[2] = "Jogador"
// // console.log(array)

// // Lista de times top (mais ou menos)
// let times = ["Fluminence", "PSG", "Manchester City", "Bayern de Munique", "Real Madrid"]

// for(let i = 0; i < 2; i++){
//     console.log("O time atual é: ", times[i])
// }

// // .length = tamanho do array
// console.log(times.length)
// console.log("-----------------------------")
// for(let i = 0; i < times.length; i++){
//     console.log("O time atual é: ", times[i])
// }
// console.log("-----------------------------")
// // for Específico p/ arrays
// // index = índice do array (0-n)
// // in - usa o valor do índice (precisa acessar o array)
// // times - define o array a ser percorrido
// for(let index in times){
//     console.log(times[index])
// }
// // of - usa o valor do elemento (já está no array)
// for(let index of times){
//     console.log(index)
// }

// Funções p/ interagir c/ arrays

let frutas = ["Maçã", "Pera", "Banana"]
console.log(frutas)

// Adição de Elementos
// .push() - adiciona um elemento no final do array
frutas.push("Uva")
console.log(frutas)

// .unshift() - adiciona um elemento no início do array
frutas.unshift("Laranja")
console.log(frutas)

// Remoção de Elementos
// .pop() - remove o último elemento do array
frutas.pop()
console.log(frutas)
console.log("'Uva' foi removido")

// .shift() - remove o primeiro elemento do array
frutas.shift()
console.log(frutas)
console.log("'Laranja' foi removido")

// Descobrir índice de um elemento
// .indexOf() - retorna o índice do elemento especificado
let index = frutas.indexOf("Banana")
console.log("O índice de 'Banana' é: ", index)

// Descobrir se um elemento existe
// .includes() - retorna true se o elemento existir, caso contrário, retorna false
console.log("Tem Pitu? ", frutas.includes("Pitu"))
console.log("Tem Maça? ", frutas.includes("Maçã"))

// Ordenação de Elementos
// .sort() - ordena os elementos do array em ordem alfabética
frutas.sort()
console.log(frutas)

// .reverse() - inverte a ordem dos elementos do array
frutas.reverse()
console.log(frutas)

// Conversão de Array para String
// .toString() - converte o array para string, separando os elementos por vírgula
console.log( "Convertido: ", frutas.toString(" "))
// .join() - converte o array para string, separando os elementos por um separador personalizado (neste caso, " - ")
console.log( "Convertido: ", frutas.join(" - "))

// .slice() - retorna uma cópia de uma parte do array, especificada por um intervalo de índices
// (de onde começa, quantos elementos estarão na cópia)
let copiaParte = frutas.slice(0, 2)
console.log("Cópia: ", copiaParte)

// .splice() - remove elementos do array e, opcionalmente, insere novos elementos no lugar
// (de onde começa, quantos elementos serão removidos, elementos a serem inseridos)
let removidos = frutas.splice(1, 1)
console.log("Após Remoção: ", frutas)

frutas.splice(1, 0, "Pitaya", "Melancia", "Morango")
console.log("Após Inserção: ", frutas)

frutas.splice(2, 1, "Jaca")
console.log("Após Substituição: ", frutas)