const notas = [6, 9, 8, 7, 6]


for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Denis',
    sobrenome: 'Sales',
    idade: '22',
    peso: '62'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
