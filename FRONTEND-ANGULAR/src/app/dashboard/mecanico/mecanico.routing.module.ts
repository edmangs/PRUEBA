import { Routes } from '@angular/router';
import { MecanicoAdminComponent } from './mecanico-admin/mecanico-admin.component';
import { MecanicoCreateComponent } from './mecanico-create/mecanico-create.component';

export const MECANICO_ROUTES: Routes = [
  {
    path: 'admin', component : MecanicoAdminComponent, data: { breadcrumb: '' }
  },
  {
    path: 'create', component : MecanicoCreateComponent, data: { breadcrumb: '' }
  }
];