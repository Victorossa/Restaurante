import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { PedidoItem } from 'src/app/shared/pedido-item.model';

@Component({
  selector: 'app-pedido-items',
  templateUrl: './pedido-items.component.html',
  styles: []
})
export class PedidoItemsComponent implements OnInit {
formData:PedidoItem;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<PedidoItemsComponent>) { }

  ngOnInit() {
  }

}
