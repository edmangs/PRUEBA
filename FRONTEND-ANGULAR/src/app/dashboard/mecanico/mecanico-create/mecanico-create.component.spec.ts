import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoCreateComponent } from './mecanico-create.component';

describe('MecanicoCreateComponent', () => {
  let component: MecanicoCreateComponent;
  let fixture: ComponentFixture<MecanicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
