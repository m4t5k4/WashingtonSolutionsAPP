import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Table } from 'src/app/shared/models/table.model'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return  this.http.get<Table[]>("https://kickerapi.azurewebsites.net/api/tables");
    
  }

  getTable(id: number): Observable<Table> {
    return this.http.get<Table>("https://kickerapi.azurewebsites.net/api/tables/" + id);

  }

  addTable(table: Table) {
    return this.http.post("https://kickerapi.azurewebsites.net/api/tables", table)
      //.subscribe(result => {})  ???waarom deed ik dit?
  }

  deleteTable(id: number) {
    console.log("delete table " + id)
    return this.http.delete("https://kickerapi.azurewebsites.net/api/Tables/" + id);
  }

  putTable(table: Table) {
    return this.http.put("https://kickerapi.azurewebsites.net/api/Tables/" + table.tableID, table);
  }


}
