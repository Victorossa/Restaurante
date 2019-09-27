import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';
import { PedidoItem } from './pedido-item.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  formData:Pedido;
  pedidosItems:PedidoItem[];

  constructor() { }
}
