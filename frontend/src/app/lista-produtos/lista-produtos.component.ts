import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  produtos: Array<Object>
  ngOnInit(): void {
    this.listarProdutos(false)
  }

  listarProdutos(tipo: boolean) {
    this.produtoService.listarProdutos(tipo).subscribe(produtos => {
      this.produtos = produtos
    }, err => {
      console.log(err)
    })
  }

}
