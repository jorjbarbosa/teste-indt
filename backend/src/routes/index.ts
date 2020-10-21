import { Router } from 'express'
import productsRouter from './products.routes'

const routes = Router()

routes.use('/api/products', productsRouter)

export default routes