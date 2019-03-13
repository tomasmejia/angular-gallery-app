import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUrlValidators } from './imageUrl.validators';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [ UploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with two controls', () => {
    expect(component.uploadForm.contains('imageUrl')).toBeTruthy();
    expect(component.uploadForm.contains('caption')).toBeTruthy();
  });

  it('should check if the imageUrl control is required', () => {
    const control = component.uploadForm.get('imageUrl');
    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
  it('should check if the imageUrl control has a valid image source', () => {
    const control = component.imageUrl;
    control.setValue('./foobar.jpg');

    const urlValidator = ImageUrlValidators.mustBeValidUrl(control);

    expect(urlValidator).toBeNull();
  });
  it('should check if the imageUrl control has an invalid image source', () => {
    const control = component.imageUrl;
    control.setValue('foobar');
    const urlValidator = ImageUrlValidators.mustBeValidUrl(control);

    expect(urlValidator).toEqual({ mustBeValidUrl: true });
  });
  it('should check if the caption component is required', () => {
    const control = component.caption;
    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should allow an upload if any field is valid', () => {
    const imageCtrl = component.imageUrl;
    const captionCtrl = component.caption;
    imageCtrl.setValue('./foobar.jpg');
    captionCtrl.setValue('foo');

    component.upload();

    expect(component.wasSubmitted).toBeTruthy();
  });
  it('should not allow an upload if any field is invalid', () => {
    const imageCtrl = component.imageUrl;
    const captionCtrl = component.caption;
    imageCtrl.setValue('bar');
    captionCtrl.setValue('foo');

    component.upload();

    expect(component.wasSubmitted).toBeFalsy();
  });
});
