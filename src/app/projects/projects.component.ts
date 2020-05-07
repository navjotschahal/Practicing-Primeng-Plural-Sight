import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Developer } from '../shared/shared.interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectFormGrp: FormGroup;
  minProjectDate: Date = new Date();
  allDevs = [
    { value: 'Jill Cool', label: 'Jill' },
    { value: 'Ramos Cool', label: 'Ramos' },
    { value: 'Jane Cristie', label: 'Jane' },
    { value: 'Saraha James', label: 'Saraha' },
    { value: 'Tom Hank', label: 'Tom' },
    { value: 'Will Smith', label: 'Will' },
    { value: 'James Smith', label: 'James' }
  ];

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.projectFormGrp = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      projectDescription: ['My cool project', [Validators.required, Validators.maxLength(150)]],
      projectDate: [new Date(), [Validators.required]],
      projectType: ['B'],
      selectedDevs: [[]],
      projectRating: [3]
    });
  }

  hasFormErrors(): boolean {
    return !this.projectFormGrp.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectFormGrp.value));
  }

}
