import { Router } from 'express'
import StoreProductService from '../services/products/StoreProductService'

const productsRouter = Router()

productsRouter.post('/', async (request, response) => {
    try {
        const storeProduct = new StoreProductService()
        const product = await storeProduct.store(request.body)
        return response.json(product)
    } catch (err) {
        return response.status(400).json({error: err.message})
    }
})

export default productsRouter