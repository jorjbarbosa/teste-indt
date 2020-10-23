import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './produto.service';
import { VitrineComponent } from './vitrine/vitrine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    NavbarComponent,
    ListaProdutosComponent,
    ProdutoComponent,
    GerenciarProdutosComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ProdutoService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
