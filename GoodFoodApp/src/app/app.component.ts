import { LoginService } from './shared/services/login.service';
import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoodFoodApp';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  // Verifica se existe um token no navegador do usuario, caso nao exista, isso significa que nao esta autenticado
  verificaAutenticacao(): boolean {
    const token = window.localStorage.getItem ('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  // Metodo que remove o token do navegador, impedindo que o usuario acesse uma rota sem fazer autenticacao
  removerToken (): void {
    window.localStorage.removeItem ('token');
  }
}
