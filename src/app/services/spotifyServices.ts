import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { SpotifySearchResponse, SpotifyTokenResponse } from '../core/models/spotify.interface';

@Injectable({ providedIn: 'root' })
export class SpotifyServices {
  constructor(private http: HttpClient) {}

  searchArtist(name: string) {
    const credencials = btoa(`${environment.spotifyClientId}:${environment.spotifyClientSecret}`);

    const headers = new HttpHeaders({
      Authorization: `Basic ${credencials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    // const body = new HttpParams().set('grant_type', 'client_credentials');
    const body = 'grant_type=client_credentials';

    return this.http
      .post<SpotifyTokenResponse>(environment.spotifyTokenUrl, body, { headers })
      .pipe(
        switchMap((res) => {
          const authHeader = new HttpHeaders({
            Authorization: `Bearer ${res.access_token}`,
          });
          return this.http.get<SpotifySearchResponse>(
            `${environment.spotifyApiUrl}/search?q=${name}&type=artist&limit=10`,
            { headers: authHeader },
          );
        }),
      );
  }
}
