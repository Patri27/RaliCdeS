import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWallComponent } from './admin-wall.component';

describe('AdminWallComponent', () => {
  let component: AdminWallComponent;
  let fixture: ComponentFixture<AdminWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
