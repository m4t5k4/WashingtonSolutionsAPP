import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../shared/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>("https://kickerapi.azurewebsites.net/api/teams");
  }

  getTeam (id: number): Observable<Team> {
    return this.http.get<Team>("https://kickerapi.azurewebsites.net/api/teams/" + id);
  }

  addTeam (team) {
    return this.http.post("https://kickerapi.azurewebsites.net/api/teams", team)
  }

  deleteTeam (id: number) {
    return this.http.delete("https://kickerapi.azurewebsites.net/api/teams/" + id);
  }

  putTeam(team) {
    return this.http.put("https://kickerapi.azurewebsites.net/api/teams/" + team.id, team);
  }
}
