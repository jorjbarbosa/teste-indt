import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import ProductController from '../controllers/ProductController'

const productsRouter = Router()
const upload = multer(uploadConfig)
const productController = new ProductController()

productsRouter.get('/', productController.index)
productsRouter.post('/', upload.single('imagem'), productController.store)

export default productsRouter