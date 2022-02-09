const express = require('express')
const app = express()

const cepPromise = require('cep-promise')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/:cep', (requisicao, resposta)=>{
    
    cepPromise(requisicao.params.cep)
    .then((result)=>{
        resposta.send(result)
    })
    .catch((err)=>{
        resposta.send(err)
    })
})

app.listen(3001)