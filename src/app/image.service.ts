import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const IMAGES = [
  { id: '1', caption: 'Hello world', url: 'https://i.imgur.com/YsqdBYc.jpg' },
  { id: '2', caption: 'Nice meme', url: 'https://i.imgur.com/WWNb9Fh.jpg' },
  { id: '3', caption: 'I don\'t know about this', url: 'https://i.imgur.com/E7PPNfB.jpg' },
  { id: '4', caption: 'How low', url: 'https://i.imgur.com/xxO3aus.png' }
];

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
