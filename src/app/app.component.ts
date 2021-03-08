import { Component } from '@angular/core';
import checkLogin from '../utils/checklogin';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Buser } from './models/buser';

import {Observable} from 'rxjs';

import {select} from '@ngrx/store';
import { AppState } from './app.state';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bdaybumps';
  check = false;
  bellicon = faBell;
 
  constructor(private router:Router)
  {
    this.check = checkLogin();
   
   
  }
  reloadNavlinks = ()=>{
     this.check = checkLogin();

  }
  logout = ()=>{
    localStorage.clear();
    this.reloadNavlinks();
  }
  loadHome = ()=>{
    console.log("in loadhome");
    this.router.navigate(["home"]);
  }
  
}
