import { Injectable } from '@angular/core';
import { EventModel } from './event-model';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventModelService {

  private _URL = "http://assignment2comp4870.azurewebsites.net/api/EventsRestful";

  constructor(private http: Http) { }

  getEventModels(): Promise<EventModel[]> {
    return this.http.get(this._URL)
    .toPromise()
    .then(resp => resp.json() as EventModel[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
