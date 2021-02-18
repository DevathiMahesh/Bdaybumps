import { Component, OnInit } from '@angular/core';
import {faPlus,faImage} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faplus = faPlus;
  faImage = faImage;
  litems = ["My Profile","Friends","Bestiees","Memories","Gallery"]
  constructor() { }

  ngOnInit(): void {
      
  }

}
