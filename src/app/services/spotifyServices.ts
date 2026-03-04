import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyServices {
  private clientId: string = 'your_client_id';
  private clientSecret: string = 'your_client_secret';

  constructor(private http: HttpClient) {}

  // private getToken(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
  //   });
  //   const body = new HttpParams().set('grant_type', 'client_credentials');
  // }
}
