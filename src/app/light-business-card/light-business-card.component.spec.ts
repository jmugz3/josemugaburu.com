import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBusinessCardComponent } from './light-business-card.component';

describe('LightBusinessCardComponent', () => {
  let component: LightBusinessCardComponent;
  let fixture: ComponentFixture<LightBusinessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBusinessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
