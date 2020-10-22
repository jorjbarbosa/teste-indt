import { DeleteResult, getRepository } from 'typeorm'
import Product from '../../models/Product'

export default class DeleteProductService {
  public async execute(id: string): Promise<Product> {
    const productRepository = getRepository(Product)
    const product = await productRepository.findOne(id)
    
    if (!product)
      throw new Error('Produto não encontrado')

    const result = await productRepository.remove(product)
    
    return result
  }
}