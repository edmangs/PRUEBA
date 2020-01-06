import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./theme/theme.module').then(mod => mod.ThemeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)
  },
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }