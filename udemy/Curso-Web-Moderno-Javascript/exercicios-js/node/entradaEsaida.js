const anonimo = process.argv.indexOf('-a') !== -1 // retorna true or false
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // retirando \n do dado, \n que vem do enter ao enviar no console

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}

// execute este arquivo no node passando o parametro "-a"
//example: node entradaEsaida.js -a or -b