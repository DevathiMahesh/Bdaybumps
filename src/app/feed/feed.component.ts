import { Component, OnInit } from '@angular/core';
import {faTrashAlt,faDownload,faCameraRetro} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  faTrash = faTrashAlt;
  faDownload = faDownload;
  faMemory = faCameraRetro;
  constructor() { }

  ngOnInit(): void {
  }

}
