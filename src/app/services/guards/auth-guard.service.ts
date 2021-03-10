import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private loginservice:LoginserviceService,private router:Router) { 

  }
  canActivate()
  {
      console.log("in can activate",this.loginservice.isLoggedin());
      if(this.loginservice.isLoggedin())
      {
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }

}
