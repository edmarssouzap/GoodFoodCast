import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  obterListaItem() {
   // Faz um GET na URL do servidor API: https://localhost:44312/api/Items
   return this.http.get(environment.apiURL+'/Items');
  }
}
