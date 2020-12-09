import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service'
import { Table } from 'src/app/shared/models/table.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private _tableService: TableService,
    private route: ActivatedRoute,
    private router: Router)
  {
    this.getTables()
    };
  

  tables: Table[];
  columnsToDisplay = ['userID', 'name', 'companyname', 'address','contact','verwijderen'];

  //CRUD methods

  deleteTable(id:number) {
    this._tableService.deleteTable(id).subscribe({
      next: () => {
        //refresh table
        this.getTables()

      }
    })
}

  getTables() {
    this._tableService.getTables().subscribe(result => {
      this.tables = result;
      console.log(result);
    })}

  ngOnInit(): void {
  }

}
