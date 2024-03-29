import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAboutComponent } from './doctor-about.component';

describe('DoctorAboutComponent', () => {
  let component: DoctorAboutComponent;
  let fixture: ComponentFixture<DoctorAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
