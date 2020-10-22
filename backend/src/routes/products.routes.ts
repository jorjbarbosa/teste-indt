import { Request, Response, Router } from 'express'
import GetProductsService from '../services/products/GetProductsService'
import StoreProductService from '../services/products/StoreProductService'
import multer from 'multer'
import uploadConfig from '../config/upload'

const productsRouter = Router()
const upload = multer(uploadConfig)

productsRouter.get('/', async (request: Request, response: Response) => {
  try {
    const getProducts = new GetProductsService()
    const products = await getProducts.execute()

    return response.status(200).json(products)
  } catch (err) {
    console.log(err)
    return response.status(500).json({ error: err.message })
  }
})

productsRouter.post('/', upload.single('imagem'), async (request: Request, response: Response) => {
  const { nome, descricao, valor, disponivel } = request.body
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
    return response.status(400).json({ error: err.message })
  }
})

export default productsRouter