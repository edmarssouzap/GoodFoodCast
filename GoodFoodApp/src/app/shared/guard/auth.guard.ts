import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable <boolean> | boolean {

    //  Verifica se existe um item de nome token no localStorage do browser do usuario
    const token = window.localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

    // window.localStorage.setItem ('nomeDotoken', 'valorDoToken'); - Adiciona um item de nome token
    // window.localStorage.removeItem ('nomeDotoken'); - Remove um item de nome nomeDotoken
  }
}
