import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageUrlValidators } from './imageUrl.validators';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadForm = new FormGroup({
    imageUrl: new FormControl('', [Validators.required, ImageUrlValidators.mustBeValidUrl]),
    caption: new FormControl('', Validators.required),
  });

  get imageUrl() {
    return this.uploadForm.get('imageUrl');
  }

  get caption() {
    return this.uploadForm.get('caption');
  }

  constructor(private imageService: ImageService) {}

  ngOnInit() {
  }

  upload() {
    // this.uploadForm.setErrors({
    //   invalidUpload: true,
    // });
    return this.imageService.uploadImage(this.uploadForm.value);
  }
}
