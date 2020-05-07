import { NgModule } from '@angular/core';
import { Routes, RouterModule,  PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'settings', loadChildren: () => import('./settings/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'add-project', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'all-times', loadChildren: () => import('./all-times/all-times.module').then(m => m.AllTimesModule) },
  { path: 'my-timesheet', loadChildren: () => import('./my-timesheet/my-timesheet.module').then(m => m.MyTimesheetModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
