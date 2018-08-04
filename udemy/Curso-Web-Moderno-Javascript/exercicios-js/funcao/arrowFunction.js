let dobro = function() {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

ola = function(){
    return 'Olá'
}

ola = () => 'Olá'