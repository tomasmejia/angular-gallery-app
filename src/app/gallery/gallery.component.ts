import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import { Images } from '../shared/Images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  visibleImages: Images[];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
      this.imageService.getImages();
  }

  get images() {
    return this.imageService.images;
  }

}
