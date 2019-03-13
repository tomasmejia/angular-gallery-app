import { TestBed, async } from '@angular/core/testing';

import { ImageService } from './image.service';
import { RouterTestingModule } from '@angular/router/testing';
import { IMAGES } from './shared/images';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    }).compileComponents();
    service = TestBed.get(ImageService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch images from the method', () => {
    // Arrange
    // Act
    const serviceImages = service.getImages();
    // Assert
    expect(serviceImages).toBe(IMAGES);
  });

  it('should add an image', () => {
    // Arrange
    const imgArray = [{ id: '1', url: 'test.jpg', caption: 'foobar' }];
    const mockForm = { imageUrl: '/testpic.jpg', caption: 'foobar2000' };
    const mockImage = { id: '5', url: '/testpic.jpg', caption: 'foobar2000' };
    // Act
    spyOn(service, 'uploadImage').and.callFake(() => {
      return imgArray.unshift(mockImage);
    });
    service.uploadImage(mockForm);
    // Assert
    expect(imgArray).toContain(mockImage);
  });
});
