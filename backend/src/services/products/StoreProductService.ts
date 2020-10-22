import { getRepository } from 'typeorm'

import Product from '../../models/Product'

interface Request {
  nome: string
  descricao: string
  imagem: string
  valor: number
  disponivel: boolean
}

export default class StoreProductService {
  public async store(request: Request): Promise<Product> {
    const productsRepository = getRepository(Product)
    const product = productsRepository.create(request)
    await productsRepository.save(product)

    return product
  }
}