import { LoginService } from './../shared/services/login.service';
import { Router } from '@angular/router'; //Utilizado para fazer o redirecionamento de rotas
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
    ) {   }

  login = { usuario: '', senha: '' };

  ngOnInit(): void {
  }

  result = false;
    async onSubmit() {
    try {

      // Retorna valor true ou false
      const result = await this.loginService.login(this.login.usuario, this.login.senha);

      if (this.login.usuario === "admin" && this.login.senha === "123") {
        this.router.navigate(['pedido']);
        this.toastr.success("Login realizado com sucesso.", "GoodFoodApp");
        return true;
      }

      this.toastr.error ("Usuario ou senha inválida.", "GoodFoodApp");
      return result;

    } catch (error) {

       console.error (error)
    }
  }
}
