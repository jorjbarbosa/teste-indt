import { getRepository } from 'typeorm'
import AppError from '../../errors/AppError'
import Product from '../../models/Product'

export default class DeleteProductService {
  public async execute(id: string): Promise<Product> {
    const productRepository = getRepository(Product)
    const product = await productRepository.findOne(id)

    if (!product)
      throw new AppError('Produto não encontrado', 404)

    const result = await productRepository.remove(product)

    return result
  }
}