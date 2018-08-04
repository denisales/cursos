const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const pegaPaisChina = f => f.pais == 'China'
const pegaGeneroFeminino = f => f.genero == 'F'
const pegaMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// pegar mulher chinesa com menor salario
axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios.filter(pegaPaisChina).filter(pegaGeneroFeminino).reduce(pegaMenorSalario))
})

