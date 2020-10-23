import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: any
  msg: string = ''
  errors: Array<any> = []
  error: string = ''
  id: string
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.getProduto(this.id)
  }
  getProduto(id: string) {
    this.produtoService.getProduto(id)
      .subscribe(produto => {
        this.produto = produto
      })
  }

  updateProduto(id: string) {
    this.produtoService.updateProduto(id, this.produto)
      .subscribe(produto => {
        if (produto)
          this.msg = 'Produto atualizado com sucesso'
      }, err => {
        this.errors = err.error.errors
      })
  }
}
