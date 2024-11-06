import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRobotsAccordionComponent } from './featured-robots-accordion.component';

describe('FeaturedRobotsAccordionComponent', () => {
  let component: FeaturedRobotsAccordionComponent;
  let fixture: ComponentFixture<FeaturedRobotsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedRobotsAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedRobotsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
