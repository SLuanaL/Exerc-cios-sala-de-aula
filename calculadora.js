const readline = require('readline-sync');

function leroperador() {
    return readline.question("Digite o operador (+, -, *, /): ");
}

function lernumero() {
    return parseFloat(readline.question("Digite um número: "));
}

let operador = leroperador();
let num1 = lernumero();
let num2 = lernumero(); 

let resultado;

switch (operador) {
    case '+':
        resultado = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + resultado);
        break; //sair do switch
        case '-':
        resultado = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + resultado);
        break;
        case '*':
        resultado = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + resultado);
        break;
        case '/':
        if (num2 != 0) {
            resultado = num1 / num2;
            console.log ( num1 + " / " + num2 + " = " + resultado);
} else {
    console.log("Erro: divisão por zero!");

}
break;
default:
    console.log("Operadoe invalido!");
}