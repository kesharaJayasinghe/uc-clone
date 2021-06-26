import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferSectionComponent } from './refer-section.component';

describe('ReferSectionComponent', () => {
  let component: ReferSectionComponent;
  let fixture: ComponentFixture<ReferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
