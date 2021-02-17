import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:String = "";
  password:String = "";
  constructor() { }

  ngOnInit(): void {
  }
  login():void{
     console.log(this.username,this.password);
     axios.post("http://localhost:8015/bdaybumps/authenticate",{username:this.username,password:this.password}).then(
       (Response)=>{
         console.log(Response);
         window.localStorage.setItem("jwt",Response.data.jwt);
       }
     ).catch(
       (error)=>{
         console.log("unable to login");
       }
     )

  }

}
