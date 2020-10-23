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
productsRouter.post('/', validateProduct, productController.store)
productsRouter.put('/:id', validateProduct, productController.update)
productsRouter.delete('/:id', productController.delete)
productsRouter.post('/upload', upload.single('imagem'), productController.uploadImagem)


export default productsRouter