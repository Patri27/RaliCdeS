import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPhotoComponent } from './s-photo.component';

describe('SPhotoComponent', () => {
  let component: SPhotoComponent;
  let fixture: ComponentFixture<SPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
