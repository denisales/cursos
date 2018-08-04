const escola = 'Cod3r';

console.log(escola.charAt(4)); // retorna o caracter da posicao setada

console.log(escola.charCodeAt(3)); // retorna o caractere no valor da tabela ASCC

console.log(escola.indexOf('r')); // retorna a posicao do caracter dentro da string

console.log(escola.substring(1)); // retorna a string do valor 1 para cima

console.log(escola.substring(0, 3)); // retorna a string do valor 0 ate o indice 3  sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!")); //concatenacao
console.log('Escola ' + escola + "!" ); //concatenacao

console.log(escola.replace(3, 'e')); // substitui o valor do indice da string

console.log(escola.replace(/\w/g, 'e')); // Expressao regular, substitua todos os indices da string pela letra e

console.log('Ana, Maria, Pedro'.split(',')); //transofrma minha string em array, passando o separador