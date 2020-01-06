import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent,
    UserDetailComponent,
    UserDeleteComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent,
    UserDetailComponent,
    UserDeleteComponent
  ],
  exports: [
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent, 
    UserAdminComponent,
    UserDetailComponent,
    UserDeleteComponent
  ],
})
export class UserModule { }
