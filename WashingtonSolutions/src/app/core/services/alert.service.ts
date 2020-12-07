import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../../data/schema/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
}
