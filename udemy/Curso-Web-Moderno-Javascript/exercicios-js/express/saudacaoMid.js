function saudacao(nome){ // retorna uma funcao middleware
    return function(req, res, next) {
        console.log(`Seja bem vindo ${nome}.`)
        next();
    }
};

module.exports = saudacao