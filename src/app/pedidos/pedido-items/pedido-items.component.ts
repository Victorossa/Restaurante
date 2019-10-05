import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PedidoItem } from 'src/app/shared/pedido-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
import { PedidoService } from 'src/app/shared/pedido.service';

@Component({
  selector: 'app-pedido-items',
  templateUrl: './pedido-items.component.html',
  styles: []
})
export class PedidoItemsComponent implements OnInit {
  formData: PedidoItem;
  itemList: Item[];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PedidoItemsComponent>,
    private itemService: ItemService,
    private PedidoService: PedidoService) { }


  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[])
    if(this.data.pedidoItemIndex==null)
    this.formData = {
      PedidoItemID: null,
      PedidoID: this.data.PedidoID,
      ItemID: 0,
      ItemNombre: '',
      Precio: 0,
      Cantidad: 0,
      Total: 0
    }
    else{
      this.formData = Object.assign({},this.PedidoService.pedidosItems[this.data.pedidoItemIndex]);
    }
    
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Precio = 0;
      this.formData.ItemNombre = '';
    }
    else {
      this.formData.Precio = this.itemList[ctrl.selectedIndex - 1].Precio;
      this.formData.ItemNombre = this.itemList[ctrl.selectedIndex - 1].Nombre;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat((this.formData.Cantidad * this.formData.Precio).toFixed(2));
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if(this.data.pedidoItemIndex==null)
      this.PedidoService.pedidosItems.push(form.value);
      else
      this.PedidoService.pedidosItems[this.data.pedidoItemIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: PedidoItem) {
    this.isValid = true;
    if (formData.ItemID == 0)
      this.isValid = false
    else if (formData.Cantidad == 0)
      this.isValid = false;
    return this.isValid;
  }

}
