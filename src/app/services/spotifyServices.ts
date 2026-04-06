import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SpotifyServices {
  constructor(private http: HttpClient) {}

  searchArtist(name: string) {
    const credencials = btoa(`${environment.spotifyClientId}: ${environment.spotifyClientSecret}`);

    const headers = new HttpHeaders({
      Authorization: `Basic(${credencials})`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new HttpParams().set('grant_type', 'client_credentials');
  }

  // private getToken(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
  //   });
  //   const body = new HttpParams().set('grant_type', 'client_credentials');
  // }
}
