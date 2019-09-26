import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  formData:Pedido;

  constructor() { }
}
