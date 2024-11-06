import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAccessComponent } from './club-access.component';

describe('ClubAccessComponent', () => {
  let component: ClubAccessComponent;
  let fixture: ComponentFixture<ClubAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
