import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { PedidoItemsComponent } from './pedidos/pedido-items/pedido-items.component';
import { PedidoService } from './shared/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    PedidoComponent,
    PedidoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
