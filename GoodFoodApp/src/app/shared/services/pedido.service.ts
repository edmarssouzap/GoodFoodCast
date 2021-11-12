import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { PedidoItem } from '../model/pedido-item.model';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {

  formDados: Pedido;
  pedidoItems: PedidoItem[];
  constructor(private http: HttpClient) {}

  obterListaDePedidos() {
    // Faz um GET na URL do servidor API: https://localhost:44312/api/Pedidos
    return this.http.get(environment.apiURL + '/Pedidos');
  }

  obterPedidoPeloId(id:number) : any {
    return this.http.get(environment.apiURL + '/Pedidos/'+id);
  }

  salvarOuAtualizarPedido() {
    if(this.formDados.pedidoId === null) this.formDados.pedidoId = 0;
    this.pedidoItems.forEach(x =>{
      if(x.pedidoItemId === null){
        x.pedidoItemId =0;
        x.pedidoId = 0;
      }
    });
    var body = {
      ...this.formDados,
      pedidoItems: this.pedidoItems,
    };
    console.log(body);
    return this.http.post(environment.apiURL + '/Pedidos', body);
  }

  deletarPedido(id:number) {
    return this.http.delete(environment.apiURL + '/Pedidos/'+id);
  }
}
