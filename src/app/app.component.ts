import { Component } from '@angular/core';
import checkLogin from '../utils/checklogin';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Buser } from './models/buser';
import { BuserState } from './buser/store/reducer/buser.reducer';
import {Observable} from 'rxjs';

import {select} from '@ngrx/store';
import {selectBusers} from './buser/store/selector/buser.selectors';

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
  constructor(private store:Store<BuserState>)
  {
    this.check = checkLogin();
    this.buser = this.store.pipe(select(selectBusers))
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
