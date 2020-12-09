import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../../shared/shared.module';
import { NewTableComponent } from './new-table/new-table.component';




@NgModule({
  declarations: [TableComponent, NewTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class TableModule { }
