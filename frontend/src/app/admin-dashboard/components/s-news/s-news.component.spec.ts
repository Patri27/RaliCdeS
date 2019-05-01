import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNewsComponent } from './s-news.component';

describe('SNewsComponent', () => {
  let component: SNewsComponent;
  let fixture: ComponentFixture<SNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
