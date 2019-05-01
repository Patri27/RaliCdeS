import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsBodyComponent } from './single-news-body.component';

describe('SingleNewsBodyComponent', () => {
  let component: SingleNewsBodyComponent;
  let fixture: ComponentFixture<SingleNewsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
