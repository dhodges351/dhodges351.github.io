import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private _listener = new Subject<any>();
  tabListener = this._listener.asObservable();

  constructor() { }

  changeTab(newTabIndex: number) {
    this._listener.next(newTabIndex);
  }
}