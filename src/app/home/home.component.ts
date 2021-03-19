import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faImage } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Buser } from '../models/buser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faplus = faPlus;
  faImage = faImage;
  
  buser:any;
  litems = [
    { title: 'My Profile', route: 'profile' },
    { title: 'Friends', route: 'friends' },
    {title:'Besties',route:'besties'},
    {title:'Memories',route:'memories'},
    {title:'Gallery',route:'gallery'},
    {title:'Gifts',route:'gifts'},
    {title:'Orders',route:'orders'}
  ];
  constructor(private router:Router,private store:Store<AppState>) {
    
    let temp = this.store.select(state => state).subscribe(data => {
      console.log('data', data["Buser"]);
      this.buser = data["Buser"][0];
      return data["Buser"][0];
    });
    
    console.log("checking buser",this.buser);
  }

  ngOnInit(): void {}
  navigate(item):void{
     this.router.navigate([item.route])
  }
}
