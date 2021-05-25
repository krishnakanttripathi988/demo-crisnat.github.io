import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvalbardComponent } from './svalbard.component';

describe('SvalbardComponent', () => {
  let component: SvalbardComponent;
  let fixture: ComponentFixture<SvalbardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvalbardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvalbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
