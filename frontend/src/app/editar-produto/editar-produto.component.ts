import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Object
  msg: string = ''
  error: string = ''
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProduto(6)
  }
  getProduto(id) {
    this.produtoService.getProduto(id)
      .subscribe(produto => {
        this.produto = produto
        console.log(this.produto)
      })
  }

  updateProduto(id) {
    this.produtoService.updateProduto(id, this.produto)
      .subscribe(produto => {
        if (produto)
          this.msg = 'Produto atualizado com sucesso'
      }, err => {
        this.error = err.error
      })
  }
}
