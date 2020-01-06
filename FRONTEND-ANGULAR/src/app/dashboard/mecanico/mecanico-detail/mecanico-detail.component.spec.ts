import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoDetailComponent } from './mecanico-detail.component';

describe('MecanicoDetailComponent', () => {
  let component: MecanicoDetailComponent;
  let fixture: ComponentFixture<MecanicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
