import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from './shared/images';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImages() {
    return IMAGES;
  }

  getImage(id: string) {
    return [...IMAGES].find(image => image.id === id);
  }

  uploadImage(form) {
    const image = {
      id: '5',
      url: form.imageUrl,
      caption: form.caption
    };
    IMAGES.unshift(image);
    setTimeout(() => {
      return this.router.navigate(['/']);
    }, 2000);
  }

  constructor(private router: Router) {}
}
