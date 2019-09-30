import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { NgForm } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: []
})
export class PedidoComponent implements OnInit {

  constructor(private service:PedidoService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.resetForm();
    this.service.formData = {
      PedidoID:null,
      PedidoNo:Math.floor(10000+Math.random()*900000).toString(),
      ClienteID:0,
      PMetodo:'',
      Gtotal:0 
    };
    this.service.pedidosItems = [];

  }

  AgregarOEditarPedido(pedidoItemIndex,PedidoID){
    
  }

}
