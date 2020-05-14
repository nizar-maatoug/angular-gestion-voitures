import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDetailComponent } from './voiture-detail.component';

describe('VoitureDetailComponent', () => {
  let component: VoitureDetailComponent;
  let fixture: ComponentFixture<VoitureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
