import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PedidoItem } from 'src/app/shared/pedido-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-pedido-items',
  templateUrl: './pedido-items.component.html',
  styles: []
})
export class PedidoItemsComponent implements OnInit {
  formData: PedidoItem;
  itemList: Item[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PedidoItemsComponent>,
    private itemService: ItemService) { }


  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[])
    this.formData = {
      PedidoItemID: null,
      PedidoID: this.data.PedidoID,
      ItemID: 0,
      ItemNombre: '',
      Precio: 0,
      Cantidad: 0,
      Total: 0
    }
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Precio = 0;
      this.formData.ItemNombre = '';
    }
    else{
      this.formData.Precio = this.itemList[ctrl.selectedIndex-1].Precio;
      this.formData.ItemNombre = this.itemList[ctrl.selectedIndex-1].Nombre;
    }
  }

  updateTotal(){
    this.formData.Total = parseFloat((this.formData.Cantidad * this.formData.Precio).toFixed(2));
  }


}
