import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {
    path: 'gerenciar-produtos',
    component: VitrineComponent
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
