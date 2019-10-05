import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { NgForm } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PedidoItemsComponent } from '../pedido-items/pedido-items.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: []
})
export class PedidoComponent implements OnInit {

  constructor(private service: PedidoService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      PedidoID: null,
      PedidoNo: Math.floor(10000 + Math.random() * 900000).toString(),
      ClienteID: 0,
      PMetodo: '',
      Gtotal: 0
    };
    this.service.pedidosItems = [];

  }

  AgregarOEditarPedido(pedidoItemIndex, PedidoID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { pedidoItemIndex, PedidoID }
    this.dialog.open(PedidoItemsComponent, dialogConfig).afterClosed().subscribe(res=> {
      this.updateGrandTotal();
    });
  }

  onDeletePedidoItem(pedidoItemID: number, i: number) {
    this.service.pedidosItems.splice(i, 1);
    this.updateGrandTotal();
  }


  updateGrandTotal() {
    this.service.formData.Gtotal = this.service.pedidosItems.reduce((prev, curr) => {
      return prev + curr.Total;      
    }, 0);
    this.service.formData.Gtotal = parseFloat(this.service.formData.Gtotal.toFixed(2));
  }

}
