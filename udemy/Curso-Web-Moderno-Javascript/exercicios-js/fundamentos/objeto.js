const prod1 = {} //criando um objeto vazio

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90}' // isto sim é um json , json é um formato textual

console.log(prod2)