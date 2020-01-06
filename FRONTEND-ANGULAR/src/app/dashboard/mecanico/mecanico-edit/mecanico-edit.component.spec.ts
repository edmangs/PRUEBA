import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoEditComponent } from './mecanico-edit.component';

describe('MecanicoEditComponent', () => {
  let component: MecanicoEditComponent;
  let fixture: ComponentFixture<MecanicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
