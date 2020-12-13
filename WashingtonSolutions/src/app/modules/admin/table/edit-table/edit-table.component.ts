import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/core/services/table.service'
import { Table } from 'src/app/shared/models/table.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {


  form: FormGroup;
  loading = false;
  submitted = false;
  table: Table;
  data = false;

  constructor(
    private _tableService: TableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit(): void {

    


    //deze functie in new-table component zetten zou beter zijn! <-- TODO
    var id = Number(this.route.snapshot.paramMap.get("id"));
    this._tableService.getTable(id).subscribe(result => {
      this.table = result
      console.log(result)
      this.data = true;

      this.form = this.formBuilder.group({
        tableName: ['', Validators.required],
        companyName: ['', Validators.required],
        address: ['', Validators.required]
      });

      this.form.patchValue(result)
      //errors nog doen
    })
    
  }

  get f() { return this.form.controls; }
 

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
   //tablevariablen
    this.table.tableName = this.f.tableName.value;
    this.table.companyName = this.f.companyName.value;
    this.table.address = this.f.address.value;
    //TODO: userID == ingelogde gebruiker
    console.log(this.table)
    this._tableService.putTable(this.table)
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl("/admin/table");
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  goBack () {
    this.router.navigateByUrl("/admin/table")
  }

}
