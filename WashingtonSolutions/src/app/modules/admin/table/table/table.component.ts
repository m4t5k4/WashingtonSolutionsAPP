import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service'
import {FoosballTable} from 'src/app/shared/models/foosball-table.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private _tableService: TableService) {
    this.getTables()
    };
  

  tables: FoosballTable[];
  columnsToDisplay = ['userID', 'name', 'companyname', 'address','contact','verwijderen'];

  //CRUD methods

  deleteUser(table: FoosballTable) {

}

  getTables() {
    this._tableService.getTables().subscribe(result => {
      this.tables = result;
      console.log(result);
    })}

  ngOnInit(): void {
  }

}
