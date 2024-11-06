import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotProfileCardComponent } from './robot-profile-card.component';

describe('RobotProfileCardComponent', () => {
  let component: RobotProfileCardComponent;
  let fixture: ComponentFixture<RobotProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotProfileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
