import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../../shared/models/tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private http: HttpClient
  ) { }

  getTournaments (): Observable<Tournament[]> {
    return this.http.get<Tournament[]>("https://kickerapi.azurewebsites.net/api/tournaments");
  }

  getTournament (id: number): Observable<Tournament> {
    return this.http.get<Tournament>("https://kickerapi.azurewebsites.net/api/tournaments/" + id);
  }

  addTournament (tournament) {
    return this.http.post("https://kickerapi.azurewebsites.net/api/tournaments", tournament)
  }

  deleteTournament (id: number) {
    return this.http.delete("https://kickerapi.azurewebsites.net/api/tournaments/" + id);
  }

  putTournament (tournament) {
    return this.http.put("https://kickerapi.azurewebsites.net/api/tournaments/" + tournament.id, tournament);
  }
}
