import { Component, OnInit, resolveForwardRef } from '@angular/core';
import {faGift} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
@Component({
  selector: 'app-remcard',
  templateUrl: './remcard.component.html',
  styleUrls: ['./remcard.component.css']
})
export class RemcardComponent implements OnInit {
  fagift=faGift;
  modaldisplay = false;
  data = {}
  constructor() { 
     axios.get("http://localhost:8015/bdaybumps/getTimeline/"+3).then(
       (response)=>{
          this.data = response.data;
          console.log(response.data);
       }
     ).catch(
       (error)=>{
          console.log("Unable to fetch reminder data.");
       }
     )
  }

  ngOnInit(): void {
  }
  showModal():void{
      this.modaldisplay = !this.modaldisplay;
      console.log("in modal",this.modaldisplay);
  }

}
