const produto = [
    {nome: 'Noteboook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: false},
    {nome: 'Camera', preco: 500, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produto.filter(function(p){ //recebe uma funcao callback
    return p.preco > 2400 // retorna um array de acordo com a condicao
}))

console.log('====================')

console.log(produto.filter(function(p){ 
    return p.fragil == true && p.preco >= 500
}))

console.log('====================')
// funcao que retorna os produtos caros e fragil
const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

