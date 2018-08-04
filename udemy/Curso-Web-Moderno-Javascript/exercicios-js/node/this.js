console.log(this === global)// false
console.log(this === module)// false
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // colocando valor dentro do objeto global
}

logThis()