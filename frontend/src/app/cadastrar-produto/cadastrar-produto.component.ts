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
  arquivo: File = null;
  msg: string = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    this.produtoService.cadastrarProduto(this.produto)
      .subscribe(produto => {
        if (produto) {
          this.produto = new ProdutoModel()
          this.errors = []
          this.msg = 'Produto cadastrado com sucesso!'
        }
      }, err => {
        this.errors = err.error.errors
      })
  }

  handleFileInput(files: FileList) {
    this.arquivo = files.item(0);
    this.uploadFileToActivity()
  }

  uploadFileToActivity() {
    this.produtoService.uploadArquivo(this.arquivo).subscribe((data: any) => {
      this.produto.imagem = data.filename
      console.log(this.produto.imagem)
      }, error => {
        this.errors.push({msg: 'Ocorreu um erro ao fazer upload do arquivo'})
      });
  }

}
