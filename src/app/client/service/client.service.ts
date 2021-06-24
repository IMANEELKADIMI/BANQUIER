import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  private clientUrl1: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8082/banquier';
    this.clientUrl1 = 'http://localhost:8082/banquier/client';

  }
  public findAll(code: string): Observable<Client[]> {
    return this.http.get<Client[]>(
      this.clientUrl+'/agence/'  + code + '/clients'
    );
  }
  public findClient(code: String): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl + '/client' + code);
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl1 , client);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.clientUrl1}/${id}`);
  }

  sus_act(id: number): Observable<any> {
    return this.http.put(this.clientUrl +'/sus_act/' + id, {});
    }

}
