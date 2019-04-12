import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageHeroComponent } from './landing-page-hero.component';

describe('LandingPageHeroComponent', () => {
  let component: LandingPageHeroComponent;
  let fixture: ComponentFixture<LandingPageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
