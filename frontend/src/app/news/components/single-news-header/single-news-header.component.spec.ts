import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsHeaderComponent } from './single-news-header.component';

describe('SingleNewsHeaderComponent', () => {
  let component: SingleNewsHeaderComponent;
  let fixture: ComponentFixture<SingleNewsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
