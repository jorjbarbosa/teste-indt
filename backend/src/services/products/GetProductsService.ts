import { getRepository } from 'typeorm'
import Product from '../../models/Product'

export default class GetProductsService {
  public async execute() {
    const productsRepository = getRepository(Product)
    const products = await productsRepository.find()
    return products
  }
}
