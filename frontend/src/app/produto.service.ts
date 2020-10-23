import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listarProdutos(completo: boolean): Observable<any> {
    return this.http.get('http://localhost:3333/api/products', {
      params: {
        
      }
    })
  }
}
