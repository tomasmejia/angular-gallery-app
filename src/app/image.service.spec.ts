import { TestBed, async } from '@angular/core/testing';

import { ImageService } from './image.service';
import { RouterTestingModule } from '@angular/router/testing';
import { IMAGES } from './shared/images';

describe('ImageService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });

  it('should fetch images from the method', () => {
    const service: ImageService = TestBed.get(ImageService);
    const serviceImages = service.getImages();
    expect(serviceImages).toBe(IMAGES);
  });

  it('should add an image', () => {
    const service: ImageService = TestBed.get(ImageService);
    const imgArray = service.getImages();
    const mockForm = {
      imageUrl: '/testpic.jpg',
      caption: 'foobar2000'
    };
    const mockImage = {
      id: '5',
      url: '/testpic.jpg',
      caption: 'foobar2000'
    };
    service.uploadImage(mockForm);
    expect(imgArray).toContain(mockImage);
  });
});
