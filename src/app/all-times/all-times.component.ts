import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng';

@Component({
  selector: 'app-all-times',
  templateUrl: './all-times.component.html',
  styleUrls: ['./all-times.component.css'],
  providers: [MessageService]
})
export class AllTimesComponent implements OnInit {

  selectedRow: Array<SelectItem>;
  allProjectNames = ['', 'DB Cheque', 'Agile Times', 'Lamborghini'];
  allProjects: SelectItem[] = this.allProjectNames.map( (proj) => {
    return { label: proj.toUpperCase(), value: proj};
  });

  allTimeSheetData = [
    { user: 'Jane', project: 'DB Cheque', category: 'Operations',
    startTime: 1000, endTime: 1700, date: 1535250 },
    { user: 'James', project: 'Agile Times', category: 'Backend',
    startTime: 1000, endTime: 1700, date: 1535250 },
    { user: 'Tiger', project: 'DB Cheque', category: 'Backend',
    startTime: 1000, endTime: 1700, date: 1535250 },
    { user: 'Smith', project: 'Lamborghini', category: 'Backend',
    startTime: 1000, endTime: 1700, date: 1535250 },
    { user: 'Ron', project: 'DB Cheque', category: 'Frontend',
    startTime: 1000, endTime: 1700, date: 1535250 }
  ];

  allTimeSheetDataCols = Object.keys(this.allTimeSheetData[0]);
  cols = this.allTimeSheetDataCols.map( (ele) => {
    return { field: ele, header: ele, index: this.allTimeSheetDataCols.indexOf(ele) + 1 };
  });

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.allTimeSheetData);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
}

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

onRowSelect(event) {
  alert(JSON.stringify(this.selectedRow));
  this.messageService.add({severity: 'info', summary: 'Developer Selected', detail: 'Row Data: ' + event.data.user});
}

}
