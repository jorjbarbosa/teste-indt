import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import ProductController from '../controllers/ProductController'
import validateProduct from '../validators/ProductValidator'

const productsRouter = Router()
const upload = multer(uploadConfig)
const productController = new ProductController()

productsRouter.get('/', productController.index)
productsRouter.get('/:id', productController.show)
productsRouter.post('/', upload.single('imagem'), validateProduct, productController.store)
productsRouter.put('/:id', upload.single('imagem'), validateProduct, productController.update)
productsRouter.delete('/:id', productController.delete)

export default productsRouter