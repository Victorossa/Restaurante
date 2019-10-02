import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pedido-items',
  templateUrl: './pedido-items.component.html',
  styles: []
})
export class PedidoItemsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<PedidoItemsComponent>) { }

  ngOnInit() {
  }

}
