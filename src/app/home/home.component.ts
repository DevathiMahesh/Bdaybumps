import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faImage } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faplus = faPlus;
  faImage = faImage;
  litems = [
    { title: 'My Profile', route: 'profile' },
    { title: 'Friends', route: 'profile' },
    {title:'Bestiees',route:'profile'},
    {title:'Memories',route:'memories'},
    {title:'Gallery',route:'gallery'},
    {title:'Gifts',route:'gifts'},
    {title:'Orders',route:'orders'}
  ];
  constructor(private router:Router) {}

  ngOnInit(): void {}
  navigate(item):void{
     this.router.navigate([item.route])
  }
}
