import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/Router';
import axios from 'axios';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:String = "";
  password:String = "";
  constructor(private router:Router,private app:AppComponent) { }

  ngOnInit(): void {
  }
  login():void{
     console.log(this.username,this.password);
     axios.post("http://localhost:8015/bdaybumps/authenticate",{username:this.username,password:this.password}).then(
       (Response)=>{
         console.log(Response);
         window.localStorage.setItem("jwt",Response.data.jwt);
         window.localStorage.setItem("login","true");
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
