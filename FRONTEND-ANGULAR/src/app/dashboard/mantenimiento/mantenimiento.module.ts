import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoAdminComponent } from './mantenimiento-admin/mantenimiento-admin.component';
import { MantenimientoCreateComponent } from './mantenimiento-create/mantenimiento-create.component';
import { MantenimientoListComponent } from './mantenimiento-list/mantenimiento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MantenimientoAdminComponent,
    MantenimientoCreateComponent,
    MantenimientoListComponent
  ],
  exports: [
    MantenimientoAdminComponent,
    MantenimientoCreateComponent,
    MantenimientoListComponent
  ],
  entryComponents: [
    MantenimientoAdminComponent,
    MantenimientoCreateComponent,
    MantenimientoListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MantenimientoModule { }
