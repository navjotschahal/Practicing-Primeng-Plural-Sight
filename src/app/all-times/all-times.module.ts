import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTimesRoutingModule } from './all-times-routing.module';
import { AllTimesComponent } from './all-times.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AllTimesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllTimesRoutingModule
  ]
})
export class AllTimesModule { }
