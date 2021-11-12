import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  obterListaLogin () {
    // Faz um GET na URL do servidor API: https://localhost:44312/api/Logins
    return this.http.get(environment.apiURL + '/Logins');
  }

  // Login Local
  login (usuario: any, senha: any) {
    return new Promise ((resolve) => {
      window.localStorage.setItem('token', 'admin');
      resolve(true);
    });
  }



  // Login Remoto
  login2(User: string, Password: string): void {
    // Comando para realizar o debug dos dados com a ferramenta de desenvolvedor aberta - Vai pausar aqui
    // debugger;  // <- Este é um comando do javascript/typescript para depuração
    const obj = {
      usuario: User,
      senha: Password,
    };

    // Linha que realiza o POST no servidor API e retorna um Array da tabela Login do SQL Server
    this.http
      .post(environment.apiURL + '/Logins', obj)
      .subscribe((res) => console.log('Login realizado com sucesso.', res));
  }
}
