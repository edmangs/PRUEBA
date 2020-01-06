import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MecanicoAdminComponent } from './mecanico-admin/mecanico-admin.component';
import { MecanicoListComponent } from './mecanico-list/mecanico-list.component';
import { MecanicoCreateComponent } from './mecanico-create/mecanico-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MecanicoDeleteComponent } from './mecanico-delete/mecanico-delete.component';
import { MecanicoEditComponent } from './mecanico-edit/mecanico-edit.component';
import { MecanicoDetailComponent } from './mecanico-detail/mecanico-detail.component';

@NgModule({
  declarations: [
    MecanicoAdminComponent, 
    MecanicoListComponent, 
    MecanicoCreateComponent,
    MecanicoDeleteComponent,
    MecanicoEditComponent,
    MecanicoDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    MecanicoAdminComponent, 
    MecanicoListComponent, 
    MecanicoCreateComponent,
    MecanicoDeleteComponent,
    MecanicoEditComponent,
    MecanicoDetailComponent
  ],
  exports: [
    MecanicoAdminComponent, 
    MecanicoListComponent, 
    MecanicoCreateComponent,
    MecanicoDeleteComponent,
    MecanicoEditComponent,
    MecanicoDetailComponent
  ]
})
export class MecanicoModule { }
