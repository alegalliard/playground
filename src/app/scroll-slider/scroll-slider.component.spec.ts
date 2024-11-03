import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSliderComponent } from './scroll-slider.component';

describe('ScrollSliderComponent', () => {
  let component: ScrollSliderComponent;
  let fixture: ComponentFixture<ScrollSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
