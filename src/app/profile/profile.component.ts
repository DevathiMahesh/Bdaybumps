import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCamera,faUser,faUserFriends,faGift,faCameraRetro,faHeart,faMinusSquare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faphoto = faCamera;
  fafriends = faUserFriends;
  fagifts = faGift;
  famemories = faCameraRetro;
  fabesties = faHeart;
  faorders = faMinusSquare;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loadComponent(title):void{
    this.router.navigate([title])
  }

}
