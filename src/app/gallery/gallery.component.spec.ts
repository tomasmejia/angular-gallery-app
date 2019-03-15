import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should get the pictures array', () => {
    expect(component.visibleImages).not.toBeUndefined();
  });
  fit('should render the pictures', () => {
    const elements = fixture.debugElement.queryAll(By.css('.gallery__item'));
    expect(elements).not.toBeNull();
  });
});
