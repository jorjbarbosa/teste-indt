import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

  @Input()
  nome: string
  @Input()
  descricao: string
  @Input()
  valor: string
  @Input()
  imagem: string

  constructor() { }

  ngOnInit(): void {
  }

}
