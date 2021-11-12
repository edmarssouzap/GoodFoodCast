import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  obterListaCliente() {
    // Faz um GET na URL do servidor API: https://localhost:44312/api/Clientes
    return this.http.get(environment.apiURL + '/Clientes');
  }
}
