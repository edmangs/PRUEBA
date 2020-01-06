import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoAdminComponent } from './mecanico-admin.component';

describe('MecanicoAdminComponent', () => {
  let component: MecanicoAdminComponent;
  let fixture: ComponentFixture<MecanicoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
