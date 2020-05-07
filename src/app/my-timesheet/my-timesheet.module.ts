import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTimesheetRoutingModule } from './my-timesheet-routing.module';
import { MyTimesheetComponent } from './my-timesheet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MyTimesheetComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyTimesheetRoutingModule
  ]
})
export class MyTimesheetModule { }
