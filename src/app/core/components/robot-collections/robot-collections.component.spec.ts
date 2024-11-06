import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotCollectionsComponent } from './robot-collections.component';

describe('RobotCollectionsComponent', () => {
  let component: RobotCollectionsComponent;
  let fixture: ComponentFixture<RobotCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
