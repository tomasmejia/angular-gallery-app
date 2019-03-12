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
    // Arrange
    const service: ImageService = TestBed.get(ImageService);
    // Act
    const serviceImages = service.getImages();
    // Assert
    expect(serviceImages).toBe(IMAGES);
  });

  it('should add an image', () => {
    // Arrange
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
    // Act
    service.uploadImage(mockForm);
    // Assert
    expect(imgArray).toContain(mockImage);
  });
});
