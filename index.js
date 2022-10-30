// const appObject =require("./app")
// appObject.testFunction
const fs = require("fs")
fs.writeFile("./my-file.txt","my test",()=>{})
    for(let i=0; i<101 ; i++){
    fs.appendFile("./my-file.txt",`${i}`,()=>{})
    }