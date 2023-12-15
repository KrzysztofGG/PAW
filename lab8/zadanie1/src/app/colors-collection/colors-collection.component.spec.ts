import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsCollectionComponent } from './colors-collection.component';

describe('ColorsCollectionComponent', () => {
  let component: ColorsCollectionComponent;
  let fixture: ComponentFixture<ColorsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
