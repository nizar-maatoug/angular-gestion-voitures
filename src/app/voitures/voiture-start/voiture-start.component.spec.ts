import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureStartComponent } from './voiture-start.component';

describe('VoitureStartComponent', () => {
  let component: VoitureStartComponent;
  let fixture: ComponentFixture<VoitureStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
