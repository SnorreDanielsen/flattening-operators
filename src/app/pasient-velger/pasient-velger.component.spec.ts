import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasientVelgerComponent } from './pasient-velger.component';

describe('PasientVelgerComponent', () => {
  let component: PasientVelgerComponent;
  let fixture: ComponentFixture<PasientVelgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasientVelgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasientVelgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
