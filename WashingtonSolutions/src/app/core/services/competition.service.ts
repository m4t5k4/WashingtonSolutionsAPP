import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Competition } from 'src/app/shared/models/competition.model';
import { GameType } from 'src/app/shared/models/game-type.model';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private competition: Observable<Competition>;

  constructor(private http: HttpClient) {

  }

  // GET competitions
  public getCompetitions() {
    return this.http.get<Competition[]>(`${environment.apiUrl}/competitions`);
  }

  // GET gameTypes
  public getGameTypes() {
    return this.http.get<GameType[]>(`${environment.apiUrl}/gametypes`);
  }

  // POST competition
  public postCompetition(competition) {
    return this.http.post<Competition>(`${environment.apiUrl}/competitions`, competition);
  }
}
