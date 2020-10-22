import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './produto.service';
import { VitrineComponent } from './vitrine/vitrine.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdutoService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
