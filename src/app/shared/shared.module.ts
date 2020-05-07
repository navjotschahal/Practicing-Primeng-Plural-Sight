import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenueComponent } from '../menue/menue.component';
import { FielderrorsComponent } from '../fielderrors/fielderrors.component';

import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { SpinnerModule } from 'primeng/spinner';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from "primeng/toast";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { StepsModule } from "primeng/steps";
import { FullCalendarModule } from "primeng/fullcalendar";



@NgModule({
  declarations: [
    MenueComponent,
    FielderrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PanelModule,
    MenuModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    TableModule,
    ToastModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    FullCalendarModule
  ],
  exports: [
    MenueComponent,
    FielderrorsComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    PanelModule,
    MenuModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    TableModule,
    ToastModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    FullCalendarModule
  ]
})
export class SharedModule { }
