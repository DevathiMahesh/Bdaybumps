import { Component } from '@angular/core';
import checkLogin from '../utils/checklogin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bdaybumps';
  check = false;
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
