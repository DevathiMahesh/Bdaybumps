import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { faHeart,faTrashAlt,faCamera} from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FriendsService } from '../services/friends.service';
import { Bfriend } from '../models/bfriend';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:any[] = [];
  selectedFriend:Bfriend;
  faheart=faHeart;
  fadelete = faTrashAlt;
  friendModal = true;
  closeResult = '';
 
  constructor(private store:Store<AppState>,private modalService: NgbModal,private friendservice:FriendsService) { 
    this.store.select(state => state).subscribe(data => {
      console.log('data', data["Buser"]);
      this.friends = data["Buser"][0].bfriends;
      
    });
  }

  ngOnInit(): void {
  }

  changevalue(type,value):void{
    console.log(type,value);
    this.selectedFriend[type] = value;
  
  }
  openmodal(content,friend):void {
    this.selectedFriend = JSON.parse(JSON.stringify(friend));
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  deleteFriend(friend):void{
      this.friendservice.deleteFriend(friend).subscribe(
        (response)=>{
          console.log(response);
        },
        err=>{
          console.log(err)
        }
      )

      
  }
  saveFriend():void{
    this.friendservice.saveFriend(this.selectedFriend).subscribe(
      (response)=>{
        console.log(response);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
