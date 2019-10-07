import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';
import { PedidoItem } from './pedido-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  formData: Pedido;
  pedidosItems: PedidoItem[];

  constructor(private http: HttpClient) { }

  saveOrUpdatePedido() {
    var body = {
      ...this.formData,
      pedidoItems : this.pedidosItems
    };
    return this.http.post(environment.apiURL + '/Pedido', body);
  }
}
