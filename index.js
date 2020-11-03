const express = require("express")
const app = express()

app.get('/',function(req,res){
   res.send("---OLÁ MUNDO---")
})

app.get('/msg',function(req,res){
    res.send("essa mensagem é automatica")
})

app.listen(3000,function(){
    console.log("conexão inicialiada")
})
