import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';

// Importa o model de login para uso por esse componente
import { LoginModel } from '../shared/login.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Cria uma instancia do Model de login
  public loginModel: LoginModel = new LoginModel();

  constructor( public loginService: LoginService ) {  }

  ngOnInit(): void {
  }


  loginSubmit() {
    console.log(this.loginModel)
  }



}
