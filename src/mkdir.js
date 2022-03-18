const fs = require('fs')
const { resolve } = require('path')


function make(dir){
    return new Promise((resolve, reject) => {
        dir.forEach((item) => {
            fs.mkdir(`projeto/arquivos/${item}`,{recursive:true},(err) => {
                if(err) return reject(err)
                resolve();
            });
        });
    })
}


module.exports = make;


    

