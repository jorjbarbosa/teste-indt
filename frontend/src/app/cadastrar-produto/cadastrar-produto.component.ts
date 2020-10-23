import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoModel } from './produto.model';
@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: ProdutoModel = new ProdutoModel()
  errors: Array<object> = []
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    console.log(this.produto)
    this.produtoService.cadastrarProduto(this.produto)
      .subscribe(produto => console.log(produto), err => {
        this.errors = err.error.errors
      })
  }

}
