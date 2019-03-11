import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  visibleImages: any[];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.visibleImages = this.imageService.getImages();
  }
}
