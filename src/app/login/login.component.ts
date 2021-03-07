import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { AppComponent } from '../app.component';
import {AppState} from '../app.state';
import { Buser } from '../models/buser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';
  constructor(
    private router: Router,
    private app: AppComponent,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}
  login(): void {
    console.log(this.username, this.password);
    axios
      .post('http://localhost:8015/bdaybumps/authenticate', {
        username: this.username,
        password: this.password,
      })
      .then((Response) => {
        console.log(Response);
        let response = Response.data.userdetails;
        window.localStorage.setItem('jwt', Response.data.jwt.jwt);
        window.localStorage.setItem('login', 'true');
        this.store.dispatch({
          type: 'ADD_BUSER',
          payload: <Buser>{
            buid:response.buid,
            bfirstName:response.bfirstName,
            blastName:response.blastName,
            bemail:response.bemail,
            bfriends:response.bfriends,
            notifications:response.notifications
          },
        });

        this.app.reloadNavlinks();
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('unable to login');
      });
  }
}
