import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { MECANICO_ROUTES } from './mecanico/mecanico.routing.module';
import { MecanicoModule } from './mecanico/mecanico.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { MANTENIMIENTO_ROUTES } from './mantenimiento/mantenimiento.routing.module';


const routes: Routes = [
  {
    path: 'home', component : HomeComponent, data: { breadcrumb: '' }
  },
  {
    path: 'mecanico', children: MECANICO_ROUTES, canActivate: [], data: { breadcrumb: 'Mecanico' }
  },
  {
    path: 'mantenimiento', children: MANTENIMIENTO_ROUTES, canActivate: [], data: { breadcrumb: 'Mantenimieto' }
  }
];

@NgModule({
  declarations: [ ],
  imports: [
    MecanicoModule,
    MantenimientoModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
