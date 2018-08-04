Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    {nome: 'Noteboook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: false},
    {nome: 'Camera', preco: 500, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]
console.log('====================')
// funcao que retorna os produtos caros e fragil
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))

