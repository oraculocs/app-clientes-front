import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authservice: AuthService, private router: Router){
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const authenticated = this.authservice.isAuthenticated();

    if(authenticated){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
