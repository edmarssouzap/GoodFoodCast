import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../shared/pedido.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  pedidoList;
  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Apagar essa linha após finalizar os testes de login
    console.log ("EdmarRefreshList: " + this.atualizarLista());
    this.atualizarLista();
  }

  atualizarLista() {
    this.pedidoService
      .obterListaDePedidos()
      // .subscribe((res) => (this.pedidoList = res));
      .subscribe((res) => (
        console.log(this.pedidoList = res)));
        // this.pedidoList = res));

      // Apagar essas duas linhas apos a implementacao de login finalizar
      console.log("EdmarGetOrdersList: " + this.pedidoService.obterListaDePedidos())
      console.log("EdmarSubscribe: " + this.pedidoService.obterListaDePedidos().subscribe())
  }

  abrirParaEdicao(pedidoId: number) {
    this.router.navigateByUrl('/pedido/edit/' + pedidoId);
  }

  deletarPedido(id: number) {
    if (confirm('Você deseja deletar esse registro?')) {
      this.pedidoService.deletarPedido(id).subscribe((res) => {
        this.atualizarLista();
        this.toastr.warning('Pedido deletado com sucesso', 'GoodFoodApp');
      });
    }
  }
}
