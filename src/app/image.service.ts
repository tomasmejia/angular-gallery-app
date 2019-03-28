import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

import { IMAGES } from './shared/images';
import { makeId } from './shared/randomId';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiKey = '563492ad6f91700001000001a7cd175fdc784baca8e64da4491d10e8';
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/curated?per_page=15&page=1';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'Application/json, text/html',
      accept: 'application/json, text/html',
      Authorization: this.apiKey,
    })
  };
  constructor(private router: Router, private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions)
    .pipe(
      map((res: any) => {
        return res.photos.map(photo => {
          return {
            id: photo.id,
            caption: photo.photographer,
            url: photo.src.medium,
            source: photo.url,
          };
        });
      }),
      catchError(this.handleError('getImages', []))
    );
  }

  getImage(id: string) {
    return [...IMAGES].find(image => image.id === id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
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
