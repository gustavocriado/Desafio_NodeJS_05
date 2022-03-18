const {writeFile} = require('fs')

function CriarCsv(path,conteudo){
    writeFile(`${path}/arquivo.csv`,conteudo, err => {
        if(err) throw err
        console.log('Arquivo Criado com sucesso')
    })
}

module.exports = CriarCsv;
//