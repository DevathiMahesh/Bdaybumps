import { Component } from '@angular/core';
import checkLogin from '../utils/checklogin';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Buser } from './models/buser';

import {Observable} from 'rxjs';

import {select} from '@ngrx/store';
import { AppState } from './app.state';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bdaybumps';
  check = false;
  bellicon = faBell;
  buser:Observable<Buser[]>;
  constructor(private store:Store<AppState>)
  {
    this.check = checkLogin();
     this.buser = this.store.select((state)=>{console.log("in app",state.buser);return state.buser});
    console.log("in app");
  }
  reloadNavlinks = ()=>{
     this.check = checkLogin();

  }
  logout = ()=>{
    localStorage.clear();
    this.reloadNavlinks();
  }
  
}
