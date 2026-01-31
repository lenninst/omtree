import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserDetails(username: string) {
    const url = `${this.apiUrl}=${username}`;
    return this.http.get(url);
  }
}
