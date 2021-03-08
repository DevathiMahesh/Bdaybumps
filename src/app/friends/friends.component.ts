import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:any[] = [];
  constructor(private store:Store<AppState>) { 
    this.store.select(state => state).subscribe(data => {
      console.log('data', data["Buser"]);
      this.friends = data["Buser"][0].bfriends;
      
    });
  }

  ngOnInit(): void {
  }

}
