import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/core/services/table.service'
import { Table } from 'src/app/shared/models/table.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';
import { FileService } from 'src/app/core/services/file.service';

interface Option {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  message;
  imagePath;
  imgURL;
  @ViewChild('inputFile') inputFile: ElementRef;

  users: Option[] = [
    
  ]

  constructor(
    private _tableService: TableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private fileService: FileService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tablename: ['', Validators.required],
      companyname: ['', Validators.required],
      address: ['', Validators.required],
      contactPersonID: []
    });
  }

  get f() { return this.form.controls; }


  onSubmit(files) {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    let tablePictureID;
    if (this.imgURL) {
      const file = files[0];
      this.fileService.upload(file).subscribe(data => {
        tablePictureID = data.fileID;
        console.log(tablePictureID);
      });
    } else {tablePictureID=null}

    //var t = new Table(0, this.f.tablename.value, this.f.companyname.value, this.f.address.value, 1, 1)
    var t = {
      tableID: null,
      tableName: this.f.tablename.value,
      companyName: this.f.companyname.value,
      address: this.f.address.value,
      tablePictureID: tablePictureID,
      contactPersonID: 0
    }
    //TODO: userID == ingelogde gebruiker
    console.log(t)
    this._tableService.addTable(t)
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

  preview (files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
    
  }

