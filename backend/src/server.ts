import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import AppError from './errors/AppError'

import './database'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(__dirname + '/public/uploads'))
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      status: 'error',
      error: err.message
    })
    console.error(err)
    return response.status(500).json({
      status: 'error',
      message: 'Ocorreu um erro interno'
    })
})

app.use((request: Request, response: Response) => {
  return response.status(404).json({
    error: 'Endpoint não encontrado'
  })
})
app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333')
})