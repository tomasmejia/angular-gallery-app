import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  visibleImages: [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getImages();
    console.log(this.visibleImages);
  }

  getImages(): void {
    this.imageService.getImages();
  }

}
