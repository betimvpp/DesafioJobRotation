//Questão 1

let indice = 13;
let soma = 0;
for (let k = 0; k < indice; k++) {
    k = k + 1;
    soma = soma + k;
}
console.log(soma);

//Questão 2
let isNumber = 7;

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    if (fib.includes(isNumber)) {
        return console.log(fib, "Esse numero pertence à sequência");
    } else {
        return console.log(fib, "Não pertence à sequência");
    }
}

console.log(fibonacci(isNumber));

//Questão 3
//letra a = 9


//letra b = 128


//letra c = 49

//letra d = 100

//letra e = 13

//letra f = 20


//Questão 4
//R-> Os dois estarão à mesma distância, visto que é um ponto de cruzamento!

//Questão 5
function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    console.log(joinArray);
}
console.log(reverseString("hello"));