import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: GerenciarProdutosComponent
  },
  {
    path: 'produtos/cadastrar',
    component: CadastrarProdutoComponent
  },
  {
    path: '.',
    component: VitrineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
