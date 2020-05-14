import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { VoitureEditComponent } from './voiture-edit.component';



describe('VoitureEditComponent', () => {
  let component: VoitureEditComponent;
  let fixture: ComponentFixture<VoitureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
