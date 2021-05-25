import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTrenchComponent } from './mtrench.component';

describe('MTrenchComponent', () => {
  let component: MTrenchComponent;
  let fixture: ComponentFixture<MTrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTrenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
