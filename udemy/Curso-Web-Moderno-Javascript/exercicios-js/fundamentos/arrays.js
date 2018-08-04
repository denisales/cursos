const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10;
console.log(valores)
console.log(valores.length) // pega o tamanho do array

valores.push({id: 3}, false, null, 'teste') // push adiciona novos valores no array, o arrya pode conter varios tipos de valores
console.log(valores)

console.log(valores.pop()) //pop saca/retorna/tira ultimo valor do array
delete valores[0] // deleta valor especificado do array
console.log(valores)

console.log(typeof valores) // typeof retorna o tipo