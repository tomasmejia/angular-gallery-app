import { AbstractControl, ValidationErrors } from '@angular/forms';
import { regexForImages } from '../shared/regexValidator';

export class ImageUrlValidators {
  static mustBeValidUrl(control: AbstractControl): ValidationErrors|null {
    if (!(control.value as string).match(regexForImages)) {
        return { mustBeValidUrl: true };
    }
    return null;
  }
}
