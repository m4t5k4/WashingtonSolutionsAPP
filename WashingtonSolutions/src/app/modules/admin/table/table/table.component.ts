import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service'
import {Table} from 'src/app/shared/models/table.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private _tableService: TableService) {
    this.getTables()
    };
  

  tables: Table[];
  columnsToDisplay = ['userID', 'name', 'companyname', 'address','contact','verwijderen'];

  //CRUD methods

  deleteTable(table: Table) {
    this._tableService.deleteTable(table.TableID)
}

  getTables() {
    this._tableService.getTables().subscribe(result => {
      this.tables = result;
      console.log(result);
    })}

  ngOnInit(): void {
  }

}
