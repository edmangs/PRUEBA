import { Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserCreateComponent } from './user-create/user-create.component';

export const USER_ROUTES: Routes = [
  {
    path: 'admin', component : UserAdminComponent, data: { breadcrumb: '' }
  },
  {
    path: 'create', component : UserCreateComponent, data: { breadcrumb: '' }
  }
];