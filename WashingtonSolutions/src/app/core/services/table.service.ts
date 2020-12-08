import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FoosballTable } from 'src/app/shared/models/foosball-table.model'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getTables(): Observable<FoosballTable[]> {
    return  this.http.get<FoosballTable[]>("http://localhost:5000/api/tables");
    
  }


}
