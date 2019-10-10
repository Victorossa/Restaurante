import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../shared/pedido.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})
export class PedidosComponent implements OnInit {

  pedidoList;

  constructor(private service : PedidoService) { }

  ngOnInit() {
    this.service.getPedidosList().then(res => this.pedidoList = res);
  }
}
