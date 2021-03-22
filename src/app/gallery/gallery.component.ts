import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  faplus=faPlus;
  imgurls=["../../assets//images/suman.jfif","../../assets//images/venky.jfif",
           "../../assets//images/harsha.jfif","../../assets//images/akhil.jfif",
           "../../assets//images/taj.jfif","../../assets//images/mani.jfif",
           "../../assets//images/sai.jfif","../../assets//images/saran.jfif",
          ]
  albumnames = [
      "Suman Album","Venky Album","Harsha Album","Akhil Album","Taj Album","Manu Album","Sai Album","Saran Album"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
