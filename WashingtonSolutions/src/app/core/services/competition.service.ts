import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Competition } from 'src/app/shared/models/competition.model';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private competition: Observable<Competition>;

  constructor(private http: HttpClient) {

  }

  public getCompetitions(){
    return this.http.get<Competition[]>(`${environment.apiUrl}/competitions`);
  }
}
