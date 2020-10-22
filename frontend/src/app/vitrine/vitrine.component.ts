import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  public produtos
  constructor(private produtoService: ProdutoService) {
    this.produtos = []
  }

  ngOnInit(): void {
    this.listarProdutos()
  }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos
    }, err => {
      console.log(err)
    })
  }

}
