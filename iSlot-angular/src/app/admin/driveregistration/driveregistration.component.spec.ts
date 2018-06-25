import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveregistrationComponent } from './driveregistration.component';

describe('DriveregistrationComponent', () => {
  let component: DriveregistrationComponent;
  let fixture: ComponentFixture<DriveregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
