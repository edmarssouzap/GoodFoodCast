import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/shared/item.model';
import { ItemService } from 'src/app/shared/item.service';
import { PedidoItem } from 'src/app/shared/pedido-item.model';
import { NgForm } from '@angular/forms';
import { PedidoService } from 'src/app/shared/pedido.service';

@Component({
  selector: 'app-pedido-items',
  templateUrl: './pedido-items.component.html',
  styleUrls: ['./pedido-items.component.css'],
})
export class PedidoItemsComponent implements OnInit {
  formDados: PedidoItem;
  listaItem: Item[];
  eValido: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PedidoItemsComponent>,
    private itemService: ItemService,
    private pedidoSerice: PedidoService
  ) {}

  ngOnInit(): void {
    this.itemService
      .obterListaItem()
      .subscribe((res) => (this.listaItem = res as Item[]));

    if (this.data.pedidoItemIndex == null) {
      this.formDados = {
        pedidoItemId: null,
        pedidoId: this.data.pedidoId,
        itemId: 0,
        itemNome: '',
        preco: 0,
        quantidade: 0,
        total: 0,
      };
    } else {
      this.formDados = Object.assign(
        {},
        this.pedidoSerice.pedidoItems[this.data.pedidoItemIndex]
      );
    }
  }

  atualizarPreco(event: any) {
    if (event.selectedIndex == 0) {
      this.formDados.preco = 0;
      this.formDados.itemNome = '';
    } else {
      this.formDados.preco = this.listaItem[event.selectedIndex - 1].preco;
      this.formDados.itemNome = this.listaItem[event.selectedIndex - 1].nome;
    }

    this.atualizarTotal();
  }

  atualizarTotal() {
    this.formDados.total = parseFloat(
      (this.formDados.quantidade * this.formDados.preco).toFixed(2)
    );
  }

  onSubmit(form: NgForm) {
    if (this.validarForm(form.value)) {
      if (this.data.ItemIndex == null)
        this.pedidoSerice.pedidoItems.push(form.value);
      else this.pedidoSerice.pedidoItems[this.data.pedidoItemIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validarForm(formDados: PedidoItem) {
    this.eValido = true;
    if (formDados.itemId == 0) this.eValido = false;
    else if (formDados.quantidade == 0 || formDados.quantidade < 0) this.eValido = false;
    return this.eValido;
  }
}
