import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {
 buid:any;
  constructor(private http:HttpClient,private store:Store<AppState>) { 
    this.store.select(state => state).subscribe(data => {
      console.log('data', data["Buser"]);
      this.buid = data["Buser"][0].buid;

    });
  }
  deleteFriend(friend):Observable<String>{
    let fri = {
       "fid":friend.fid,
       "fname":friend.fname,
       "femail":friend.femail,
       "fphone":friend.fphone,
       "fdob":friend.fdob,
       "bestie":friend.bestie
    }
    let body = {
       "buid":this.buid,
       "friend":fri
    }
    return this.http.post<String>("http://localhost:8015/bdaybumps/deleteFriend",body)
  }
}
