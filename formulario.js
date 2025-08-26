let readline = require('readline-sync');

//  Coletar nome
let nome = readline.question("Digite seu nome: ");

// Sobre Data de Nascimento
let dia = readline.questionInt("Dia do nascimento (DD): ");
let mes = readline.questionInt("Mês do nascimento (MM): ");
let ano = readline.questionInt("Ano do nascimento (AAAA): ");

// Inserir Telefone
let telefone = readline.question("Digite seu telefone: ");

// Tem animal em casa?
let temAnimal = readline.keyInYNStrict("tem animal em casa?");

// Se sim, perguntar quantos animais
let quantidadeAnimais = 0;
if (temAnimal) {
  quantidadeAnimais = readline.questionInt("Quantos animais você tem? ");
}

// Calcular se é maior de idade
let hoje = new Date();
let dataNascimento = new Date(ano, mes - 1, dia); // mês começa do zero no JS
let idade = hoje.getFullYear() - dataNascimento.getFullYear();
let mesAtual = hoje.getMonth();
let diaAtual = hoje.getDate();

let isMaior = false;
if (
  idade > 18 ||
  (idade === 18 && (mesAtual > dataNascimento.getMonth() ||
  (mesAtual === dataNascimento.getMonth() && diaAtual >= dataNascimento.getDate())))
) {
  isMaior = true;
}

// Imprimir informações
console.log("\n--- INFORMAÇÕES DO USUÁRIO ---");
console.log(`Nome: ${nome}`);
console.log(`Data de Nascimento: ${dia}/${mes}/${ano}`);
console.log(`Idade: ${idade} anos`);
console.log(`Maior de idade: ${isMaior ? "Sim" : "Não"}`);
console.log(`Telefone: ${telefone}`);
console.log(`Tem animal em casa: ${temAnimal ? "Sim" : "Não"}`);
if (temAnimal) {
  console.log(`Quantidade de animais: ${quantidadeAnimais}`);
}
