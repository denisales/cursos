const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
console.log(carrinho)

//retornar um array apenas com os precos
const paraObjeto = json => JSON.parse(json)
const retornaPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(retornaPreco)
console.log(resultado)
