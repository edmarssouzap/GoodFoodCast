import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { PedidoItemsComponent } from './pedidos/pedido-items/pedido-items.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CadastroclienteComponent } from './cadastrocliente/cadastrocliente.component';
import { CadastroempregadoComponent } from './cadastroempregado/cadastroempregado.component';
import { LoginService } from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    PedidoComponent,
    PedidoItemsComponent,
    LoginComponent,
    NotFoundComponent,
    CadastroclienteComponent,
    CadastroempregadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [PedidoItemsComponent],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
