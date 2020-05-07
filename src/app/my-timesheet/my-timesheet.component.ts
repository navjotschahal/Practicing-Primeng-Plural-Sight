import { Component, OnInit, Injectable } from '@angular/core';
import * as moment from '../../../node_modules/moment';
import { MenuItem } from 'primeng';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from './event/event.service';



export enum PageNames {
  TimePage,
  ProjectPage,
  PlacePage,
  PeoplePage
}

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  events: any[] = [
    {
      title: 'Recent Work',
      start: moment().format(),
      end: moment().add(1, "hour").format()
    }
  ];
  options: any;

  day = 'Monday';
  dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');

  displayEditDialog = false;

 userTimeData = [
    { day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'AgileTimes', category: 'Frontend' },
    { day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'DB Cheque', category: 'Backend' },
    { day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Lamborghini', category: 'Operations' },
    { day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Ferrari', category: 'Planning' },
    { day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'ING', category: 'Requirements' }
  ];

  myTimesDataCols = ['day', 'startTime', 'endTime', 'project', 'category'];

  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  selectedRow: Array<any>;

  PageNames = PageNames;
  dialogPageIndex = PageNames.TimePage;
  dialogPages: MenuItem[] = [
    { label: 'Time'}, { label: 'Project'},
    { label: 'Place'}, {label: 'People'}
  ];

  constructor() { }

  ngOnInit(): void {
    // this.eventService.getEvents().then(events => {this.events = events; });

    this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true
        };
  }

  onRowSelect(event) {

  }

  onChangeTab(event) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');

  }

  getTimesForDay(tabName: string) {
    return this.userTimeData.filter( (row) => {
      return row.day.toLowerCase() === tabName.toLowerCase();
    });
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.myTimesDataCols);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'primengTable');
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  import('file-saver').then(FileSaver => {
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  });
}

cancelDialog() {
  this.displayEditDialog = false;
}

saveNewEntry() {

}

}
