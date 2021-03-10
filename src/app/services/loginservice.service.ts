import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() {

   }
   isLoggedin():Boolean{
      let loginvalue = JSON.parse(localStorage.getItem("login"));
      return loginvalue;
   }
}
