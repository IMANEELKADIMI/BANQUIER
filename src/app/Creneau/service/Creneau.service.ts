import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Creneau } from '../model/Creneau';

@Injectable({
  providedIn: 'root',
})
export class CreneauService {
  private operatorUrl: string;
  constructor(private http: HttpClient) {
    this.operatorUrl = 'http://localhost:8082/banquier';
  }
  public findAll(): Observable<Creneau[]> {
    return this.http.get<Creneau[]>(this.operatorUrl + '/creneaux' );
  }
  public findAlll() : Observable<Creneau[]> {
    return this.http.get<Creneau[]>(this.operatorUrl + '/rendez-vous' );
  }

  

  public save(operator: Creneau) {
    return this.http.post<Creneau>('http://localhost:8082/banquier/addcreno', operator);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.operatorUrl}/${id}`);
  }
}


