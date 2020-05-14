import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureListComponent } from './voiture-list.component';

describe('VoitureListComponent', () => {
  let component: VoitureListComponent;
  let fixture: ComponentFixture<VoitureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
