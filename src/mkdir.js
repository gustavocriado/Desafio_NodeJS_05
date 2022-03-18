const fs = require('fs')
var file = require('./writeFile.js')

function make(dir, final){
    dir.forEach((item) => {
        fs.mkdir(`projeto/arquivos/${item}`,{recursive:true},(err) => {
            if(err) throw err
            console.log('diretorio criado com sucesso:', item)
        })
    })
    
    file('projeto/arquivos/csv',final)
}

module.exports = make;


    

