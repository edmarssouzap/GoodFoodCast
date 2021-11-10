import { Component } from '@angular/core';
import { LoginModel } from './shared/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoodFoodApp';

  public loginModelAPP: LoginModel = new LoginModel();

}
