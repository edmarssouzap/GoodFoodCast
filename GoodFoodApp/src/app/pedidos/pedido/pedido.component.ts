import { Pedido } from '../../shared/model/pedido.model';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/shared/model/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { PedidoItemsComponent } from '../pedido-items/pedido-items.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  clienteList: Cliente[];
  eValido: boolean = true;

  constructor(
    public pedidoService: PedidoService,
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router,
    private currentRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let PedidoId = this.currentRouter.snapshot.paramMap.get('id');
    if(PedidoId == null){
      this.resetarForm();
    }
    else{
      this.pedidoService.obterPedidoPeloId(parseInt(PedidoId)).subscribe(res => {
        console.log(res);
        this.pedidoService.formDados = res.pedido;
        this.pedidoService.pedidoItems = res.pedidoDetails;
      });
    }
    this.clienteService
      .obterListaCliente()
      .subscribe((res) => (this.clienteList = res as Cliente[]));
  }

  resetarForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.pedidoService.formDados = {
      pedidoId: null,
      numeroPedido: Math.floor(100000 + Math.random() * 900000).toString(),
      clienteId: 0,
      meioPagamento: '',
      valorTotal: 0,
      itemPedidoDeletadoIds:''
    };
    this.pedidoService.pedidoItems = [];
  }

  AdicionarOuEditarItemPedido(pedidoItemIndex, pedidoId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { pedidoItemIndex, pedidoId };
    this.dialog
      .open(PedidoItemsComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.AtualizarValorTotal();
      });
  }

  onDeletarItemPedido(pedidoItemId: number, index: number) {
    if(pedidoItemId !==null){
      this.pedidoService.formDados.itemPedidoDeletadoIds += pedidoItemId + ',';
    }
    this.pedidoService.pedidoItems.splice(index, 1);
    this.AtualizarValorTotal();
  }

  AtualizarValorTotal() {
    this.pedidoService.formDados.valorTotal = this.pedidoService.pedidoItems.reduce(
      (prev, curr) => {
        return prev + curr.total;
      },
      0
    );

    this.pedidoService.formDados.valorTotal = parseFloat(
      this.pedidoService.formDados.valorTotal.toFixed(2)
    );
  }

  validarForm() {
    this.eValido = true;
    if (this.pedidoService.formDados.clienteId == 0) this.eValido = false;
    else if (this.pedidoService.pedidoItems.length == 0) this.eValido = false;
    return this.eValido;
  }

  onSubmit(form: NgForm) {
    if (this.validarForm()) {
      this.pedidoService.salvarOuAtualizarPedido().subscribe((res) => {
        this.resetarForm();
        this.toastr.success('Enviado com sucesso.', 'GoodFoodApp');
        this.router.navigateByUrl('/pedidos');
      });
    } else {
      this.toastr.error('Erro ao enviar os dados.','GoodFoodApp');
    }
  }
}
