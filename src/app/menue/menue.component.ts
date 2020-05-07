import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.menuItems = [
      { label: 'Dashboard', icon: 'fa fa-home', routerLink: ['/dashboard'] },
      { label: 'All-Times', icon: 'fa fa-calendar', routerLink: ['/all-times'] },
      { label: 'My-Timesheet', icon: 'fa fa-clock-o', routerLink: ['/my-timesheet'] },
      { label: 'Add Project', icon: 'fa fa-tasks', routerLink: ['/add-project'] },
      { label: 'My Profile', icon: 'fa fa-users', routerLink: ['/my-profile'] },
      { label: 'Settings', icon: 'fa fa-sliders', routerLink: ['/settings'] },
    ];

  }

}
