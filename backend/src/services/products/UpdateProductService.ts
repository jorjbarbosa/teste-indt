import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import Product from "../../models/Product";

interface Request {
  nome: string
  descricao: string
  imagem: any
  valor: number
  disponivel: boolean
}
export default class UpdateProductService
{
  public async update(id: string, request: Request): Promise<Product>{
    const productsRepository = getRepository(Product)
    const product = await productsRepository.findOne(id)
    if (!product)
      throw new AppError('Produto não encontrado', 404)

    product.nome = request.nome
    product.descricao = request.descricao
    product.imagem = !request.imagem ? product.imagem : request.imagem
    product.valor = request.valor
    product.disponivel = request.disponivel

    productsRepository.save(product)

    return product
  }
}