import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColoringComponent } from './dynamic-coloring.component';

describe('DynamicColoringComponent', () => {
  let component: DynamicColoringComponent;
  let fixture: ComponentFixture<DynamicColoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicColoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicColoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
