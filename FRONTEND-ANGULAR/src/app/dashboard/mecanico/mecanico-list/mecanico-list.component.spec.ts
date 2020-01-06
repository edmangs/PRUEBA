import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoListComponent } from './mecanico-list.component';

describe('MecanicoListComponent', () => {
  let component: MecanicoListComponent;
  let fixture: ComponentFixture<MecanicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
