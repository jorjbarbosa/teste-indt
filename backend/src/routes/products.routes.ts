import { Router } from 'express'
import StoreProductService from '../services/products/StoreProductService'
import multer from 'multer'
import uploadConfig from '../config/upload'

const productsRouter = Router()
const upload = multer(uploadConfig)

productsRouter.post('/', upload.single('imagem'), async (request, response) => {
    const {nome, descricao, valor, disponivel} = request.body
    const imagem = request.file.filename

    try {
        const storeProduct = new StoreProductService()
        const product = await storeProduct.store({
            nome,
            descricao,
            imagem,
            valor,
            disponivel
        })
        
        return response.json(product)
    } catch (err) {
        return response.status(400).json({error: err.message})
    }
})

export default productsRouter