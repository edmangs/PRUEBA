import { Routes } from '@angular/router';
import { MantenimientoAdminComponent } from './mantenimiento-admin/mantenimiento-admin.component';
import { MantenimientoCreateComponent } from './mantenimiento-create/mantenimiento-create.component';

export const MANTENIMIENTO_ROUTES: Routes = [
  {
    path: 'admin', component : MantenimientoAdminComponent, data: { breadcrumb: '' }
  },
  {
    path: 'create', component : MantenimientoCreateComponent, data: { breadcrumb: '' }
  }
];