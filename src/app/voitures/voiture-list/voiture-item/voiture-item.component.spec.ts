import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureItemComponent } from './voiture-item.component';

describe('VoitureItemComponent', () => {
  let component: VoitureItemComponent;
  let fixture: ComponentFixture<VoitureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
