import { Request, Response } from "express";
import DeleteProductService from "../services/products/DeleteProdutctService";
import GetProductsService from "../services/products/GetProductsService";
import StoreProductService from "../services/products/StoreProductService";

export default class ProductController {
  public async index(request: Request, response: Response) {
    const getProducts = new GetProductsService()
    const products = await getProducts.execute()

    return response.status(200).json(products)
  }

  public async store(request: Request, response: Response) {
    const { nome, descricao, valor, disponivel } = request.body
    const imagem = request.file.filename

    const storeProduct = new StoreProductService()
    const product = await storeProduct.store({
      nome,
      descricao,
      imagem,
      valor,
      disponivel
    })

    return response.json(product)
  }

  public async update(request: Request, response: Response) {

  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params
    const deleteProduct = new DeleteProductService()

    const result = await deleteProduct.execute(id)
    return response.status(200).json(result)
  }
}