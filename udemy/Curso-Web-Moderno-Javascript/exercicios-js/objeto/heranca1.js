const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

// __proto__ procurar no pai
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // esse atributo aponta para Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // o prototipo do Object.prototype é igual a null


function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)