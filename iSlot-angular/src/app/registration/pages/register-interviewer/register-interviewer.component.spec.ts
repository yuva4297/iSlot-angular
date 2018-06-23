import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInterviewerComponent } from './register-interviewer.component';

describe('RegisterInterviewerComponent', () => {
  let component: RegisterInterviewerComponent;
  let fixture: ComponentFixture<RegisterInterviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInterviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
