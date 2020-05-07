import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
  return this.http.get<any>('assets/showcase/data/scheduleevents.json')
    .toPromise()
    .then(res => <any[]>res.data)
    .then(data => { return data; });
  }
}
