import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import axios from 'axios';
import {AppComponent} from '../app.component';
import { addBusers } from '../buser/store/action/buser.actions';
import { BuserState } from '../buser/store/reducer/buser.reducer';
import {Buser} from '../models/buser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:String = "";
  password:String = "";
  constructor(private router:Router,private app:AppComponent,private store:Store<BuserState>) { }

  ngOnInit(): void {
  }
  login():void{
     console.log(this.username,this.password);
     axios.post("http://localhost:8015/bdaybumps/authenticate",{username:this.username,password:this.password}).then(
       (Response)=>{
         console.log(Response);
         window.localStorage.setItem("jwt",Response.data.jwt.jwt);
         window.localStorage.setItem("login","true");
         const buser = new Buser();
         buser.bemail = Response.data.userdetails.bemail;
         buser.bfirstName = Response.data.userdetails.bfirstName;
         buser.blastName = Response.data.userdetails.blastName;
         buser.bfriends = Response.data.userdetails.bfriends;
         buser.buid = Response.data.userdetails.buid;
         buser.notifications = Response.data.userdetails.notifications;
         console.log("buser",buser);
         this.store.dispatch(addBusers(buser));
         this.app.reloadNavlinks();
         this.router.navigate(["/home"]);
       }
     ).catch(
       (error)=>{
         console.log("unable to login");
       }
     )

  }

}
