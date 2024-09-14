let arrayFibonacci = [];
let numSequencia = parseInt(prompt("Digite um numero inteiro positivo"))
let numLimiteSequencia = parseInt(prompt("Digite até onde a sequencia ira ir"))

arrayFibonacci[0] = numSequencia - 1;
arrayFibonacci[1] = numSequencia;

for (let i = 2; i < numLimiteSequencia; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
}

console.log("A sequencia ficou assim: " + arrayFibonacci)