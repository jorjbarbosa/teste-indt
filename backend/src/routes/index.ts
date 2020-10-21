import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({msg: 'Servidor rodando'})
})

export default routes