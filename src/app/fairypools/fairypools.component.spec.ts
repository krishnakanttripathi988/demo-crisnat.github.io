import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairypoolsComponent } from './fairypools.component';

describe('FairypoolsComponent', () => {
  let component: FairypoolsComponent;
  let fixture: ComponentFixture<FairypoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairypoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairypoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
