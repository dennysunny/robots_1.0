import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotPrimaryFeaturesComponent } from './robot-primary-features.component';

describe('RobotPrimaryFeaturesComponent', () => {
  let component: RobotPrimaryFeaturesComponent;
  let fixture: ComponentFixture<RobotPrimaryFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotPrimaryFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotPrimaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
