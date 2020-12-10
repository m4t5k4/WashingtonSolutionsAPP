import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/core/services/table.service'
import { Table } from 'src/app/shared/models/table.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _tableService: TableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tablename: ['', Validators.required],
      companyname: ['', Validators.required],
      address: ['', Validators.required]
    });
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
    var t = new Table(0, this.f.tableName.value, this.f.companyName.value, this.f.Address.value, 1, 1)
    //TODO: userID == ingelogde gebruiker
    console.log(t)
    this._tableService.addTable(t)
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl("/table");
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
      
  }
    
  }

