import { GalleryService } from './../../services/gallery.service';
import { messages } from './../../messages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  messages = messages;
  galleries;
  constructor(private galleryList: GalleryService) { }

  ngOnInit() {
    this.galleryList.getGallery().subscribe(
      (response) => {
        this.galleries = response;
      },
      (error) => console.log(error)

    );
  }

}
