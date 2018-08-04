// Funcao sem retorno
function imprimirSoma (a, b){
    console.log(a + b)
};
// chamando a funcao e passando os parametros
imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 3 , 4 , 5 ,6) // soma mas ignora o resto
imprimirSoma() // NaN

// Funcao com retorno
function soma(a,b = 0){ // passou um valor inicial
    return a + b
};

console.log(soma(2,10))
console.log(soma(2))
console.log(soma()) // NaN pois o primeiro valor nao foi tratado undefined + 1