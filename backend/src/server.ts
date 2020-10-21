import express from 'express'

const app = express();

app.get('/', (request, response) => {
    return response.json({msg: 'Servidor rodando'})
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})