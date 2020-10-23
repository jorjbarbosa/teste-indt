import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {

  produtos: Array<Object>
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos(true)
  }

  listarProdutos(tipo: boolean) {
    this.produtoService.listarProdutos(tipo).subscribe(produtos => {
      this.produtos = produtos
    }, err => {
      console.log(err)
    })
  }

}
