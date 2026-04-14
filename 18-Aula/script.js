// arrays
let barquinho = ["Pedro", "Tiago", "João"];
let profissoes = ["Pescador", "Contador", "Carpinteiro"];

console.log("0 ", barquinho[0], "é ", profissoes[0]);

// objects
// { chave : valor }

let cantor = {
    // chave : "valor"
    nome : "Menos é Mais" ,
    generoMusical : "Pagode" ,
    estaVivo : true ,
    idade : 10
}
// Objeto Inteiro
console.log(cantor);
// Chave do Objeto
console.log(cantor.nome);
console.log(cantor.generoMusical);
console.log(cantor.estaVivo);
console.log(cantor.idade);

// Acessando Prioridades
let intervalo = {
    hInício : "15h00",
    hFim : "15h20",
    local : "Pátio",
    duracao : "20 min"
}
console.log("O intervalo inicia às :", intervalo["hInício"]);

// Alterando um Objeto
let garrafa = { } // Vazio
console.log(garrafa);

// Adicionando Propriedades
garrafa.cor = "Azul";
garrafa.tamanho = "600mL";
garrafa.preco = 8.5;
garrafa["marca"] = "Suco Glub";

console.log(garrafa);

// Alterando Valores
garrafa.cor = "Rosa";
garrafa["marca"] = "Topoué";
console.log(garrafa);

// Objetos
let animal = {
    // Propriedades
    nome : "Tom",
    especie : "Gato",
    raca : "Adidas",

    // Métodos
    falar : function(){
        console.log("Miau");
    },
    andar : () =>{
        console.log("'toc' 'toc' 'toc' 'toc'");
    },
    dormir : () => {
        console.log("ZZZZZZZZZZZZZZZZ");
    }
}
// Mostrando valor através da propriedade
console.log(animal.nome);
// Mostra texto da função
console.log(animal.falar);
// Executa a função
animal.falar();