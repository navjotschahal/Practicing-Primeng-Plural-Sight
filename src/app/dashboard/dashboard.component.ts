import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HoursByProjectModel } from '../shared/hoursByProject.model';

import * as DefaultConstants from '../shared/defaultConstants';
import { UIChart } from 'primeng';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('mixedChart') mixedChart: UIChart;


  hoursByProject: HoursByProjectModel[] =
  [
    { id: 1, name: 'Agile Times App', teams: [ { teamName: 'Dev', hoursSpent: 2 }, { teamName: 'Ops', hoursSpent: 1 } ] },
    { id: 1, name: 'DB Cheque', teams: [ { teamName: 'Dev', hoursSpent: 2 }, { teamName: 'Ops', hoursSpent: 2 } ] },
    { id: 1, name: 'Lamborghini Web-Site', teams: [ { teamName: 'Dev', hoursSpent: 4 }, { teamName: 'Ops', hoursSpent: 3 } ] }
  ];

  chartOptions = {
    title: {
      display: true,
      text: 'Hours by Project'
    },
    legend: {
      position: 'bottom'
    }
  };

  pieLabels = this.hoursByProject.map( (proj) => {
    return proj.name;
  });

  pieData = this.hoursByProject.map( (proj) => {
    return proj.teams;
  });

  pieDevTeamData = this.pieData.map( (piData) => {
    for (const iterator of piData) {
      if (iterator.teamName === 'Dev') {
        return iterator.hoursSpent;
      }
    }
  });

  pieOpsTeamData = this.pieData.map( (piData) => {
    for (const iterator of piData) {
      if (iterator.teamName === 'Ops') {
        return iterator.hoursSpent;
      }
    }
  });


  pieDevColours: string[] = this.configureDefaultColours(this.pieDevTeamData);
  pieOpsColours: string[] = this.configureDefaultColours(this.pieOpsTeamData);

  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        label: 'Dev Team',
        data: this.pieDevTeamData,
        backgroundColor: this.pieDevColours
      },
      {
        label: 'Ops Team',
        data: this.pieOpsTeamData,
        backgroundColor: this.pieOpsColours
      }
    ]
  };

  hoursByProjectChartDataMixed = {
    labels: this.pieLabels,
    datasets: [
      {
        label: 'Dev Team',
        type: 'bar',
        data: this.pieDevTeamData,
        backgroundColor: this.pieDevColours
      },
      {
        label: 'Ops Team',
        type: 'line',
        data: this.pieOpsTeamData,
        backgroundColor: this.pieOpsColours
      }
    ]
  };

  constructor() { }
  
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    console.log(this.pieDevTeamData);
  }

  private configureDefaultColours(data: number[]): string[] {
    let customColours: string [];

    if (data.length) {
      customColours = data.map( (ele, idx) => {
        return DefaultConstants.DEFAULT_COLOURS[idx % DefaultConstants.DEFAULT_COLOURS.length];
      });
    }
    return customColours;
  }

  onDataSelect(event) {
    let dataSetIndex = event.element._datasetIndex;
    let dataItemIndex = event.element._index;

    let labelClicked = this.hoursByProjectChartData.datasets[dataSetIndex].label;
    let valueClicked = this.hoursByProjectChartData.datasets[dataSetIndex].data[dataItemIndex];

    alert(`Look's like ${labelClicked} worked ${valueClicked} hour's !`);
  }

}
