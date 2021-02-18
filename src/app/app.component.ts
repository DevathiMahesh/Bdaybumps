import { Component } from '@angular/core';
import checkLogin from '../utils/checklogin';
import { faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bdaybumps';
  check = false;
  bellicon = faBell;
  constructor()
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
  
}
