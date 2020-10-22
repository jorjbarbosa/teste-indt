import { Request, Response } from "express";
import { validationResult } from "express-validator";
import DeleteProductService from "../services/products/DeleteProdutctService";
import GetProductsService from "../services/products/GetProductsService";
import ShowProductService from "../services/products/ShowProductService";
import StoreProductService from "../services/products/StoreProductService";
import UpdateProductService from "../services/products/UpdateProductService";

export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getProducts = new GetProductsService()
    const products = await getProducts.execute()

    return response.status(200).json(products)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showProduct = new ShowProductService()

    const product = await showProduct.show(id)

    return response.status(200).json(product)
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const errors = validationResult(request)
    if (!errors.isEmpty())
      return response.status(400).json({ errors: errors.array() });
      
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

  public async update(request: Request, response: Response): Promise<Response> {
    const updateProduct = new UpdateProductService()
    const { id } = request.params
    const { nome, descricao, valor, disponivel } = request.body
    const imagem = !request.file ? null : request.file.filename

    const product = await updateProduct.update(id, {
      nome,
      descricao,
      imagem,
      valor,
      disponivel
    })

    return response.json(product)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteProduct = new DeleteProductService()

    const result = await deleteProduct.execute(id)
    return response.status(200).json(result)
  }
}