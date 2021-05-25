import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedseaComponent } from './redsea.component';

describe('RedseaComponent', () => {
  let component: RedseaComponent;
  let fixture: ComponentFixture<RedseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedseaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
