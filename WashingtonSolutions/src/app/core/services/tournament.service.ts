import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Tournament } from 'src/app/shared/models/tournament.model'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>("https://kickerapi.azurewebsites.net/api/tournaments");

  }
}
