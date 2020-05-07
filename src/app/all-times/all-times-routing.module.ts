import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTimesComponent } from './all-times.component';

const routes: Routes = [{ path: '', component: AllTimesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTimesRoutingModule { }
