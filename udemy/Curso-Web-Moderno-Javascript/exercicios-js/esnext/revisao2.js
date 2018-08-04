// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
const lexico3 = function(){ console.log(this === exports)}

lexico1()
lexico3()
lexico2()

// paramentros default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total
}

console.log(total(1,2,3,4,5))