import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../shared/pedido.service';
import { Pedido } from '../shared/pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})
export class PedidosComponent implements OnInit {

  pedidoList;

  constructor(private service: PedidoService,
    private router: Router) { }

  ngOnInit() {
    this.service.getPedidosList().then(res => this.pedidoList = res);
  }

  openForEdit(PedidoID: number) {
    this.router.navigate(['/pedido/edit/' + PedidoID])
  }
}
