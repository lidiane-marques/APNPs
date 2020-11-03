const express = require("express")
const app = express()

app.get('/',function(req,res){
   res.send("---OLÁ MUNDO---")
})

app.get('/msg',function(req,res){
    res.send("essa mensagem é automatica")
})

app.get('/layout',function(req,res){
    res.send("esse é o nove layout")
})

app.listen(3000,function(){
    console.log("conexão inicialiada")
})
