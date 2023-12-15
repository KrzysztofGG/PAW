import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsChildComponent } from './colors-child.component';

describe('ColorsChildComponent', () => {
  let component: ColorsChildComponent;
  let fixture: ComponentFixture<ColorsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
