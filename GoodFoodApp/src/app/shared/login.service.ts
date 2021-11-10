import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getLoginList() {
    // Faz um GET na URL do servidor API: https://localhost:44312/api/Logins
    return this.http.get(environment.apiURL + '/Logins');
  }

  validationLogin(Usuario: string, Senha: string) {
    // Comando para realizar o debug dos dados com a ferramenta de desenvolvedor aberta - Vai pausar aqui
    debugger;
    const obj = {
      usuario: Usuario,
      senha: Senha,
    };

    // Apagar essa linha para que o usuario e senha nao seja imprimindo no console web
    console.log("EdmarLoginTeste: " + obj);

    // Linha que realiza o POST no servidor API e retorna um Array da tabela Login do SQL Server
    this.http
      .post(environment.apiURL + '/Logins', obj)
      .subscribe((res) => console.log('Login realizado com sucesso.', res));
  }
}
