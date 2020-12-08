import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../../shared/shared.module';




@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class TableModule { }
