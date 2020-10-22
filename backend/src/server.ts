import 'reflect-metadata'
import express, { request, response } from 'express'
import routes from './routes'
import './database'

const app = express();
app.use(express.json())
app.use('/files', express.static(__dirname + '/public/uploads'))
app.use(routes)

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333')
})