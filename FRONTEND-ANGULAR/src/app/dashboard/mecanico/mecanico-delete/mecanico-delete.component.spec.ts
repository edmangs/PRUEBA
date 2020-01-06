import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoDeleteComponent } from './mecanico-delete.component';

describe('MecanicoDeleteComponent', () => {
  let component: MecanicoDeleteComponent;
  let fixture: ComponentFixture<MecanicoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
