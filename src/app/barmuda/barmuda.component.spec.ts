import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarmudaComponent } from './barmuda.component';

describe('BarmudaComponent', () => {
  let component: BarmudaComponent;
  let fixture: ComponentFixture<BarmudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarmudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarmudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
