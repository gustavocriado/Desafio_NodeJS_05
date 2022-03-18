const {writeFile} = require('fs')



function CriarCsv(path,conteudo){
    writeFile(`${path}/arquivo.csv`,conteudo, err => {
        if(err) throw err
       console.log('Arquivo Criado com sucesso')
    })
}

function CriarCsvComEspera(path,final)
{
    setTimeout(function(){
        CriarCsv(path,final)
    },1000)
}


module.exports = CriarCsvComEspera;
