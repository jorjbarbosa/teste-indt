import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProdutoModel } from './cadastrar-produto/produto.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  BASE_URL: string = 'http://localhost:3333/api'
  constructor(private http: HttpClient) { }

  listarProdutos(completo: boolean): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products`)
  }

  cadastrarProduto(produto: ProdutoModel): Observable<any> {
    return this.http.post(`${this.BASE_URL}/products`, produto)
  }

  deletarProduto(id: string) {
    return this.http.delete(`${this.BASE_URL}/products/${id}`)
  }

  getProduto(id: string) {
    return this.http.get(`${this.BASE_URL}/products/${id}`)
  }

  updateProduto(id, produto) {
    return this.http.put(`${this.BASE_URL}/products/${id}`, produto)
  }

  uploadArquivo(arquivo: File) {
    const formData: FormData = new FormData();
    formData.append('imagem', arquivo, arquivo.name);
    return this.http.post(`${this.BASE_URL}/products/upload`, formData )
  }
}
