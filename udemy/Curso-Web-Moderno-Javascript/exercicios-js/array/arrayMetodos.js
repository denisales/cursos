const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro !! - remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca um elemento no primeiro indice do array
console.log(pilotos)

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array apartir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)