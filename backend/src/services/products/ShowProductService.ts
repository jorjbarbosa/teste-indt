import { getRepository } from 'typeorm'
import AppError from '../../errors/AppError'
import Product from '../../models/Product'

export default class ShowProductService {
  public async show(id: string): Promise<Product> {
    const productRepository = getRepository(Product)
    const product = await productRepository.findOne(id)

    if (!product)
      throw new AppError('Produto não encontrado', 404)

    return product
  }
}