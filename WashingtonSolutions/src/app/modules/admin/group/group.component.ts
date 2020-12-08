import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Group } from '../../../shared/models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupItems: Group[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(){
    this.http.get<any>('https://kickerapi.azurewebsites.net/api/groups').subscribe(
      response => {
        console.log(response);
        this.groupItems = response;
      }
    )
  }

  delete(object){
    console.log(object.groupID);
    this.http.delete('https://kickerapi.azurewebsites.net/api/Groups/' + object.groupID).subscribe(
      response => {
        let index = this.groupItems.indexOf(object);
        this.groupItems.splice(index, 1);
      }
    )
    this.ngOnInit();
  }

}
