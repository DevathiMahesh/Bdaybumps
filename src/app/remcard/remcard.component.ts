import { Component, OnInit } from '@angular/core';
import {faGift} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-remcard',
  templateUrl: './remcard.component.html',
  styleUrls: ['./remcard.component.css']
})
export class RemcardComponent implements OnInit {
  fagift=faGift;
  constructor() { }

  ngOnInit(): void {
  }

}
