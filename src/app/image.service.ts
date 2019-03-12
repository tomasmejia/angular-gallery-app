import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from './shared/images';
import { makeId } from './shared/randomId';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private router: Router) {}

  getImages() {
    return IMAGES;
  }

  getImage(id: string) {
    return [...IMAGES].find(image => image.id === id);
  }

  uploadImage(form) {
    const image = {
      id: makeId(),
      url: form.imageUrl,
      caption: form.caption
    };
    IMAGES.unshift(image);
    console.log(IMAGES);
    setTimeout(() => {
      return this.router.navigate(['/']);
    }, 2000);
  }
}
