import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdderComponent } from './item-adder.component';

describe('ItemAdderComponent', () => {
  let component: ItemAdderComponent;
  let fixture: ComponentFixture<ItemAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAdderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
