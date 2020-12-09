import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { Group } from '../../../shared/models/group.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  groupItems: Group[];
  closeResult = '';
  modifyGroup: Group;
  invalidModify: boolean;
  succes: boolean;
  notSucces: boolean;

  constructor(private http: HttpClient, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getGroup();
  }

  open(content, groupItem) {
    this.modifyGroup = groupItem;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openAdd(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getGroup(){
    this.http.get<any>('https://kickerapi.azurewebsites.net/api/groups').subscribe(
      response => {
        console.log(response);
        this.groupItems = response;
      }
    );
  }

  delete(object){
    console.log(object.groupID);
    this.http.delete('https://kickerapi.azurewebsites.net/api/Groups/' + object.groupID).subscribe(
      response => {
        const index = this.groupItems.indexOf(object);
        this.groupItems.splice(index, 1);
      }
    );
    this.ngOnInit();
  }

  modify(x){
    console.log(x);
    console.log(this.modifyGroup);
    return this.http.put('https://kickerapi.azurewebsites.net/api/Groups/' + this.modifyGroup.groupID,
    x).subscribe(result => {
      if (result){
        this.ngOnInit();
      }
      else{
        this.invalidModify = true;
      }
    });
  }

  aad(x){
    console.log("testAdd");
    return this.http.post('https://kickerapi.azurewebsites.net/api/Groups/',
    x).subscribe(result => {
      if (result){
        this.ngOnInit();
        this.succes = true; 
        this.notSucces = false;
      }
      else{
        this.succes = false; 
        this.notSucces = true;
      }
    });
  }
}
