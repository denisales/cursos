console.log(typeof Array, typeof new Array, typeof []) //imprime function, obj, obj

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // adicionar um novo elemento dentro de um array, mais adequado para substituir um valor
aprovados.push('Abia') // mais apropriado para adicionar valores ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array, nao retorna um novo array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // (indice de trabalho inicio, exclui qts de elementos)
console.log(aprovados)