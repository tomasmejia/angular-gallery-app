import { AbstractControl, ValidationErrors } from '@angular/forms';

const regexForImages = /\.(jpeg|jpg|png|gif)/g;

export class ImageUrlValidators {
  static mustBeValidUrl(control: AbstractControl): ValidationErrors|null {
    if (!(control.value as string).match(regexForImages)) {
        return { mustBeValidUrl: true };
    }
    return null;
  }
}
