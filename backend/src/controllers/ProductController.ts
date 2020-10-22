import { Request, Response } from "express";
import DeleteProductService from "../services/products/DeleteProdutctService";
import GetProductsService from "../services/products/GetProductsService";
import StoreProductService from "../services/products/StoreProductService";

export default class ProductController {
  public async index(request: Request, response: Response) {
    try {
      const getProducts = new GetProductsService()
      const products = await getProducts.execute()

      return response.status(200).json(products)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: err.message })
    }
  }

  public async store(request: Request, response: Response) {
    const { nome, descricao, valor, disponivel } = request.body
    const imagem = request.file.filename

    try {
      const storeProduct = new StoreProductService()
      const product = await storeProduct.store({
        nome,
        descricao,
        imagem,
        valor,
        disponivel
      })

      return response.json(product)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  public async update(request: Request, response: Response) {

  }

  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params
      const deleteProduct = new DeleteProductService()

      const result = await deleteProduct.execute(id)
      return response.status(200).json(result)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: err.message })
    }
  }
}