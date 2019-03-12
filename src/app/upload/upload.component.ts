import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadForm = new FormGroup({
    imageUrl: new FormControl('', Validators.required),
    caption: new FormControl('', Validators.required),
  });

  get imageUrl() {
    return this.uploadForm.get('imageUrl');
  }

  get caption() {
    return this.uploadForm.get('caption');
  }

  constructor() {}

  ngOnInit() {
    console.log(this.uploadForm);
  }
}
