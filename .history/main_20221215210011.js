//modulo 2 - introducao ao node 

// importação de módulos
const moduloNativo = require('http');
const moduloInstalado = require('axios');
const moduloProprio = require('./minhaFuncao');
const { callbackify } = require('util');

// cachorro Scooby
let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}

module.exports = cachorro;


// Variaveis
var exemplo = function () {
    return 'Oi, eu sou uma função expressa';
}

// IDADE_MINIMA e MAXIMA
const IDADE_MINIMA = 18;
const IDADE_MAXIMA = 99;

// Declaracao de variaveis
let verdadeiro = true;
let nada = null;
let texto = "texto";
let numero = 10;

// Condicionais
let dado = true;
if (dado === true) {
    console.log('É verdadeiro!')
} else {
    console.log('É falso!')
}

// condicionais - javascript
let linguagem = "javascript"
if (linguagem === "javascript") {
    console.log('Estou aprendendo')
} else {
    console.log('Vou aprender mais pra frente')
}

//arrays
let alunos = ["João", "Pedro", "Jorge", "Francisco"]

let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

// método de strings
function dominio(parametro) {
    return "http://" + parametro
}

// Arrow functions
/* dado no console: 
function cincoNumeros() {
    return [1,2,3,4,5];
}
function multiplicarPorDois() {
  return 123 * 2 ;
}
function mostrarNome() {
  return "Meu nome é Ryan Dahl";
}
resposta a seguir
*/
let cincoNumeros = () => [1,2,3,4,5];

let multiplicarPorDois = numero => 123 * 2;

let mostrarNome = () => "Meu nome é Ryan Dahl";

// switch - tenho aulas? 
let dia = "sabado";

function fimDeSemana(dia){
	switch (dia) {
        case 'segunda':
            console.log("você tem aulas!");
            break;
        case 'quarta':
            console.log("você tem aulas!");
            break;
        case 'sexta':
            console.log("você tem aulas!");
            break;
        default:
            console.log("você não tem aulas");
    }
}

fimDeSemana(dia)

//chegou o fim de semana
let dia = 'segunda-feira'

function fimDeSemana(dia) {	
	switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
	    case 'segunda-feira':
    	console.log('Boa semana!');
            break;
	 default:
    	console.log('Bom dia!');
	}
}

//ciclos(for) - papagaio 
function papagaio(texto) {
    for (let i = 0; i < 5; i++) {
        console.log(texto);
    }
}

//callbacks
//dobro, triplo e aplicar
function dobro(number){
    return number * 2;
}
function triplo(number){
    return number * 3;
}
function aplicar(valor, callback){
    return callback(valor);
}

//calculadora
function somar(n1, n2){
    return n1 + n2;
}
function subtrair(n1, n2){
    return n1 - n2;
}
function multiplicar(n1, n2){
    return n1 * n2;
}
function dividir(n1, n2){
    return n1 / n2;
}
function calculadora(valor1, valor2, callback){
    return callback(valor1, valor2);
}

//adicionarHTTP
function adicionarHttp(url) {
    return "http://" + url
}
function processar(listaUrl, callback){
    const novoArray = []
    for(let i = 0; i < listaUrl.length; i++){
        const urlModificada = callback(listaUrl[i])

        novoArray.push(urlModificada)
    }
    return novoArray
}

//metodos de array II
//filter
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(numero){
    return numero > 18;
});
console.log(maiores);

//for in for of
//bart
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
};
for (let dados in bart){
    console.log(bart[dados]);
};

//horizontal pra vertical
let frase = "Essa semana vou no colearning";
for (let vertical of frase){
    console.log(vertical);
};

//Date object
let data = new Date('February 13, 1996');
data.setDate(13);
data.setMonth(2);
data.setFullYear(1996);
console.log(data);

//valores de descontrucao
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [, bariloche, ,china] = destinosIncriveis;