import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../shared/models/team.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiUrl}/teams`);
  }

  getTeam (id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.apiUrl}/teams/${id}`);
  }

  addTeam (team) {
    return this.http.post(`${environment.apiUrl}/teams`, team)
  }

  deleteTeam (id: number) {
    return this.http.delete(`${environment.apiUrl}/teams/${id}`);
  }

  putTeam(team) {
    return this.http.put(`${environment.apiUrl}/teams/${team.id}`, team);
  }
}
