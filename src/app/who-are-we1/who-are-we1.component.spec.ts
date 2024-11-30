import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWe1Component } from './who-are-we1.component';

describe('WhoAreWe1Component', () => {
  let component: WhoAreWe1Component;
  let fixture: ComponentFixture<WhoAreWe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreWe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoAreWe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
