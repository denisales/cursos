function criarProduto( nome, preco){
    return{
        nome: nome,// ou só nome,
        preco: preco, // ou só preco,
        desconto: 0.1
    }
}

console.log(criarProduto('coca',5.00) )
console.log(criarProduto('dolly',5.00) )

console.log(typeof criarProduto())