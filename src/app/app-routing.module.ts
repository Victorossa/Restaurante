import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';


const routes: Routes = [
  {path:'',redirectTo:'pedido',pathMatch:'full'},
  {path:'pedidos',component:PedidosComponent},
  {path:'pedido',children:[
    {path:'',component:PedidoComponent},  
    {path:'edit/:id',component:PedidoComponent}  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
