import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly apiUrl: string = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getChannelData(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/channels/${username}`);
  }
}
