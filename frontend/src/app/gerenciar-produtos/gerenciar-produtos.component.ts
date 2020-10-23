import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {

  produtos: Array<Object>
  msg: string = ''
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

  deletarProduto(id: string) {

    if (confirm('Deseja excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe((res) => {
        if (res) {
          this.msg = 'Produto excluído com sucesso'
          this.listarProdutos(false)
        }
      }, err => {
        console.log(err)
      })
    }
  }

}
