const express = require("express")
const app = express()

app.get('/',function(req,res){
   res.send("---OLÁ MUNDO---")
})



app.listen(3000,function(){
    console.log("conexão inicialiada na porta 3000")
})