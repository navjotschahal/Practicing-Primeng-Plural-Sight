import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTimesheetComponent } from './my-timesheet.component';

const routes: Routes = [{ path: '', component: MyTimesheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTimesheetRoutingModule { }
